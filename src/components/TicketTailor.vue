<!-- Ticket Tailor Widget. Paste this into your website where you want the widget to appear. Do not change the code or the widget may not work properly. -->
<!-- Currently not being used, not sure how to use it with a vue app-->

<template>
    <div class="tt-widget">
        <div class="tt-widget-fallback">
            <p><a href="https://www.tickettailor.com/all-tickets/bridgeratstudios/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true" target="_blank">Click here to buy tickets</a><br /><small><a href="https://www.tickettailor.com?rf=wdg_180130" class="tt-widget-powered">Sell tickets online with Ticket Tailor</a></small></p>
        </div>
    </div>
<!-- End of Ticket Tailor Widget -->
</template>

<script>
    export default {
        data() {
            return {};
        },
        // methods: {},
        mounted() {
            let ticketTailorScript = document.createElement('script');
            ticketTailorScript.setAttribute('src', 'https://cdn.tickettailor.com/js/widgets/min/widget.js');
            ticketTailorScript.setAttribute('data-url', 'https://www.tickettailor.com/all-tickets/bridgeratstudios/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true');
            ticketTailorScript.setAttribute('data-type', 'inline');
            ticketTailorScript.setAttribute('data-inline-minimal', 'true');
            ticketTailorScript.setAttribute('data-inline-show-logo', 'false');
            ticketTailorScript.setAttribute('data-inline-bg-fill', 'false');
            ticketTailorScript.setAttribute('data-inline-ref', 'website_widget');
            console.log(ticketTailorScript)

            document.head.appendChild(ticketTailorScript);
        }
    };
</script>

<style scoped>
</style>