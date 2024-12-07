<template>
    <div class="submit-container">
        <div class="submit-button-container">
            <button type="button" id="form-submit-button" @click=handleSubmitClick>Submit</button>
        </div>
        <div class="submit-message-container">
            <Transition name="fade-submit-message" mode="out-in">
                <p class="submit-message" key="submitting" v-if="localSubmitStatus === 'submitting'">
                    We are submitting your form.
                </p>
                <p class="submit-message" key="success" v-else-if="localSubmitStatus === 'success'">
                    Your form was successfully submitted. Thank you!
                </p>
                <p class="submit-message" key="fail" v-else-if="localSubmitStatus === 'fail'">
                    There was a problem submitting the form. Please send us an email at 
                    <a href="mailto:bridgeratstudios@gmail.com" target="_blank">bridgeratstudios@gmail.com</a>
                </p>
            </Transition>
        </div>
        <Transition name="fade-submit-button" mode="out-in">
            <div class="submit-close-button-container" v-show="localSubmitStatus === 'success' || localSubmitStatus === 'fail'">
                <button type="button" id="submit-close-button" @click=handleCloseSubmitMessage>X</button>
            </div>
        </Transition>
    </div>
</template>

<script>
    export default {
        props: {
            submitStatus: {
                type: String
            }
        },
        watch: { 
            submitStatus: function(newVal, oldVal) {
                console.log('SUBMIT STATUS CHANGE: ', oldVal, ' --> ', newVal);
                this.localSubmitStatus = newVal;
            }
        },
        emits: ['submitClick', 'resetForm'],
        data() {
            return {
                localSubmitStatus: null
            };
        },

        methods: {
            handleSubmitClick: function() {
                this.$emit('submitClick')
            },

            handleCloseSubmitMessage: function() {
                this.$emit('resetForm');
            }
        },
    };
</script>

<style scoped>
    .submit-container {
        width: 60%;
        display: grid;
        align-items: center;
        grid-template-columns: 4fr 1fr;
        grid-template-rows: 2;
    }

    @media (max-width: 600px) {
        .submit-container {
            width: 100%;
        }
    }

    .submit-button-container {
        grid-column: 1 / span 1;
        grid-row: 1 / span 1;
    }

    .submit-message-container {
        padding: .5rem 0;
        grid-column: 1 / span 1;
        grid-row: 2 / span 1;
    }

    .submit-close-button-container {
        padding: .5rem 0;
        grid-column: 2 / span 1;
        grid-row: 2 / span 1;
    }

    .fade-submit-message-enter-active,
    .fade-submit-message-leave-active,
    .fade-submit-button-enter-active,
    .fade-submit-button-leave-active {
        transition: opacity .5s
    }

    .fade-submit-message-enter,
    .fade-submit-message-leave-to,
    .fade-submit-button-enter,
    .fade-submit-button-leave-to {
        opacity: 0
    }
</style>