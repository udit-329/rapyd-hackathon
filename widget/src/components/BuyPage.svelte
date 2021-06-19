<script>
  export let productId;
  export let imgSrc;
  let prodCount = 0;

  import { createEventDispatcher } from "svelte";
  import getStore from "../store";

  const dispatch = createEventDispatcher();
  const store = getStore("rapyd-widget");

  function closePopup() {
    dispatch("closePopup", {
      text: "close",
    });
  }

  function goBack() {
    dispatch("goBack", {
      text: "back",
    });
  }

  function addProduct() {
    prodCount += 1;
  }

  function removeProduct() {
    if (prodCount >= 1) {
      prodCount -= 1;
    }
  }
</script>

<div class="buy">
  <button class="close-btn" on:click={closePopup}>X</button>
  <h1>Cart</h1>
  <button class="back-btn" on:click={goBack}>back</button>
  <img src={imgSrc} alt={productId} />
  <span>
    <button class="inner" on:click={addProduct}>+</button>
    <p class="inner">{prodCount}</p>
    <button class="inner" on:click={removeProduct}>-</button>
  </span>
  <button class="buy-btn">buy</button>

  <!-- <p>Product id is {productId}</p> -->
</div>

<style>
  img {
    height: 15vh;
    width: auto;
  }
  .inner {
    display: inline-block;
  }
</style>
