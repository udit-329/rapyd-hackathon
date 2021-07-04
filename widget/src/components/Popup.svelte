<script>
  export let product;

  import { createEventDispatcher } from "svelte";
  import ProductPage from "./ProductPage.svelte";

  const dispatch = createEventDispatcher();

  let ProductPageOpen = true;
  let imageNumber = 0;
  let numberOfImages = product.images.length;

  function changeImage(i) {
    imageNumber = i;
    activeImgBorder();
  }
  function activeImgBorder() {
    for (let i = 0; i < numberOfImages; i++) {
      var id = 'im-' + i;
      var imagePreview = document.getElementById(id);
      if (i == imageNumber) {
        imagePreview.classList.add('image-preview-active')
      }
      else {
        if (imagePreview.classList.contains('image-preview-active')) {
          imagePreview.classList.remove('image-preview-active')
        }
      }
    }
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
      imageNumber = (numberOfImages - 1)
    }
    activeImgBorder();
  }
  const nextPic = () => {
    if (imageNumber < (numberOfImages - 1))  {
      imageNumber = imageNumber + 1
    }
    else {
      imageNumber = 0
    }
    activeImgBorder();
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
          <div class="image-buttons-wrapper">
            <div class="image-buttons previous" on:click={prevPic}>
              <svg viewbox="0 0 100 100">
                <path class="arrow" d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z" transform=" translate(15,0)">
              </svg>
            </div>
            <div class="image-buttons next" on:click={nextPic}>
              <svg viewbox="0 0 100 100">
                <path class="arrow" d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z "transform="translate(85,100) rotate(180) ">
              </svg>
            </div>
          </div>
        </div>
          <div class="image-preview-wrapper">
            {#each Array(numberOfImages) as _,i}
              {#if i == 0}
                <div id="im-{i}" class="image-preview image-preview-active im-{i}">
                  <img src={product.images[i]} alt={product.name} on:click={() => changeImage(i)}/>
                </div>
              {:else}
                <div id="im-{i}" class="image-preview im-{i}">
                  <img src={product.images[i]} alt={product.name} on:click={() => changeImage(i)}/>
                </div>
              {/if}
            {/each}
          </div>
      </div>

      <div class="body">
        {#if ProductPageOpen}
          <ProductPage {product}/> 
        {/if}
      </div>
    </div>
    <div class="hide"></div>
  </div>
  <div class="image-preview-active hide"></div>"
</div>

<style>
  .cart-exit:hover {

    background: #f0f0f0;

  }
  .image-buttons-wrapper {
    padding-bottom: 40%;
    margin: 20px 0;
    position: relative;
    top:-90%;
    left: -20%;
    width: 140%;
  }
  .image-buttons {
    position: absolute;
    top: 50%;
    width: 10%;
    padding-bottom: 10%;
    border-radius: 50%;
    background: white;
    transform: translateY(-50%);
  } 
  .image-buttons:hover {
    cursor: pointer;
    background: #f0f0f0;
  }

  .previous { 
    left: 10px; 
  }
  .next { 
    right: 10px; 
  }

  .image-buttons svg {
    position: absolute;
    left: 20%;
    top: 20%;
    width: 60%;
    height: 60%;
  }

  .arrow { 
    fill: #333; 
  }
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
    width: 30%;
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
    width: 65%;
    height: 100%;
    overflow: auto;
  }
  .image-box {
    width: 80%;
    height: 60%;
    margin: auto;
    border: solid;
    border-width: 1px;
    border-color: #fafafa;
  }
  .product {
    height: 80%;
  }
  .image-preview-wrapper {
    display: inline-flex;
    height: 20%;
    margin-top: 5%;
    margin-left: 2%;
  }
  .image-preview {
    height: 100%;
    width: 20%;
    margin-right: 3%;
    border: solid;
    border-width: 1px;
    border-color: #f2f2f2;
    cursor: pointer;
  }
  .image-preview-active {
    border-color: #c2c2c2 !important;
    border-width: 2px !important;
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
