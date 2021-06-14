<script lang="ts">
  import type { ProductResponse } from "./types";
  export let _id: string;

  const fetchData = (async (): Promise<ProductResponse> =>
    await (await fetch(`http://localhost:2001/product/${_id}`)).json())();
</script>

<div>
  {#await fetchData}
    <p>...waiting</p>
  {:then data}
    <img src={data.product.images[0]} alt={data.product.name} />
    <p>
      Product id is: {_id}
    </p>
  {:catch error}
    <p>An error occurred!</p>
  {/await}
</div>

<style>
  div {
    text-align: center;
    padding: 1em;
    max-width: 250px;
    margin: 0 auto;
  }

  img {
    max-width: 250px;
    max-height: 250px;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    div {
      max-width: none;
    }
  }
</style>
