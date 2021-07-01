<script>
  export let product;
  let imageNumber = 0
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function buyProduct() {
    dispatch("buyProduct", {
      text: "buy",
    });
  }

  const prevPic = () => {
    if (imageNumber > 0) {
      imageNumber = imageNumber - 1
    }
  }
  const nextPic = () => {
    
    imageNumber = imageNumber + 1
    
  }
</script>

<div class="product">
  
  <div class="image">
    <div class="image-box">
      <img src={product.images[imageNumber]} alt={product.name} />
    </div>
    <p>{imageNumber}</p>
    <div class="image-buttons">
      <div class="prev-pic" on:click={prevPic}>&lt;</div>
      <div class="next-pic" on:click={nextPic}>&gt;</div>
    </div>
    
    

  </div>
  <div class="body">
    <h1>{product.name}</h1>
    <p>Price: {product.price}</p>
    <p>{product.description}</p>
    <button class="buy-btn" on:click={buyProduct}>Buy</button>
  </div>
</div>

<style>
  img {
    height: 30vh;
    width: auto;
  }
  .image {
    float: left;
    width: 30%;
  }
  .body {
    float: right;
    width: 70%;
  }
  .image-box {
    margin-left: 25%;
    margin-right: 25%;
  }
  .prev-pic {
    float: left;
  }
  .prev-pic:hover {
    float: left;
    cursor: pointer;
  }
  .next-pic {
    float: right;
  }
  .next-pic:hover {
    float: right;
    cursor: pointer;
  }
</style>