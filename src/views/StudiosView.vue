<script setup>
    import AvailableStudios from '../components/AvailableStudios.vue';
    import ApplicationForm from '../components/ApplicationForm.vue';
    import SlideShow from '../components/SlideShow.vue';
</script>

<template>
    <div class="view-container studios-container">
        <section class="studios-section heading-section">
            <h3 class="studios-header">Private Studios</h3>
            <p class="heading-text">
                Bridge Rat Studios has 16 private studio spaces on 2 floors. In addition to their private studio space, 
                resident artists have access to large common areas on each floor, a utility sink on each floor, 
                a backyard and kitchenette.  
            </p>
            <!-- <h3 class="studios-header">Floor Looms</h3>
            <p class="heading-text">
                We have two heavy-duty, 8-shaft floor looms for rent on a monthly basis for $150/month. Check out the images below. 
                If you are interested in renting one of our looms, please fill out the application below.
            </p>
            <h3 class="studios-header">Community Membership</h3>
            <p class="heading-text">
                We offer painting space in our common areas. Monthly membership is $90 and includes a locker, painting storage, 
                24-hour access, access to all common areas (utility sinks, garden, kitchenette) and participation in community events.
            </p> -->
            <ApplicationForm />
            <SlideShow />
        </section>

        <section class="studios-section">
            <h3 class="studios-header">Available Studios</h3>
            <AvailableStudios />
        </section>
    </div>
</template>
  
<script>
</script>

<style scoped>
    .studios-container {
        display: grid;
        gap: 1.5rem;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: 1fr;
        margin: 2rem auto;
    }

    @media (max-width: 600px) {
        .studios-container {
            grid-template-columns: 1fr;
            /* grid-template-rows: repeat(3 1fr); */
        }
    }

    h3 {
        text-align: center;
    }

    .heading-text {
        text-align: center;
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