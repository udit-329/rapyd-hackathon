<script>
    export let productId;
    export let imgSrc;
    export let prodCount;

    import { createEventDispatcher } from 'svelte';
    import ProductPage from './ProductPage.svelte';
    import BuyPage from './BuyPage.svelte';

    const dispatch = createEventDispatcher();

    let ProductPageOpen = true;
    let BuyPageOpen = false;

    function closePopup() {
        dispatch('closePopup', {
            text: 'close'
        });
    }

    function productPageChange() {
        ProductPageOpen = !ProductPageOpen
        BuyPageOpen = !BuyPageOpen
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
</style>

<div class="box">
    {#if ProductPageOpen}
        <ProductPage productId={productId} imgSrc={imgSrc} on:closePopup={closePopup} on:buyProduct={productPageChange}></ProductPage>
    {/if}
    
    {#if BuyPageOpen}
        <BuyPage productId={productId} imgSrc={imgSrc} prodCount={prodCount} on:closePopup={closePopup} on:goBack={productPageChange}></BuyPage>
    {/if}

</div>
