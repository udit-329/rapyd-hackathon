<script lang="ts">
  import type { ProductResponse } from "./types";
  import Popup from "./components/Popup.svelte";

  export let _id: string;

  let ProductClicked = false;

  const fetchData = (async (): Promise<ProductResponse> =>
    await (await fetch(`http://localhost:2001/product/${_id}`)).json())();
  const toggle = () => (ProductClicked = !ProductClicked);
</script>

{#await fetchData}
  <p>...waiting</p>
{:then data}
  {#if ProductClicked}
    <Popup product={data.product} on:closePopup={toggle} />
  {:else}
    <div class="product-widget">
      <img src={data.product.images[0]} alt={data.product.name} />
      <h3>{data.product.name}</h3>
      <h5>${data.product.price} CAD</h5>
      <div class="buy-button" on:click={toggle}>View</div>
      <div class="product-widget-footer"></div>
    </div>
  {/if}
{:catch error}
  <p>An error occurred!</p>
{/await}

<style>
  h3 {
    font-family: Helvetica, sans-serif;
    font-weight: 500;
    margin-block-start: 0.3em;
    margin-block-end: 0.25em;
  }
  h5 {
    font-family: Helvetica, sans-serif;
    font-weight: 600;
    margin-block-start: 0;
    margin-block-end: 0.75em;
    color: #7d7675;
  }
  .product-widget {
    border-radius: 5px;
    box-shadow: 0 5px 20px rgb(0 0 0 / 7%), 0 10px 12px rgb(0 0 0 / 6%);
    width: 250px;
    text-align: center;
    padding: 1em 0 0 0;
    margin: 0 auto;
  }

  .buy-button {
    border-radius: 6px;
    background-color: #f5f5f5;
    color: #000;
    margin-left:30%;
    margin-right:30%;
    padding: 5px 0;
    transition: ease-in 0.13s;
    font-family: 'Trebuchet MS', sans-serif;
    font-weight: 500;
    box-shadow: 0 1px 3px rgb(0 0 0 / 6%), 0 8px 10px rgb(0 0 0 / 5%);
  }

  .buy-button:hover {
    background-color: #292929;
    color: #fff;
    cursor: pointer;
    transition: ease-in 0.08s;
  }

  .product-widget-footer {
    height: 8px;
  }

  img {
    max-width: 250px;
    max-height: 250px;
  }

  @media (min-width: 640px) {
    div {
      max-width: none;
    }
  }
</style>
