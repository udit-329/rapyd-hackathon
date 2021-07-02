<script>
  export let product;

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function buyProduct() {
    dispatch("buyProduct", {
      text: "buy",
    });
  }
</script>

<div class="product">
  <h1>{product.name}</h1>
  <p>Price: {product.price}</p>
  <p>{product.description}</p>
  <button class="buy-btn" on:click={buyProduct}>Buy</button>
</div>

<style>
  .product {
    overflow: auto;
  }
</style>