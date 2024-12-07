<script setup>
    import { RouterLink, RouterView } from 'vue-router';
    import MailChimp from './components/MailChimp.vue';
</script>

<template>
    <header>
        <div class="title-container">
            <div class="title-image-container">
                <img
                    alt="Bridge Rat Studios Logo"
                    class="logo title-image"
                    src="@/assets/images/bridge-rat-logo-300.png"
                />
            </div>
            <div class="title-text-container">
                <h1>Bridge Rat Studios</h1>
                <h2>Art Under the Morrison Bridge</h2>
            </div>
        </div>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/artists">Artists</RouterLink>
            <RouterLink to="/studios">Studios</RouterLink>
            <RouterLink to="/events">Events</RouterLink>
            <RouterLink to="/workshops">Workshops</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav>
    </header>

    <RouterView />

    <footer>
        <div class="footer-connect-container">
            <MailChimp />
            <div id="footer-social-icons">
                <h3>Follow Us on Social Media</h3>
                <div class="social-icon-container">
                    <a href="https://www.instagram.com/bridgeratstudios/" target="_blank">
                        <img class="social-icon" src="./assets/icons/instagram.svg" href="" alt="Instagram Logo"/>
                    </a>
                    <a href="https://www.facebook.com/bridgeratstudios" target="_blank">
                        <img class="social-icon" src="./assets/icons/facebook.svg" href="" alt="Instagram Logo"/>
                    </a>
                </div>
            </div>
        </div>
        <div class="footer-message">
            <span class="footer-emoji footer-emoji-flipped">🐀</span><span id="footer-text">&nbsp;&nbsp;&#169; {{ copyrightYear }} - Bridge Rat Studios&nbsp;&nbsp;</span><span class="footer-emoji">🐀</span>
        </div>
    </footer>
</template>

<script>
    export default {
        data() {
            return {
                copyrightYear: new Date().getFullYear()
            };
        },
    }
</script>

<style scoped>
    header {
        width: 100%;
        justify-content: center;
    }

    img {
        width: 125px;
    }

    @media (max-width: 600px) {
        img {
            width: 75px;
        }
    }

    .title-container {
        width: 100%;
        display: flex;
        margin: 0 auto;
        justify-content: center;
    }

    @media (max-width: 600px) {
        .title-container {
            flex-direction: column;
        }
    }

    .title-image-container {
        align-self: center;
        padding: 0 1rem;
    }

    .title-text-container {
        align-self: center;
        padding: 0 1rem;
    }

    @media (max-width: 600px) {
        .title-text-container {
            text-align: center;
        }
    }

    nav {
        width: 100%;
        font-size: 1rem;
        text-align: center;
        margin: auto;
        padding: .5rem 0;
        border-top: 1px solid var(--border-color)
    }

    nav a {
        color: var(--nav-a-color);
        text-decoration: none;
        display: inline-block;
        padding: .25rem 1rem;
        font-family: "Open Sans";
        font-weight: 500;
        transition: .3s ease;
    }

    nav a:first-of-type {
        border: 0;
    }

    nav a:hover {
        background-color: var(--nav-a-hover-bg-color);
        border-radius: 3px;
    }

    footer {
        font-size: 1rem;
        font-family: "Poppins", sans-serif;
        width: 100%;
        padding: 2rem 2rem;
        transition-duration: .75s;
        border-top: 1px solid var(--border-color);
        box-sizing: border-box;
    }

    @media (max-width: 600px) {
        footer {
            padding: 2rem .5rem;
        }
    }

    .footer-connect-container {
        display: flex;
        justify-content: space-around;
    }

    @media (max-width: 600px) {
        .footer-connect-container {
            flex-direction: column;
            gap: 3rem;
        }
    }

    footer h3 {
        font-size: 1rem;
        display: block;
    }

    footer span {
        color: #ffffff;
    }

    /* #footer-social-icons {
        display: flex;
        justify-content: center;
    } */

    footer .social-icon-container {
        margin-top: 1rem;
        padding-left: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    footer .social-icon {
        width: 2.5rem;
    }

    .footer-message{
        text-align: center;
        margin-top: 3rem;
    }

    @media (max-width: 600px) {
        .footer-message {
            font-size: .75rem;
        }
    }

    .footer-emoji {
        display: inline-block;
        font-size: 1.5rem;
    }

    @media (max-width: 600px) {
        .footer-emoji {
            font-size: 1rem;
        }
    }
    
    .footer-emoji-flipped {
        transform: scale(-1, 1);
    }


</style>
