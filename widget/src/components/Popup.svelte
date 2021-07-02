<script>
  export let product;

  import { createEventDispatcher } from "svelte";
  import ProductPage from "./ProductPage.svelte";
  import BuyPage from "./BuyPage.svelte";

  const dispatch = createEventDispatcher();

  let ProductPageOpen = true;
  let BuyPageOpen = false;
  let imageNumber = 0;
  

  function productPageChange() {
    ProductPageOpen = !ProductPageOpen;
    BuyPageOpen = !BuyPageOpen;
  }

  const clickBackgroundEvent = async(event) => {
    console.log(event.target.classList)
    if (event.target.classList.contains("widget-popup-wrapper")) {
      dispatch("closePopup", {
          text: "close",
        });
    }
  }
  const prevPic = () => {
    if (imageNumber > 0) {
      imageNumber = imageNumber - 1
    }
    else {
      imageNumber = (product.images.length - 1)
    }
  }
  const nextPic = () => {
    if (imageNumber < (product.images.length - 1))  {
      imageNumber = imageNumber + 1
    }
    else {
      imageNumber = 0
    }
  }
</script>

<div class="widget-popup-wrapper" on:mousedown={clickBackgroundEvent}>
  <div class="widget-popup">
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
    <div class="product">
      <div class="image">
        <div class="image-box">
          <img src={product.images[imageNumber]} alt={product.name} />
        </div>
        <div class="image-buttons">
          <div class="prev-pic" on:click={prevPic}>&lt;</div>
          <div class="next-pic" on:click={nextPic}>&gt;</div>
        </div>
      </div>

      <div class="body">
        {#if ProductPageOpen}
          <ProductPage {product} on:buyProduct={productPageChange} />
        {/if}

        {#if BuyPageOpen}
          <BuyPage {product} on:goBack={productPageChange} />
        {/if}
      </div>
    </div>
    <div class="hide"></div>
  </div>
</div>

<style>
  .widget-popup-wrapper {
    z-index: 25;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.36);
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
  }
  .widget-popup {
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
    opacity: 1;
    transition: opacity 0.2s;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .hide {
    opacity: 0;
    transition: opacity 0.2s;
  }

  .widget-popup-wrapper {
    z-index: 25;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.36);
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3)
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    box-shadow: 0 19px 38px rgb(0 0 0 / 1%), 0 15px 12px rgb(0 0 0 / 3%);
  }
  .image {
    float: left;
    width: 25%;
    border-right-style: solid;
    border-color: #ededed;
    border-width: 1.5px;
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 4%;
    padding-bottom: 1%;
    height: 100%;
  }
  .body {
    float: right;
    width: 70%;
    height: 100%;
    overflow: auto;
  }
  .image-box {
    width: 80%;
    height: 80%;
    margin: auto;
  }
  .image-buttons {
    padding-top: 5%;
  }
  .prev-pic {
    float: left;
    font-size: 2em;
    padding-left: 20%;
  }
  .prev-pic:hover {
    float: left;
    cursor: pointer;
  }
  .next-pic {
    float: right;
    font-size: 2em;
    padding-right: 20%;
  }
  .next-pic:hover {
    float: right;
    cursor: pointer;
  }
  .product {
    height: 80%;
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
