<script>
    export let productId;
    export let imgSrc;
    export let prodCount;

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function closePopup() {
        dispatch('closePopup', {
            text: 'close'
        });
    }

    function goBack() {
        dispatch('goBack', {
            text: 'back'
        });
    }

    function AddProduct() {
        prodCount += 1
    }

    function RemoveProduct() {
        if (prodCount >= 1){
            prodCount -= 1
        }

    }
</script>

<style>
img {
    height: 15vh;
    width: auto;
}
.inner {
    display: inline-block;
}

</style>

<div class="buy">
    <button class="close-btn" on:click={closePopup}>X</button>
    <h1>Cart</h1>
    <button class="back-btn" on:click={goBack}>back</button>
    <img src={imgSrc} alt={productId}>
    <span>
        <button class="inner" on:click={AddProduct}>+</button>
        <p class="inner">{prodCount}</p>
        <button class="inner" on:click={RemoveProduct}>-</button>
    </span>
    <button class="buy-btn">buy</button>

    <!-- <p>Product id is {productId}</p> -->
</div>
