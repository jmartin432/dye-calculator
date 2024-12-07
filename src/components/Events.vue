<template>
    <div id="events-cards-container">
        <div v-for="event in events" class="event-card" :key="event.title + event.date">
            <div class="event-image-container event-card-block">
                <img 
                    :src="event.imageUrl"
                    :alt="event.title + ' event'" 
                    class="event-image"
                    @error="errorImage">
            </div>
            <div class="event-description-container event-card-block">
                <details>
                    <summary>
                        <h4>{{ event.title }}</h4>
                        <h5>Date: {{event.dateString}}</h5>
                        <h5 v-if="event.cost === 0">Cost: Free!</h5>
                        <h5 v-else>Cost: ${{ event.cost }}</h5>
                        <p class="event-description" v-html="event.description"></p>
                    </summary>
                </details>
                <!-- <div v-if="event.dates.length === 0" class="no-dates-span">
                    <span>No dates are currently scheduled.</span>
                </div>
                <div v-else>
                    <select name="event-date-select" v-model="event.selectedDate">
                        <option value="">Please choose an option...</option>
                        <option v-for="date in event.dates" :value="date.registerUrl" :key="date.registerUrl">
                            {{ date.dateString }}
                        </option>
                    </select>
                    <button class="btn register-button" :disabled="!event.selectedDate" @click="register" :data-url="event.selectedDate">Register</button>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script> 
    export default {
        data() {
            return {
                events: null,
                cutOffDate: new Date(Date.now() - (48 * 60 * 60 * 1000))
            };
        },
        methods: {
            errorImage(event) { 
                event.target.src = "/images/image-coming-soon-1x1.jpg" 
            },
            register(event) {
                window.open(event.target.dataset.url,'_blank')
            }
        },
        async mounted() {
            let eventsData = await fetch('/data/events.json');
            this.events = await eventsData.json();
            this.events = this.events.filter((event) => event.display && (Date.parse(event.date) >= this.cutOffDate));
            this.events.sort((a, b) => {
                const dateA = a.date; 
                const dateB = b.date;
                if (dateA < dateB) {
                    return -1;
                }
                if (dateA > dateB) {
                    return 1;
                }
                // names must be equal
                return 0;
            });
            console.log('Events', this.events)
        }
    };
</script>

<style scoped>
    .event-card {
        --eventCardColor1: var(--card-color-1);
        --eventCardColor2: var(--card-color-2);
        background: linear-gradient(var(--eventCardColor1), var(--eventCardColor2));
        width: 80%;
        margin: 1rem auto;
        box-sizing: border-box;
        border: solid 1px var(--border-color);
        border-radius: 5px;
        padding: 1rem;
        display: grid;
        grid-template-columns: 30% 70%;
        transition: translate .3s, --eventCardColor1 .5s, --eventCardColor2 .5s;
    }

    @media (max-width: 600px) {
        .event-card {
            width: 100%;
            margin: 1rem 0;
            grid-template-columns: 100%;
        }
    }

    .event-card:hover {
        --eventCardColor1: var(--card-color-2);
        --eventCardColor2: var(--card-color-1);
        translate: 0 -5px;
    }

    .event-card-block {
        padding: 1rem;
        /* border: solid 1px #ffffff; */
    }

    @media (max-width: 600px) { 
        .event-card-block {
            padding: 1rem;
        }
    }

    .event-image-container {
        grid-column: 1 / span 1;
        grid-row: 1 / span 1;
    }

    .event-image {
        width: 100%;
        border-radius: 10px;
    }

    @media (max-width: 600px) {
        .event-image {
            width: 100%;
        }
    }

    .event-text-container {
        grid-column: 1 / span 1;
        grid-row: 1 / span 1;
    }

    summary {
        display: block;
    }

    /* summary::after {
        margin-top: .5rem;
        display: inline-block;
        content: 'SHOW DETAILS';
        transition: 0.2s;
        font-family: Poppins;
        color:var(--main-a-color);
        font-size: 1rem;
        cursor: pointer;
    }

    @media (max-width: 600px) {
        summary::after {
            font-size: .8rem;
        }
    } */

    /* details[open] > summary::after {
        content: 'HIDE DETAILS';
    } */

    .event-description {
        margin: 1rem 0 0 0;
    }

    select {
        margin-top: 1rem;
        display: block;
    }

    .register-button {
        margin-top: 1rem;
    }

    span {
        color: #fff;
        font-size: 1rem;
        padding-left: 1rem;
    }

    .no-dates-span {
        padding-top: 1rem;
    }
</style>