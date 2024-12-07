<template>
    <div id="workshops-cards-container">
        <div v-for="workshop in workshops" class="workshop-card" :key="workshop.title + workshop.date">
            <div class="workshop-image-container workshop-card-block">
                <img 
                    :src="workshop.imageUrl"
                    :alt="workshop.title + ' Workshop'" 
                    class="workshop-image"
                    @error="errorImage">
            </div>
            <div class="workshop-description-container workshop-card-block">
                <details>
                    <summary>
                        <h4>{{ workshop.title }}</h4>
                        <h5>Instructor: {{ workshop.instructor }}</h5>
                        <h5>Cost: {{ workshop.cost }}</h5>
                    </summary>
                    <p class="workshop-description" v-html="workshop.description"></p>
                </details>
                <div v-if="workshop.dates.length === 0" class="no-dates-span">
                    <span>No dates are currently scheduled.</span>
                </div>
                <div v-else>
                    <select name="workshop-date-select" v-model="workshop.selectedDate">
                        <option value="">Please choose an option...</option>
                        <option v-for="date in workshop.dates" :value="date.registerUrl" :key="date.registerUrl">
                            {{ date.dateString }}
                        </option>
                    </select>
                    <button class="btn register-button" :disabled="!workshop.selectedDate" @click="register" :data-url="workshop.selectedDate">Register</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script> 
    export default {
        data() {
            return {
                workshops: null,
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
            let workshopsData = await fetch('/data/workshops.json');
            this.workshops = await workshopsData.json();
            this.workshops = this.workshops.filter((workshop) => workshop.display);
            this.workshops.sort((a, b) => {
                const titleA = a.title; 
                const titleB = b.title;
                if (titleA < titleB) {
                    return -1;
                }
                if (titleA > titleB) {
                    return 1;
                }
                // names must be equal
                return 0;
            });
            this.workshops.forEach(workshop => {
                workshop.dates = workshop.dates.filter((date) => new Date(date.date) > this.cutOffDate)
                workshop.selectedDate = "";
            })
            console.log('WORKSHOPS', this.workshops)
        }
    };
</script>

<style scoped>
    .workshop-card {
        --workshopCardColor1: var(--card-color-1);
        --workshopCardColor2: var(--card-color-2);
        background: linear-gradient(var(--workshopCardColor1), var(--workshopCardColor2));
        width: 80%;
        margin: 1rem auto;
        box-sizing: border-box;
        border: solid 1px var(--border-color);
        border-radius: 5px;
        padding: 1rem;
        display: grid;
        grid-template-columns: 30% 70%;
        transition: translate .3s, --workshopCardColor1 .5s, --workshopCardColor2 .5s;
    }

    @media (max-width: 600px) {
        .workshop-card {
            width: 100%;
            margin: 1rem 0;
            grid-template-columns: 100%;
        }
    }

    .workshop-card:hover {
        --workshopCardColor1: var(--card-color-2);
        --workshopCardColor2: var(--card-color-1);
        translate: 0 -5px;
    }

    .workshop-card-block {
        padding: 1rem;
        /* border: solid 1px #ffffff; */
    }

    @media (max-width: 600px) { 
        .workshop-card-block {
            padding: 1rem;
        }
    }

    .workshop-image-container {
        grid-column: 1 / span 1;
        grid-row: 1 / span 1;
    }

    .workshop-image {
        width: 100%;
        border-radius: 10px;
    }

    @media (max-width: 600px) {
        .workshop-image {
            width: 100%;
        }
    }

    .workshop-text-container {
        grid-column: 1 / span 1;
        grid-row: 1 / span 1;
    }

    summary {
        display: block;
    }

    summary::after {
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
    }

    details[open] > summary::after {
        content: 'HIDE DETAILS';
    }

    .workshop-description {
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