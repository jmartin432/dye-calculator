<script setup>
    import SubmitForm from '../components/SubmitForm.vue';
</script>

<template>
    <div id="contact-form-container" class="form-container">
        <form id="contact-form" method="post" autocomplete="off">
            <div class="form-item">
                <label for="topic">Topic<span class="required-warning">{{ topicWarning }}</span></label>
                <select name="topic" id="topic-selector" v-model="topic">
                    <option value="">Please Select a Topic...</option>
                    <option v-for="item in topicOptions" :value="item.value" :key="item.value">
                        {{ item.label }}
                    </option>
                </select>
            </div>
            <!-- Honey Pot -->
            <div class="form-item nobueno">
                <label for="question">Question</label>
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
                <label for="email-input">Email<span class="required-warning">{{ emailWarning }}</span></label>
                <input 
                    required 
                    type="email" 
                    id="email-input" 
                    v-model="email"
                />
            </div>
            <div class="form-item">
                <label for="message-input">Message<span class="required-warning">{{ messageWarning }}</span></label>
                <textarea 
                    required 
                    id="message-input" 
                    rows="3" 
                    v-model="message"
                ></textarea>
            </div>
            <div class="form-item g-recaptcha" data-sitekey="6LdjcyopAAAAAMPJZizsFgiUm5Y7UhX0hIVdfkia" data-theme="dark"></div>
            <div class="form-item">
                <SubmitForm :submitStatus="submitStatus" @submit-click="submitForm" @reset-form="resetForm"/>
            </div>
        </form>
    </div>
</template>

<script scoped>
    export default {
        data() {
            return {
                url: 'https://e17tgfiwr2.execute-api.us-east-1.amazonaws.com/prod/contact',
                topic: '',
                topicOptions: {
                    1: {value: 'general', label: 'General Information'},
                    2: {value: 'workshops', label: 'Workshops'},
                    3: {value: 'website', label: 'Website'},
                    4: {value: 'donations', label: 'Donations'}
                },
                question: null,
                name: '',
                email: '',
                message: '',
                form: 'contact',
                topicWarning: ' * ',
                nameWarning: ' * ',
                emailWarning: ' * ',
                messageWarning: ' * ',
                submitting: false,
                submitStatus: null
            };
        },

        methods: {

            resetForm: function() {
                this.name = this.email = this.message = "";
                this.submitStatus = null;
            },

            submitForm: function(event) {
                //event.preventDefault()
                if (this.submitting) {
                    //console.log('Form is submitting, Please wait.');
                    return; 
                }
                this.topicWarning = !this.topic ? " * Please choose a topic." : " * ";
                this.nameWarning = !this.name ? " * This field is required." : " * ";
                this.emailWarning = ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))) ? " * " : " * Please enter a valid email."
                this.messageWarning = !this.message ? " * This field is required." : " * ";
                if (!this.topic || !this.name || !((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))) || !this.message) return;
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
                            "topic": this.topic,
                            "name": this.name,
                            "email": this.email,
                            "message": this.message,
                            "honeyPot": this.question
                        })
                    }
                )
                .then((response) => response.json())
                .then((data) => {
                    console.log('RESPONSE: ', data)
                    //let responseBody = JSON.parse(data);
                    this.submitting = false
                    if (data.statusCode === 200) {
                        console.log('SUCCESS');
                        this.submitStatus = 'success';
                    } else {
                        throw new Error('Contact Form Submission Error')
                    }
                })
                .catch((error) => {
                    this.submitting = false
                    console.error('ERROR: ', error);
                    this.submitStatus = 'fail';
                });
            }
        },
    };
</script>

<style>
</style>