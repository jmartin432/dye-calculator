<template>
    <div id="artist-cards-container">
        <div v-for="artist in artists" class="artist-card" :key="artist">
            <div class="artist-image-container artist-card-block">
                <img 
                    :src="artist.imageUrl"
                    :alt="artist.title + ' Image'" 
                    class="artist-image"
                    @error="errorImage">
            </div>
            <div class="artist-bio-container artist-card-block">
                <h4>{{ artist.title }}</h4>
                <p class="artist-description">{{ artist.description }}</p>
                <div class="artist-social-container">
                    <div v-if="artist.instagram" class="artist-social-icon-container">
                        <a :href="'https://www.instagram.com/' + artist.instagram" target="_blank">
                            <img src="../assets/icons/instagram.svg" class="artist-social-icon"/>
                        </a>
                    </div>
                    <div v-if="artist.website" class="artist-social-icon-container">
                        <a :href="artist.website" target="_blank">
                            <img src="../assets/icons/website.svg" class="artist-social-icon"/>
                        </a>
                    </div>
                    <div v-if="artist.email" class="artist-social-icon-container">
                        <a :href="'mailto:' + artist.email" target="_blank">
                            <img src="../assets/icons/email.svg" class="artist-social-icon"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script> 
    export default {
        data() {
            return {
                artists: null,
            };
        },
        methods: {
            errorImage(event) { 
                event.target.src = "/images/image-coming-soon-1x1.jpg" 
            } 
        },
        async mounted() {
            let artistData = await fetch('/data/artists.json');
            this.artists = await artistData.json()
            this.artists.sort((a, b) => {
                const nameA = a.title.toUpperCase(); // ignore upper and lowercase
                const nameB = b.title.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                // names must be equal
                return 0;
            });
            this.artists.forEach(artist => artist.imageUrl = '/images/artists/' + artist.imageName)
            console.log('ARTISTS', this.artists)
        }
    };
</script>

<style scoped>
    .artist-card {
        --artistCardColor1: var(--card-color-1);
        --artistCardColor2: var(--card-color-2);
        background: linear-gradient(var(--artistCardColor1), var(--artistCardColor2));
        width: 80%;
        margin: 1rem auto;
        box-sizing: border-box;
        border: solid 1px var(--border-color);
        border-radius: 5px;
        padding: 1rem;
        display: grid;
        grid-template-columns: 30% 70%;
        transition: translate .3s, --artistCardColor1 .5s, --artistCardColor2 .5s;
    }

    @media (max-width: 600px) {
        .artist-card {
            width: 100%;
            margin: 1rem 0;
            grid-template-columns: 100%;
        }
    }

    .artist-card:hover {
        --artistCardColor1: var(--card-color-2);
        --artistCardColor2: var(--card-color-1);
        translate: 0 -5px;
    }

    .artist-card-block {
        padding: 1rem;
        /* border: solid 1px #ffffff; */
    }

    @media (max-width: 600px) { 
        .artist-card-block {
            padding: 1rem;
        }
    }

    .artist-image-container {
        grid-column: 1 / span 1;
        grid-row: 1 / span 1;
    }

    .artist-image {
        width: 100%;
        border-radius: 10px;
    }

    @media (max-width: 600px) {
        .artist-image {
            width: 100%;
        }
    }

    .artist-text-container {
        grid-column: 1 / span 1;
        grid-row: 1 / span 1;
    }

    .artist-description {
        margin: 1rem 0 0 0;
    }

    .artist-social-container {
        display: flex;
        gap: 20px;
        align-items: center;
        margin: 1rem 0 0 0;
    }

    .artist-social-icon-container {
        padding: .25rem .5rem;
        margin: 0px;
    }

    .artist-social-icon {
        width: 1.5rem;
        transition: .3s
    }

    .artist-social-icon:hover {
        transform: scale(1.05, 1.05)
    }
</style>