<template>
    <div class="wrap_menu">
        <nav class="menu">
            <ul class="main_menu">
                <li>
                    <a href="index.html">Accueil</a>
                </li>

                <li>
                    <a href="products.html">A la carte</a>
                    <ul class="sub_menu">
                        <li><a href="sushi.html">• Sushi</a></li>
                        <li><a href="maki.html">• Maki</a></li>
                        <li><a href="yakitori.html">• Yakitori</a></li>
                        <li><a href="desserts.html">• Desserts</a></li>
                    </ul>
                </li>


                <li>
                    <a href="menus.html">Menus</a>
                    <ul class="sub_menu">
                        <li><a href="menubrochettes.html">• Menus Brochettes</a></li>
                        <li><a href="menumaki.html">• Menus Maki</a></li>
                        <li><a href="menusushi.html">• Menus Sushi</a></li>
                    </ul>
                </li>

                <li>
                    <a href="#">Boissons et Desserts</a>
                    <ul class="sub_menu">
                        <li><a href="beverage.html">• Boissons</a></li>
                        <li><a href="desserts.html">• Desserts</a></li>
                    </ul>
                </li>

                <li>
                    <a href="about.html">A propos</a>
                </li>

                <li>
                    <a href="contact.html">Contact</a>
                </li>

            </ul>


        </nav>
    </div>

</template>

<script>
    export default {
        name: "Navigation",
        data() {
            return {
                links: [
                    {
                        id: 0,
                        text: 'Hello World',
                        page: '/HelloWorld'
                    },

                    {
                        id: 0,
                        text: 'Accueil',
                        page: '/Accueil'
                    },

                    {
                        id: 0,
                        text: 'A la carte',
                        page: '/ALacarte'
                    }
                ]
            }
        }
    }


</script>

<style scoped>


    .wrap_menu {
        background-color: black;
        color: white;
    }

    .main_menu {
        list-style-type: none;
        margin: 0px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        background-color: grey;
    }

    .main_menu > li {
        display: block;
        position: relative;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 15px;
        padding-right: 15px;
    }

    .main_menu > li > a {
        font-size: 15px;
        color: white;
        padding: 0;
        border-bottom: 1px solid transparent;
    }

    li.sale-noti > a {
        color: #e65540;
    }

    .main_menu > li:hover > a {
        text-decoration: none;
        border-bottom: 1px solid transparent;
    }

    .main_menu li {
        position: relative;
    }

    .main_menu > li:hover > .sub_menu {
        visibility: visible;
        opacity: 1;
    }

    .sub_menu {
        list-style-type: none;
        position: absolute;
        z-index: 1100;
        top:0;
        left:100%;
        width: 200px;
        background-color: white;
        opacity: 0;
        visibility: hidden;
        padding-top: 10px;
        padding-bottom: 10px;
        transition: all 0.4s;
        -webkit-transition: all 0.4s;
        -o-transition: all 0.4s;
        -moz-transition: all 0.4s;
    }

    .main_menu > li > .sub_menu {
        top:100%;
        left: 0;
    }

    .sub_menu li:hover > .sub_menu {
        visibility: visible;
        opacity: 1;
    }

    .sub_menu li, .sub_menu a {
        padding: 10px;
        font-size: 13px;
        color: black;
    }

    .sub_menu > li:hover > a {
        color: red;
        text-decoration: none;
    }


    /*.panier{
      color: white;
      margin-left: 110px;
    }
    .img-cart{
      padding-top: -150px;
      margin-left: 110px;
    }
    */

    /*************  slideshow   **************/

    /* Slideshow container */
    .slideshow-container {
        max-width: 1000px;
        padding-top: 80px;
        position: relative;
        margin: auto;
    }


    /* Fading animation */
    .fade {
        -webkit-animation-name: fade;
        -webkit-animation-duration: 1.5s;
        animation-name: fade;
        animation-duration: 1.5s;
    }

    @-webkit-keyframes fade {
        from {opacity: .4}
        to {opacity: 1}
    }

    @keyframes fade {
        from {opacity: .4}
        to {opacity: 1}
    }
</style>