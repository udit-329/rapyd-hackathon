<script lang="ts">
  import { createEventDispatcher, tick } from "svelte";
  import CartProduct from "./CartProduct.svelte";
  import Checkout from "./Checkout.svelte";

  import { createStore } from "../store";

  let checkoutOpened = false;

  const dispatch = createEventDispatcher();
  const cart = createStore("rapyd-cart");
  const checkOutValid = async () => {
    await tick;
    checkoutOpened = Boolean($cart.find((product) => product.prodCount > 0));
  };

  const clickBackgroundEvent = async(event) => {
    console.log(event.target.classList)
    if (event.target.classList.contains("cart-wrapper")) {
      dispatch("closeCart", {
          text: "close",
        });
    }
  }
</script>

<div class="cart-wrapper">
  {#if !checkoutOpened}
    <div class="cart">
      <div>
        <svg
          class="cart-exit"
          on:click={() =>
            dispatch("closeCart", {
              text: "close",
            })}
          viewBox="0 0 24 24"
          width="24px"
          fill="#000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
          />
        </svg>
      </div>

      <h2>Cart</h2>

      {#each $cart as product}
        <CartProduct {product} {cart} />
      {/each}
      <div class="checkout-button-container">
        <div class="checkout-button" on:click={checkOutValid}>Checkout</div>
      </div>
    </div>
  {:else}
    <Checkout
      on:closePopup={() => {
        checkoutOpened = false;
      }}
    />
  {/if}
</div>

<style>
  .cart-wrapper {
    z-index: 25;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.36);
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .cart {
    position: fixed;
    background-color: #fff;
    border-radius: 5px 0 0 5px;
    width: 30vw;
    padding: 1vw;
    right: -40vw;
    top: 0;
    bottom: 0;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.1), 0 15px 12px rgba(0, 0, 0, 0.14);
    -webkit-animation: slide 0.2s forwards;
    -webkit-animation-delay: 0.1s;
    animation: slide 0.2s forwards;
    animation-delay: 0.1s;
    background-color: #fff;
    display: flex;
    flex-direction: column;
  }

  h2 {
    text-align: center;
  }

  @-webkit-keyframes slide {
    100% {
      right: 0;
    }
  }

  @keyframes slide {
    100% {
      right: 0;
    }
  }
  .cart-exit:hover {
    cursor: pointer;
  }

  .checkout-button-container {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    height: auto;
    flex: 1 1 auto;
  }

  .checkout-button {
    border-radius: 12.5px;
    height: 36px;
    text-align: center;
    background-color: #252525;
    color: white;
    line-height: 36px;
  }

  .checkout-button:hover {
    cursor: pointer;
    background-color: hsl(0, 0%, 20%);
  }
</style>
