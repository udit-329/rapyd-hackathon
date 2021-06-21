<script>
  export let product;

  import { createStore } from "../store";

  const getIndex = () => $cart.findIndex((p) => p._id === product._id);
  const cart = createStore("rapyd-cart");

  let prodCount = product.prodCount;

  function addProduct() {
    let index = getIndex();
    prodCount += 1;
    console.log($cart);
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
      <div>
        <b>{product.name}</b>
        <br />
        ${product.price}
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
  .cart-product {
    display: flex;
    position: relative;
    margin-bottom: 1.25vw;
  }

  .cart-product > div {
    padding: 1vw;
  }

  .cart-product-img-wrapper {
    width: 20%;
    max-width: 100px;
    min-width: 60px;
    background-color: #f2f2f2;
    border-radius: 12.5px;
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
