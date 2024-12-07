<script setup>
    import SlideShow from '../components/SlideShow.vue';
    import GoFundMe from '../components/GoFundMe.vue';
</script>

<template>
    <div class="view-container home-container">
        <section id="banner-section" class="home-section">
            <div class="banner-card">
                <div class="banner-card-header">
                    <h4>First Friday Art Night</h4>
                    <h4>Art Supplies Fund Raiser</h4>
                </div>
                <p class="banner-card-text">
                    We are a running  GoFundMe!!!
                <br><br>
                    The first Friday of every month Bridge Rat Studios opens it's doors to the public for a 
                    little community art making party. Whether it's a Shrinky-Dink lab, a moon-painting extravaganza, 
                    making bizarre representations of beings from another dimension or anything else the community wants 
                    (themes are crowdsourced), First Friday at Bridge Rat Studios is an all-ages friendly, community 
                    art-making adventure.
                <br><br>
                    We've been funding this out-of-pocket the last few months and we would like to continue offering 
                    this to the public every month moving forward. Please chip in a little for supplies so we can continue 
                    to cultivate a community of art and play.
                </p>
                <GoFundMe/>
                <a href="https://gofund.me/87224f1c" target="_blank">
                    <button id="banner-button">Donate</button>
                </a>
            </div>
        </section>
        <section id="who-we-are-section" class="home-section">
            <h3 id="who-we-are-header">Who We Are</h3>
            <p id="who-we-are-text">
                Bridge Rat Studios is a collective of artists and craftspeople working in Portland's Central 
                Eastside under the Morrison Bridge. We are leatherworkers, ceramicists, face painters, fiber artists, 
                sewists, metalworkers, painters and designers. Together, we co-manage a community gallery and common spaces
                for public workshops and events.
            </p>
        </section>
        <section id="mission-statement-section" class="home-section">
            <h3 id="mission-statement-header">Mission Statement</h3>
            <p id="mission-statement-text">
                The mission of Bridge Rat Studios is to preserve, protect and advocate for the economic interests of small 
                businesses owned and operated by artists and craftspeople. We do this by managing low rent spaces for members 
                to work, by offering common spaces to engage the broader community and by providing a supportive platform for 
                creative exploration of new opportunities. 
            </p>
        </section>
        <section id="slideshow-section" class="home-section">
            <SlideShow />
        </section>
        <section id="what-we-offer-section" class="home-section">
            <h3 id="what-we-offer-header">What We Offer</h3>
            <div id="what-we-offer-cards-container">
                <div class="what-we-offer-card">
                    <h4 class="what-we-offer-card-header">Creative Workspace</h4>
                    <p class="what-we-offer-card-text">
                        We have 16 private studios, large common areas that include utility sinks and kitchenette. 
                    </p>
                    <p class="what-we-offer-card-text">
                        To learn more click <router-link to="/studios">here</router-link>.
                    </p>
                </div>

                <div class="what-we-offer-card">
                    <h4 class="what-we-offer-card-header">Community</h4>
                    <p class="what-we-offer-card-text">
                        We believe that art can thrive when artists support each other and work together. 
                        We offer a variety of community events and have large common areas for collaboration.
                    </p>
                    <!-- <p>
                        To learn more click <router-link to="/studios">here</router-link>.
                    </p> -->
                </div>

                <div class="what-we-offer-card">
                    <h4 class="what-we-offer-card-header">Workshops</h4>
                    <p class="what-we-offer-card-text">
                        We offer a variety of workshops. 
                        These are led by both resident artists and artists from larger Portland Community.
                    </p>
                    <p class="what-we-offer-card-text">
                        To learn more click <router-link to="/workshops">here</router-link>.
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>

    /* #banner-button {
        border-radius: 4px;
        color: var(--button-text-color);
        padding: 5px 15px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 2rem;
        transition-duration: 0.4s;
        font-family: 'Open sans';
    } */

    #mission-statement-section, #who-we-are-section, #banner-section {
        text-align: center;
    }

    #mission-statement-header, #who-we-are-header {
        padding: .5rem 0;
    }

    #banner-header {
        font-size: 3rem;
    }

    #mission-statement-text, #who-we-are-text, #banner-text {
        width: 60%;
        margin: auto;
        padding: 2rem 0;
    }

    #banner-button {
        margin-top: 1rem;
    }

    #slideshow-section {
        width: 60%;
        margin: auto;
    }

    @media (max-width: 600px) {
        #mission-statement-text, #who-we-are-text, #slideshow-section {
            width: 90%;        
        }

        #banner-header {
            font-size: 2rem;
        }
    }

    #what-we-offer-section {
        /* display: none; */
    }

    #what-we-offer-header {
        text-align: center;
        padding: .5rem 0;
    }

    #what-we-offer-cards-container {
        display: grid;
        gap: 1.5rem;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        margin: 2rem auto;
        width: 90%;
    }

    @media (max-width: 600px) {
        #what-we-offer-cards-container {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(3 1fr);
            width: 100%;
        }
    }

    .what-we-offer-card {
        --whatWeOfferCardColor1: var(--card-color-1);
        --whatWeOfferCardColor2: var(--card-color-2);
        background: linear-gradient(var(--whatWeOfferCardColor1), var(--whatWeOfferCardColor2));
        border: solid 1px var(--border-color);
        border-radius: 5px;
        padding: .5rem;
        transition: translate .3s, --whatWeOfferCardColor1 .5s, --whatWeOfferCardColor2 .5s;
    }

    .banner-card {
        --whatWeOfferCardColor1: var(--card-color-1);
        --whatWeOfferCardColor2: var(--card-color-2);
        background: url('@/assets/images/winking-rat.svg') no-repeat center/auto 90%,
            linear-gradient(var(--whatWeOfferCardColor1), var(--whatWeOfferCardColor2));
        border: solid 1px var(--border-color);
        border-radius: 5px;
        width: 80%;
        margin: auto;
        padding: .5rem .5rem 2rem .5rem;
        transition: translate .3s, --whatWeOfferCardColor1 .5s, --whatWeOfferCardColor2 .5s;
    }

    @media (max-width: 600px) {
        .what-we-offer-card {
            width: 90%;
            margin: auto;
        }
        .banner-card {
            width: 90%;
            margin: auto;
            background: url('@/assets/images/winking-rat.svg') no-repeat center/auto 70%,
                linear-gradient(var(--whatWeOfferCardColor1), var(--whatWeOfferCardColor2));
        }
    }

    .what-we-offer-card:hover, .banner-card:hover {
        --whatWeOfferCardColor1: var(--card-color-2);
        --whatWeOfferCardColor2: var(--card-color-1);
        translate: 0 -5px;
    }

    .what-we-offer-card-header, .banner-card-header {
        padding: .5rem;
        text-align: center;
        border-bottom: 1px solid var(--border-color);
    }

    .what-we-offer-card-text, .banner-card-text {
        padding: .5rem;
        text-align: center;
    }
</style>
