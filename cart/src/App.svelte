<script lang="ts">
  import Popup from './components/Popup.svelte';

  let ProductClicked = false;

  function showProduct() {
		ProductClicked = !ProductClicked
    console.log("open")
	}

  function close() {
    ProductClicked = !ProductClicked
    console.log("close")
  }
</script>

<div>
    <button class="btn" on:click = {showProduct}>Cart</button>
    {#if ProductClicked}
      <Popup on:closePopup={close}></Popup>
    {/if}
</div>

<style>
  div {
    text-align: center;
    padding: 1em;
    max-width: 250px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    div {
      max-width: none;
    }
  }
</style>
