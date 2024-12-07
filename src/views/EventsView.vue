<script setup>
    import Events from '../components/Events.vue';
</script>

<template>
    <div class="view-container events-container">
        <section class="events-section heading-section">
            <h3 class="events-header">Events</h3>
            <p class="heading-text">
                If you have any questions about our event offerings or if you are a local artist 
                interested in hosting an event in our space please <router-link to="/contact">Contact Us</router-link>.
            </p>
        </section>
        <section class="events-section body-section">
            <h3 class="events-header">Upcoming Events</h3>
            <Events />
            <!-- <TicketTailor />  -->
        </section>
        <!-- <section class="events-section body-section">
            <h3 class="events-header">Ongoing Events</h3>
            <Events />
        </section>
        <section class="events-section body-section">
            <h3 class="events-header">Special Events</h3>
            <Events />
        </section>  -->
    </div>
</template>
  
<style scoped>
    h3, .heading-text{
        text-align: center;
    }

    .heading-text {
        width: 60%;
        margin: auto;
        padding: 1rem 0;
    }

    @media (max-width: 600px) {
        .heading-text {
            width: 90%;
        }
    }

</style>