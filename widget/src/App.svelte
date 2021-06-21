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
      <div class="product-widget-header" on:click={toggle}>Buy</div>
      <div class="product-widget-footer"></div>
    </div>
  {/if}
{:catch error}
  <p>An error occurred!</p>
{/await}

<style>
  .product-widget {
    border-radius: 5px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.07), 0 15px 12px rgba(0, 0, 0, 0.06);
    width: 250px;
    text-align: center;
    padding: 1em 0 0 0;
    margin: 0 auto;
  }

  .product-widget-header {
    border-radius: 2px 2px 2px 2px;
    background-color: #878787;
    color: #fff;
    margin-left:30%;
    margin-right:30%;
    padding: 5px 0;
    transition: ease-in 0.2s;
  }

  .product-widget-header:hover {
    background-color: #e0e0e0;
    color: #000;
    cursor: pointer;
    transition: ease-in 0.1s;
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
