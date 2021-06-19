<script lang="ts">
  import Popup from "./components/Popup.svelte";

  let cartOpened = false;
  let toggle = () => (cartOpened = !cartOpened);
</script>

<div>
  <div class="cart-button" on:click={toggle}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"
      ><path d="M0 0h24v24H0V0z" fill="none" /><path
        d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
      /></svg
    >
  </div>
  {#if cartOpened}
    <Popup on:closePopup={toggle} />
  {/if}
</div>

<style>
  .cart-button {
    position: fixed;
    bottom: 50px;
    right: 50px;
    padding: 1em;
    height: 25px;
    width: 25px;
    background-color: #0094ff;
    border-radius: 50%;
    display: inline-block;
  }

  .cart-button:hover {
    background-color: #1a9fff;
    cursor: pointer;
  }
</style>
