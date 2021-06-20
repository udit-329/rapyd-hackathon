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
    </div>
  {/if}
{:catch error}
  <p>An error occurred!</p>
{/await}

<style>
  .product-widget {
    border-radius: 25px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    width: 250px;
    text-align: center;
    padding: 1em 0 0 0;
    margin: 0 auto;
  }

  .product-widget-header {
    border-radius: 0 0 25px 25px;
    background-color: #2b49ee;
    color: #fff;
  }

  .product-widget-header:hover {
    background-color: hsl(231, 85%, 60%);
    cursor: pointer;
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
