<script>
    export let productId;
    export let imgSrc;

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function closePopup() {
        dispatch('closePopup', {
            text: 'close'
        });
    }

    function buyProduct() {
        dispatch('buyProduct', {
            text: 'buy'
        });
    }

</script>

<style>
    img {
    height: 30vh;
    width: auto;
}
</style>

<div class="product">
    <button class="close-btn" on:click={closePopup}>X</button>
    <h1>Product</h1>
    <button class="buy-btn" on:click={buyProduct}>Buy</button>
    <img src={imgSrc} alt={productId}>
    <p>Product id is {productId}</p>
</div>