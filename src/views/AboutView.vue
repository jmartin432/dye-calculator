<template>
    <div class="view-container about-container">
        <section class="about-section heading-section">
            <h3 id="about-header">About</h3>
            <p class="heading-text">
                Rats are social animals and live in groups. Interestingly, within a colony, they form social bonds and coordinate group activities. Some of their social behaviors include cuddling, playing, chasing, rough and tumble games, as well as communicating with each other. They use their sense of smell to recognize others, finding out about where they've been and what they've been doing. All of this helps them to learn and practice important social skills.
                Studies have shown us that rats learn from their decisions will not choose again a behavior to help themselves if that behavior will harm another rat. They even go out of their way to help rescue fellows in danger or free a trapped rat. Rats greet each other, cuddle and kiss, they even laugh when they are tickled. When they are very happy their ears turn pink.
            </p>
            <p class="heading-text">
                Overall, the social behavior of rats is complex and dynamic, and that social behavior has shown to be a key factor in their success as a species. This is so much so that the company of others of their kind is not just a preference but a real need.
                Rats living on their own will get depressed and develop abnormal behavior. Sometimes this depression may lead to the death of the rat.
            </p>    
            <p class="heading-text">
                We think humans are just like this, and as a subclass of humans- artists too are social animals. When we come together to learn and play we are better for it, encouraging each other to do more and better. The artist who labors alone is so much more likely to struggle and languish in isolation. 
                Together, we share resources, we push each other, we collage ideas and plans. We change from a collection of random humans and instead we begin to build our chosen family.
            </p>
        </section>
        <section id="google-map-section" class="about-section">
            <div id="google-maps-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.653346959478!2d-122.66474898767416!3d45.51705647095426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a0a75827810f%3A0x7cd3da4af5200337!2s322%20SE%20Morrison%20St%2C%20Portland%2C%20OR%2097214!5e0!3m2!1sen!2sus!4v1701763381154!5m2!1sen!2sus" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    </div>
</template>

<style scoped>

    h3 {
        text-align: center;
    }

    .heading-text {
        text-align: left;
        width: 60%;
        margin: auto;
        padding: 1rem 0;
    }

    @media (max-width: 600px) {
        .heading-text {
            width: 80%;
        }
    }

    #google-maps-container {
        margin: auto;
        width: 40%;
        overflow: hidden;
        padding-top: 40%;
        position: relative;
    } 

    #google-maps-container iframe {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        border: 0;
        border-radius: 5px;
    }

    @media (max-width: 600px) {
        
        #google-maps-container {
            width: 90%;
            padding-top: 75%;
        } 
    }

</style>
