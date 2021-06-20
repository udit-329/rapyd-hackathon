<script>
  import { createEventDispatcher } from "svelte";
  import { createStore } from "../store";

  const dispatch = createEventDispatcher();
  const cart = createStore("rapyd-cart");
</script>

<div class="cart-wrapper">
  <div class="cart">
    <div>
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
    </div>

    {#each $cart as product}
      <div>{product.productId}</div>
      <div>{`Count: ${product.prodCount}`}</div>
    {/each}
  </div>
</div>

<style>
  .cart-wrapper {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
  }
  .cart {
    z-index: 25;
    position: fixed;
    border-radius: 25px 0 0 25px;
    width: 30vw;
    padding: 1vw;
    right: -40vw;
    top: 0;
    bottom: 0;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    -webkit-animation: slide 0.5s forwards;
    -webkit-animation-delay: 0.1s;
    animation: slide 0.5s forwards;
    animation-delay: 0.1s;
  }

  @-webkit-keyframes slide {
    100% {
      right: 0;
    }
    0% {
      right: -40vw;
    }
  }

  @keyframes slide {
    100% {
      right: 0;
    }
    0% {
      right: -40vw;
    }
  }
  .cart-exit:hover {
    cursor: pointer;
  }
</style>
