<template>
    <div class = "sushi">
        <div class = "sushi-img">
            <img src="/static/sushi1.jpg">
        </div>
        <div class = "item">
            <div class = "produit-nom">
                <h3>Crunchy roll</h3>
            </div>
            <div class = "produit-description">
                <p>Tempura crevette, avocat, oignons frits (8 pièces)</p>
            </div>
            <div class="add" id="count1">
                <button v-on:click="counter += 1">+</button>
                <input class="quantity" type="text" id="4" size="2" value="1" />
                <button v-on:click="counter -= 1">-</button>
            </div>
            <div class = "prix">12,80€</div>
            <div class = "addcart">
                <input type="button" value="Ajouter au panier" onclick=";"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ALaCarte"
    }
</script>

<style scoped>
    .description{
        text-align: center;
        /*background-color: red;*/
    }

    .sushi-img{
        padding-left: 260px;
    }

    .item {
        text-align: center;
        width: 200px;
        margin-left: 200px;
        box-shadow: inset 0 -3px 0 0 #000, 0 3px 0 0 #000;
        box-shadow: 0 0 0 3px #fff, 0 0 0 5px #ddd, 0 0 0 10px #fff, 0 0 2px 10px #eee;

    }
</style>