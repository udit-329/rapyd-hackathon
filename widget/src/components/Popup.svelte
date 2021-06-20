<script>
  export let product;

  import { createEventDispatcher } from "svelte";
  import ProductPage from "./ProductPage.svelte";
  import BuyPage from "./BuyPage.svelte";

  const dispatch = createEventDispatcher();

  let ProductPageOpen = true;
  let BuyPageOpen = false;

  function productPageChange() {
    ProductPageOpen = !ProductPageOpen;
    BuyPageOpen = !BuyPageOpen;
  }
</script>

<div class="box">
  <svg
    class="cart-exit"
    on:click={() =>
      dispatch("closePopup", {
        text: "close",
      })}
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
    ><path d="M0 0h24v24H0V0z" fill="none" /><path
      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
    /></svg
  >
  {#if ProductPageOpen}
    <ProductPage {product} on:buyProduct={productPageChange} />
  {/if}

  {#if BuyPageOpen}
    <BuyPage {product} on:goBack={productPageChange} />
  {/if}
</div>

<style>
  .box {
    position: fixed;
    background-color: #fff;
    margin: 0 auto;
    padding: 15px;
    top: 15%;
    right: 10%;
    left: 10%;
    bottom: 15%;
    border-radius: 25px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }

  .cart-exit:hover {
    cursor: pointer;
  }
</style>
