<script>
  import { createEventDispatcher } from "svelte";
  import RapydCheckout from "./RapydCheckout.svelte"

  const dispatch = createEventDispatcher();

  const clickBackgroundEvent = async(event) => {
    console.log(event.target.classList)
    if (event.target.classList.contains("checkout-popup-wrapper")) {
      dispatch("closePopup", {
          text: "close",
        });
    }
  }
</script>

<div class="checkout-popup-wrapper" on:mousedown={clickBackgroundEvent}>
  <div class="checkout-popup">
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
    <RapydCheckout/>
  </div>
</div>

<style>
  .checkout-popup {
    position: fixed;
    background-color: #fff;
    margin: 0 auto;
    padding: 15px;
    top: -70%;
    right: 10%;
    left: 10%;
    height: 60%;
    border-radius: 5px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.12), 0 15px 12px rgba(0, 0, 0, 0.14);
    -webkit-animation: slide 0.2s forwards;
    animation: slide 0.2s forwards;
    overflow: auto;
  }

  .checkout-popup-wrapper {
    z-index: 25;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    
  }

  @-webkit-keyframes slide {
    100% {
      top: 15%;
    }
  }

  @keyframes slide {
    100% {
      top: 15%;
    }
  }

  .cart-exit:hover {
    cursor: pointer;
  }
</style>
