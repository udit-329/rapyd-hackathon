<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function closePopup() {
    dispatch("closePopup", {
      text: "close",
    });
  }
</script>

<div class="box">
  <button class="close-btn" on:click={closePopup}>X</button>
</div>

<style>
  .box {
    position: fixed;
    height: 80vh;
    width: 50vw;
    background-color: aliceblue;
    top: 10%;
    margin: 0 auto;
    padding: 15px;
    left: 10%;
    right: 10%;
  }
</style>
