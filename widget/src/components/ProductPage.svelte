<script>
  export let product;

  import { createEventDispatcher } from "svelte";
  import { createStore } from "../store";
  
  const getIndex = () => $cart.findIndex((p) => p._id === product._id);
  const dispatch = createEventDispatcher();
  const cart = createStore("rapyd-cart");

  let prodCount = 1;
  let button_text="Add to Cart"

  function buyProduct() {
    button_text = "Added to Cart!"
    var button_ob = document.getElementById('buy-button')
    button_ob.classList.add('btn-added-to-cart')
    let index = getIndex();
    if (index < 0) $cart = [...$cart, { ...product, prodCount }];
    else $cart[index].prodCount = prodCount;
    dispatch("buyProduct", {
      text: "buy",
    });
  }

  function addProduct() {
    button_text="Add to Cart"
    var button_ob = document.getElementById('buy-button')
    if (button_ob.classList.contains('btn-added-to-cart')) {
      button_ob.classList.remove('btn-added-to-cart')
    }
    prodCount += 1;
  }

  function removeProduct() {
    button_text="Add to Cart"
    var button_ob = document.getElementById('buy-button')
    if (button_ob.classList.contains('btn-added-to-cart')) {
      button_ob.classList.remove('btn-added-to-cart')
    }
    if (prodCount > 1) {
      prodCount -= 1;
    }
  }
</script>

<div class="product">
  <h1>{product.name}</h1>
  <div class="price">${product.price} CAD</div>
  <hr>
  <div class="subheading">Description</div>
  <p>{product.description}</p>
  <div class="subheading">Quantity:</div>
  <div class="cart-product-count">
    <div class="count-increment" on:click={removeProduct}>
      <svg viewBox="0 0 24 24" fill="#000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M19 13H5v-2h14v2z" />
      </svg>
    </div>
    <b>{prodCount}</b>
    <div class="count-increment" on:click={addProduct}>
      <svg viewBox="0 0 24 24" fill="#000">
        <path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z" />
      </svg>
    </div>
  </div>
  <div class="subtotal-wrapper">
    <div class="subheading">Subtotal:</div>
    <div class="subtotal">${prodCount * product.price} CAD</div>
  </div>
  <div id="buy-button" class="buy-button" on:click={buyProduct}>{button_text}</div>
  <div class="btn-added-to-cart"></div>
</div>

<style>
  h1 {
    font-family: 'Trebuchet MS', sans-serif;
    font-weight: 500;
    margin-block-start: 0.3em;
    margin-block-end: 0.25em;
    font-size: 28px;
  }
  b {
    font-family: Helvetica, sans-serif;
    margin-left: 1%;
    margin-right: 1%;
    font-size: 18px;
    padding-top: 1%;
  }
  p {
    font-family: Helvetica, sans-serif;
    font-size: 17px;
  }
  .price {
    font-family: Helvetica, sans-serif;
    font-weight: 600;
    font-size: 17px;
    color: #454545;
    margin-block-start: 0;
    margin-block-end: 0.6em;
  }
  .product {
    overflow: auto;
    height: 100%;
  }
  .subtotal-wrapper {
    display: flex;
    margin-top: 1.7%;
  }
  .subtotal {
    font-family: Helvetica, sans-serif;
    padding-top: 0.15%;
    padding-left: 0.2%;
    font-size: 17px;
  }
  .subheading {
    font-family: Helvetica, sans-serif;
    margin-bottom: 1%;
    margin-left: 0.5%;
    font-weight: 600;
    font-size: 18px;
  }
  .buy-button {
    width: 24%;
    border-radius: 6px;
    background-color: #292929;
    color: #fff;
    margin-left:1%;
    margin-top: 2%;
    padding: 1.5% 1.1%;
    text-align: center;
    transition: ease-in 0.13s;
    font-family: 'Trebuchet MS', sans-serif;
    font-weight: 600;
    font-size: 19px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 6%), 0 8px 10px rgb(0 0 0 / 5%);
    
  }
  .buy-button:hover {
    background-color: #f5f5f5;
    color: #000;
    cursor: pointer;
    transition: ease-in 0.08s;
  }
  .btn-added-to-cart, .btn-added-to-cart:hover {
    background-color: #f5f5f5 !important;
    color: #000 !important;
    cursor: default !important;
  }
  
  .cart-product-count {
    display: flex;
  }
  .count-increment {
    height:20px;
    width: 20px;
    padding: 5px;
    background-color: #f2f2f2;
    border-radius: 50%;
  }

  .count-increment:hover {
    cursor: pointer;
    background-color: hsl(0, 0%, 97%);
  }
  .count-increment:hover > svg {
    fill: hsl(0, 0%, 5%);
  }


</style>