<script setup>
    import SubmitForm from '../components/SubmitForm.vue';
</script>

<template>
    <div id="application-form-container" class="form-container">
        <button id="application-button" @click=handleApplicationClick>{{ buttonText }}</button>
        <Transition name="application">
            <template v-if="showApplication">
                <form id="application-form" method="post" autocomplete="off">
                    <!-- Honey Pot -->
                    <div class="form-item nobueno">
                        <label for="Question">Question</label>
                        <input 
                            id="question"
                            required 
                            type="text"
                            v-model="question"
                        />
                    </div>
                    <!-- End Honey Pot -->
                    <div class="form-item">
                        <label for="name">Name<span class="required-warning">{{ nameWarning }}</span></label>
                        <input 
                            required 
                            type="text" 
                            id="name"
                            v-model="name"
                        />
                    </div>
                    <div class="form-item">
                        <label for="pronouns">Pronouns</label>
                        <select name="pronouns" id="prnouns-selector" v-model="pronouns">
                            <option v-for="item in pronounsOptions" :value="item.val" :key="item.id">
                                {{ item.val }}
                            </option>
                        </select>
                    </div>
                    <div class="form-item">
                        <label for="email-input">Email<span class="required-warning">{{ emailWarning }}</span></label>
                        <input 
                            required 
                            type="email" 
                            id="email-input" 
                            v-model="email"
                        />
                    </div>
                    <div class="form-item">
                        <label for="phone-input">Phone Number</label>
                        <input 
                            type="phone" 
                            id="phone-input" 
                            v-model="phoneNumber"
                        />
                    </div>
                    <div class="form-item">
                        <label for="space-input">What kind of space are you looking for?<span class="required-warning">{{ spaceWarning }}</span></label>
                        <textarea 
                            required 
                            id="space-input" 
                            rows="3" 
                            v-model="space"
                        ></textarea>
                    </div>
                    <div class="form-item">
                        <label for="about-input">Tell us about your art<span class="required-warning">{{ aboutWarning }}</span></label>
                        <textarea 
                            required 
                            id="about-input" 
                            rows="3" 
                            v-model="about"
                        ></textarea>
                    </div>
                    <div class="form-item">
                        <label for="reasons-input">Tell us what interests you about Bridge Rat Studios.<span class="required-warning">{{ reasonsWarning }}</span></label>
                        <textarea 
                            required 
                            id="reasons-input" 
                            rows="3" 
                            v-model="reasons"
                        ></textarea>
                    </div>
                    <div class="form-item">
                        <label for="social-media-input">Do you have any social media where we can see examples of your work?<span class="required-warning">{{ socialMediaWarning }}</span></label>
                        <textarea 
                            required 
                            id="social-media-input" 
                            rows="3" 
                            v-model="socialMedia"
                        ></textarea>
                    </div>
                    <div class="form-item g-recaptcha" data-sitekey="6LdjcyopAAAAAMPJZizsFgiUm5Y7UhX0hIVdfkia" data-theme="dark"></div>
                    <div class="form-item">
                        <SubmitForm :submitStatus="submitStatus" @submit-click="submitForm" @reset-form="resetForm"/>
                    </div>              
                </form>
            </template>
        </Transition>
    </div>
</template>

<script>
    export default {
    data() {
        return {
            url: 'https://e17tgfiwr2.execute-api.us-east-1.amazonaws.com/prod/application',
            question: null,
            name: '',
            pronouns: 'They/Them',
            pronounsOptions: {
                1: {id: 'they/them', val: 'They/Them'},
                2: {id: 'she/her', val: 'She/Her'},
                3: {id: 'he/him', val: 'He/Him'}
            },
            email: '',
            phoneNumber: '',
            space: '',
            about: '',
            reasons: '',
            socialMedia: '',
            nameWarning: ' * ',
            emailWarning: ' * ',
            spaceWarning: ' * ', 
            aboutWarning: ' * ',
            reasonsWarning: ' * ',
            socialMediaWarning: ' * ',
            showApplication: false,
            submitting: false,
            submitStatus: null
        };
    },

    computed: {
        buttonText: function() {
            return this.showApplication ? 'Hide Application' : 'Apply'
        }
    },

    methods: {

        resetForm: function() {
            this.name = this.email = this.phoneNumber = this.space = this.about = this.reasons = this.socialMedia = '';
            this.pronouns = 'They/Them';
            this.submitStatus = null;
        },

        submitForm: function(event) {
            if (this.submitting) {
                return
            };
            if (this.question) {
                return
            };
            console.log('Honey Pot: ', this.question)
            this.nameWarning = !this.name ? " * This field is required." : " * ";
            this.emailWarning = ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))) ? " * " : " * Please enter a valid email."
            this.spaceWarning = !this.space ? " * This field is required." : " * ";
            this.aboutWarning = !this.about ? " * This field is required." : " * ";
            this.reasonsWarning = !this.reasons ? " * This field is required." : " * ";
            this.socialMediaWarning = !this.socialMedia ? " * This field is required." : " * ";
            if (!this.name || !((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))) || !this.about || !this.reasons || !this.socialMedia) return;
            this.submitting = true;
            this.submitStatus = 'submitting';
            fetch(
                this.url, {
                    method: "POST",
                    mode: "cors",
                    credentials: "omit",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    redirect: "follow",
                    body: JSON.stringify({
                        "topic": 'application',
                        "name": this.name,
                        "email": this.email,
                        "phoneNumber": this.phoneNumber,
                        "space": this.space,
                        "about": this.about,
                        "reasons": this.reasons,
                        "socialMedia": this.socialMedia,
                        "honeyPot": this.question
                    })
                }
            )
            .then((response) => response.json())
            .then((data) => {
                console.log('RESPONSE: ', data)
                this.submitting = false
                if (data.statusCode === 200) {
                    console.log('SUCCESS');
                    this.submitStatus = 'success';
                } else {
                    throw new Error('Application Form Submission Error')
                }
            })
            .catch((error) => {
                this.submitting = false
                console.error('ERROR: ', error);
                this.submitStatus = 'fail';
            });
        },

        handleApplicationClick() {
            this.showApplication = !this.showApplication;
        }
    },
};
</script>

<style scoped>
    .application-enter-active {
        transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .application-leave-active {
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .application-enter-from,
    .application-leave-to {
        opacity: 0;
    }
</style>
