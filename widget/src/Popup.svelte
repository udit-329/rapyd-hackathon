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
</script>

<style>
.box {
    position: fixed;
    height: 80vh;
    width: 50vw;
    background-color: aliceblue;
    top: 10%;
    margin: 0 auto;
    padding: 15px;
    left: 10%;
    right: 10%;
}

img {
    height: 30vh;
    width: auto;
}
</style>

<div class="box">
    <button class="close" on:click={closePopup}>X</button>
    <h1>test</h1>
    <img src={imgSrc} alt={productId}>
    <p>Product id is {productId}</p>

</div>
