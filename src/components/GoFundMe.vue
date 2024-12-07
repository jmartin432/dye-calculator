<template>
    <!-- <embed
        height="500px" 
        noscroll="true"
        scr="https://www.gofundme.com/f/help-support-community-art-at-bridge-rat-studios/widget/medium?sharesheet=coachingTip&attribution_id=sl:b33925d8-aaba-4253-909b-e6639708cffa"
        type="text/html"
        > -->
    <div 
        class="gfm-embed" 
        data-url="https://www.gofundme.com/f/help-support-community-art-at-bridge-rat-studios/widget/medium?sharesheet=coachingTip&attribution_id=sl:b33925d8-aaba-4253-909b-e6639708cffa">
    </div>  
</template>

<script>
    export default {
        mounted() {
            console.log('here')
            let goFundMeScript = document.createElement('script')
            goFundMeScript.setAttribute('src', 'https://www.gofundme.com/static/js/embed.js')
            goFundMeScript.setAttribute('defer', 'true')
            goFundMeScript.setAttribute('type', 'text/javascript')
            document.head.appendChild(goFundMeScript)
            goFundMeScript.onload(console.log('loaded'))
        }
    }
</script>