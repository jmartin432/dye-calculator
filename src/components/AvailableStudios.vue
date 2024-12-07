<template>
    <div id="studio-cards-container">
        <div id="none-available-container" v-if="noneAvailable">
            <p>{{ noneAvailableMessage }}</p>
        </div>
        <div v-for="studio in studios" class="studio-card" :key="studio.name">
            <!-- <div class="studio-image-container studio-card-block">
                <img :alt="studio.name + ' Image'" class="studio-image" :src="getImageUrl(studio.name)">    
            </div> -->
            <div class="studio-details-container studio-card-block">
                <h4>{{ studio.name }}</h4>
                <p><b>Rent:</b> ${{ studio.rent }}</p>
                <p v-if="studio.squareFeet"><b>Size:</b> {{ studio.squareFeet }} square feet</p>
                <p><b>Date Available:</b> {{ studio.dateAvailableString }}</p>
                <p v-if="studio.notes"><b>Notes:</b> {{ studio.notes }}</p>    
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                studios: null,
                noneAvailableMessage: 'There are no studios available at this time. You are still welcome to apply and we will reach out when something opens up.',
            };
        },
        computed: {
            noneAvailable: function() {
                return this.studios ? this.studios.length === 0 : false
            }
        },
        methods: {
        },
        async mounted() {
            let studioData = await fetch('/data/studios.json');
            this.studios = await studioData.json();
            this.studios = this.studios.filter(studio => studio.available);
            this.studios.forEach(studio => {
                studio.dateAvailableString = (new Date(studio.dateAvailable) <= Date.now() || !studio.dateAvailable )? 'Immediately' : new Date(studio.dateAvailable).toLocaleDateString('en-us', { timeZone: "UTC", year:"numeric", month:"short", day:"numeric"}) 
            })
            console.log('STUDIOS', this.studios)
        }
    };
</script>

<style scoped>
    #none-available-container {
        text-align: center;
    }

    #studio-cards-container {
        margin: auto;
    }

    .studio-card {
        --studioCardColor1: var(--card-color-1);
        --studioCardColor2: var(--card-color-2);
        background: linear-gradient(var(--studioCardColor1), var(--studioCardColor2));
        width: 90%;
        margin: 1rem auto;
        border: solid 1px var(--border-color);
        border-radius: 5px;
        padding: 1rem;
        transition: translate .3s, --studioCardColor1 .5s, --studioCardColor2 .5s;
    }

    @media (max-width: 600px) {
        .studio-card {
            width: 100%;
            margin: 1rem 0;
            grid-template-columns: 100%;
        }
    }

    .studio-card:hover {
        --studioCardColor1: var(--card-color-2);
        --studioCardColor2: var(--card-color-1);
        translate: 0 -5px;
    }

    .studio-card-block {
        padding: 1rem;
        /* border: solid 1px #ffffff; */
    }

    @media (max-width: 600px) {
        .studio-card-block {
            padding: 1rem;
        }
    }

    .studio-image-container {
        grid-column: 1 / span 1;
        grid-row: 1 / span 1;
    }

    .studio-image {
        width: 100%;
        border-radius: 10px;
    }

    @media (max-width: 600px) {
        .studio-image {
            width: 100%;
        }
    }

    .studio-text-container {
        grid-column: 1 / span 1;
        grid-row: 1 / span 1;
    }

    p {
        font-family: Alegreya;
        font-weight: 400;
        font-size: 1.25rem;
        color: #ffffff;
        margin: 0;
    }

    b {
        font-weight: 700;
        color: #d6d681
    }
</style>