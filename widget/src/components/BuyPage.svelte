<script>
  export let productId;
  export let imgSrc;

  import { createEventDispatcher } from "svelte";
  import { createStore } from "../store";

  const getIndex = () => $cart.findIndex((p) => p?.productId === productId);
  const dispatch = createEventDispatcher();
  const cart = createStore("rapyd-cart");

  let index = getIndex();
  let prodCount = 0;
  if (index > -1) prodCount = $cart[index].prodCount;

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
    let index = getIndex();
    prodCount += 1;

    if (index < 0) $cart = [...$cart, { productId, prodCount, imgSrc }];
    else $cart[index].prodCount = prodCount;
  }

  function removeProduct() {
    let index = getIndex();
    if (prodCount >= 1 && index >= 0) {
      prodCount -= 1;
      $cart[index].prodCount = prodCount;
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
