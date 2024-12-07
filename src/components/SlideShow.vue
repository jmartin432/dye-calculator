<template>
    <div class="slide-show-container">
        <div class="slide-show" v-if="studioImages.length > 0">
            <img 
              :src="currentImage" 
              :alt="altText" 
              class="slide-show-image" 
              @error="errorImage"/>
            <div class="overlay">
                <button @click="prevImage" class="nav-button">◀</button>
                <button @click="nextImage" class="nav-button">▶</button>
            </div>
        </div>
        <p v-else>No Images Available</p>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        studioImages: [],
        currentIndex: 0,
      };
    },
    computed: {
        currentImage() {
            return this.studioImages[this.currentIndex].url;
        },
        altText() {
            return this.studioImages[this.currentIndex].alt;
        },
    },
    methods: {
        nextImage() {
          this.currentIndex = (this.currentIndex + 1) % this.studioImages.length;
        },
        prevImage() {
          this.currentIndex = (this.currentIndex - 1 + this.studioImages.length) % this.studioImages.length;
        },
        errorImage(event) { 
            event.target.src = "/images/image-coming-soon-3x2.jpg" 
        } 
    },
    async mounted() {
        let studioImagesData = await fetch('/data/studioImages.json');
        this.studioImages = await studioImagesData.json();
        console.log('STUDIO IMAGES: ', this.studioImages)
    }
  };
  </script>
  
  <style scoped>
    .slide-show-container {
        text-align: center;
        margin: 2rems;
    }
  
    .slide-show {
        width: 80%;
        position: relative;
        overflow: hidden;
        margin: auto;
    }

    @media (max-width: 600px) {
        .slide-show {
          width: 90%;
        }
    }
  
    .slide-show-image {
        width: 100%;
        object-fit: cover;
        border-radius: 5px;;
    }
  
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav-button {
      margin: 0 10px;
        /* border: none;
        font-size: 2rem;
        color: white;
        cursor: pointer;
        outline: none; */
    }
</style>
  
  