<script setup>
    import Workshops from '../components/Workshops.vue';
    import TicketTailor from '../components/TicketTailor.vue';
</script>

<template>
    <div class="view-container workshops-container">
        <section class="workshops-section heading-section">
            <h3 class="workshops-header">Workshops</h3>
            <p class="heading-text">
                Bridge Rat Studios is now offering workshops!
                This is a new endeavor for us and we are excited to share our art and craft with the city of Portland. 
                Please check back frequently for updates and additions.
            </p>
            <p class="heading-text">
                If you have any questions about our workshop offerings or if you are a local artist 
                interested in teaching a workshop in our space please <router-link to="/contact">Contact Us</router-link>.
            </p>
        </section>
        <section class="workshops-section body-section">
            <h3 class="workshops-header">Current Workshops</h3>
            <Workshops />
            <!-- <TicketTailor />  -->
        </section>
        
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