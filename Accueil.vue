<template>
    <div>

        <infinite-slide-bar duration="20s" direction="reverse" delay="10s" :barStyle="{ background: black, padding: '5px 0' }">
            <span style="color: white;">Welcome to our restaurant !</span>
        </infinite-slide-bar>

        <main>
        <agile>
            <div class="slide">
                <h3><img src="/static/jap1.jpg"></h3>
            </div>

            ...

            <div class="slide">
                <h3><img src="/static/jap2.jpg"></h3>
            </div>
        </agile>
        </main>


      <!-- <div class="slideshow-container">

            <div class="mySlides fade">
                <img src="https://frama.link/slide1">
            </div>

            <div class="mySlides fade">
                <img src="https://frama.link/slide2">
            </div>

            <div class="mySlides fade">
                <img src="https://frama.link/slide1">
            </div>

        </div>
        <br>

        <div style="text-align:center">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>
        </body>-->


    </div>

</template>

<script>

    export default {
        name: "Accueil",
        data(){
            return {
                imgList: [
                    // the object must have `src` property
                    // `title` : img 's title
                    // `src` : img 's src
                    {title: "defalut" , src: "https://frama.link/slide1"},
                    {title: "defalut2" , src: "https://frama.link/slide2"},
                    // ...
                ]
            }
        },
        methods: {
            jumpTo(){
                // do somethig when you click the img ...
            }
        }
    }


</script>

<style scoped>
    body {
        height: 100%;
        font-weight: 400;
        background-color: black;
        color: white;
        margin:0;
        padding:0;
        width: 100%;
    }


</style>