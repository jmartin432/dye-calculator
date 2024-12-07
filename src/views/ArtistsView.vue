<script setup>
    import Artists from '../components/Artists.vue';
</script>

<template>
    <div class="view-container artists-container">
        <section class="artist-section heading-section">
            <h3 class="artists-header">Artists</h3>
            <p class="heading-text">
                Bridge Rat Studios is a diverse community of artists working in a variety of media. 
                We have leather-workers, metal-workers, fiber and textile artists, ceramicists and painters. 
            </p>
        </section>
        <section class="artist-section">
            <h3 class="artists-header">Current Artists</h3>
        <Artists />
        </section>
        
    </div>
</template>
  
<style scoped>
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