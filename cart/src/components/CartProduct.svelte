<script>
  export let product;
  export let cart;

  import { createStore } from "../store";

  const getIndex = () => $cart.findIndex((p) => p._id === product._id);

  let prodCount = product.prodCount;

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
</script>

{#if prodCount > 0}
  <div class="cart-product">
    <div class="cart-product-img-wrapper">
      <img src={product.images[0]} alt={product.name} />
    </div>
    <div>
      <div class="cart-product-info">
        <div class="cart-product-name">{product.name}</div>
        <div class="cart-product-price-wrapper">
          <div class="cart-subtotal">Subtotal: </div>
          <div class="cart-product-price">${(product.price * prodCount).toFixed(2)}</div>
        </div>
        
      </div>
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
    </div>
  </div>
{/if}

<style>
  .cart-product-name {
    font-family: Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 600;
    margin-block-start: 0;
  }
  .cart-product-price-wrapper {
    display: flex;
  }
  .cart-subtotal {
    font-family: Helvetica, sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: #333333;
    margin-block-start: 0.33em;
    margin-right: 4%;
  }
  .cart-product-price {
    font-family: Helvetica, sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: #5e5d5c;
    margin-block-start: 0.33em;
  }
  b {
    font-family: Helvetica, sans-serif;
    margin-left: 1%;
    margin-right: 1%;
    font-size: 16px;
    padding-top: 1%;
  }
  .cart-product-info {
    margin-top: 7%;
  }
  .cart-product {
    display: flex;
    position: relative;
    margin-bottom: 1.25vw;
  }

  .cart-product > div {
    padding: 0.4vw;
  }

  .cart-product-img-wrapper {
    width: 25%;
    max-width: 100px;
    min-width: 60px;
    margin-right: 5px;
    box-shadow: 0 1px 18px rgb(0 0 0 / 3%), 0 1px 12px rgb(0 0 0 / 5%);
  }

  img {
    display: block;
    width: 85%;
    margin: auto;
  }

  .cart-product-count {
    display: flex;
    position: absolute;
    right: 0;
    bottom: 0;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
  }

  .cart-product-count > * {
    margin-left: 8px;
  }

  .cart-product-count > b {
    vertical-align: middle;
    text-align: center;
    line-height: 25px;
  }

  .count-increment {
    height: 15px;
    width: 15px;
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
