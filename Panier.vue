<template>
    <header>
    <div class="img-cart">
        <img src="/static/cart.png">

        <h4>Panier</h4>
        <a>0 article(s) - 0,00€</a>
        <div class="content">
            <div class="empty">Votre panier est vide !</div>
        </div>
    </div>
    </header>
</template>

<script>
    export default {
        name: "Panier"
    }
</script>

<style scoped>
    .img-cart {
        position: absolute;
        height: 100%;
        top : 0;
        padding-left: 1110px;
        flex-wrap: wrap;
        padding-right : 350px;
    }

    .cart {
        color: white;
        margin-top : -100px;
        padding-left: 1200px;
        position: relative;
    }

    /*.cart {
      position: absolute;
      height: 100%;
      top : 0;
      right: 0;
      flex-wrap: wrap;
      padding-right : 100px;
    }*/
</style>