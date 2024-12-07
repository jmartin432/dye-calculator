<script setup>
    import ContactForm from '../components/ContactForm.vue';
    import ApplicationForm from '../components/ApplicationForm.vue';
</script>

<template>
    <div class="view-container contact-container">
        <section class="contact-section heading-section">
            <h3 class="contact-header">Contact the Bridge Rats</h3>
        </section>
        <section class="application-section">
            <p class="contact-text">If you would like to apply for an available studio or be added to our waitlist, please click the 'Apply' button below.</p>
            <ApplicationForm />
        </section>
        <section class="contact-section">
            <p class="contact-text">For general inquiries and information, please use the contact form below.</p>
            <ContactForm />
        </section>
    </div>
</template>
  
<style scoped>
    .contact-header {
        text-align: center;
        padding: .5rem 0;
    }
    
    .contact-text {
        text-align: left;
        padding: 0 1rem;
    }
</style>