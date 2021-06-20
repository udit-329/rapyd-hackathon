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
  <h1>Product</h1>
  <button class="buy-btn" on:click={buyProduct}>Buy</button>
  <img src={product.images[0]} alt={product.name} />
  <p>{product.name}</p>
</div>

<style>
  img {
    height: 30vh;
    width: auto;
  }
</style>

<div class="product">
    <div class="images">
        <img src={imgSrc} alt={productId}>
    </div>
    <div class="details">
        <button class="close-btn" on:click={closePopup}>X</button>
        <h1>Product</h1>
        <button class="buy-btn" on:click={buyProduct}>Buy</button>
        <p>Product id is {productId}</p>
    </div>
    
</div>
