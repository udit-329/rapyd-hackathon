<script>
  export let product;

  import { createEventDispatcher } from "svelte";
  import { createStore } from "../store";

  const getIndex = () => $cart.findIndex((p) => p._id === product._id);
  const dispatch = createEventDispatcher();
  const cart = createStore("rapyd-cart");

  let index = getIndex();
  let prodCount = 0;
  if (index > -1) prodCount = $cart[index].prodCount;

  function goBack() {
    dispatch("goBack", {
      text: "back",
    });
  }

  function addProduct() {
    let index = getIndex();
    prodCount += 1;
    if (index < 0) $cart = [...$cart, { ...product, prodCount }];
    else $cart[index].prodCount = prodCount;
  }

  function removeProduct() {
    let index = getIndex();
    if (prodCount >= 1 && index >= 0) {
      prodCount -= 1;
      $cart[index].prodCount = prodCount;
    }
  }

  function openCart() {
    dispatch("openCart", {
      text: "back",
    });
  }
</script>

<div class="buy">
  <button class="back-btn" on:click={goBack}>back</button>
  <span>
    <button class="inner" on:click={addProduct}>+</button>
    <p class="inner">{prodCount}</p>
    <button class="inner" on:click={removeProduct}>-</button>
  </span>
  <button class="buy-btn" on:click={openCart}>buy</button>
</div>

<style>
  .inner {
    display: inline-block;
  }
</style>
