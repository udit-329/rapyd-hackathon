<script lang="ts">
  import { createStore } from "../store";
  const cart = createStore("rapyd-cart");
  let total = 0;
  let info = {}
  $cart?.forEach((element) => (total += element?.price * element?.prodCount));
  fetch("http://localhost:2002/checkout", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
    "amount": total,
    "complete_payment_url": "http://example.com/complete",
    "country": "US",
    "currency": "USD",
    "error_payment_url": "http://example.com/error",
    "cardholder_preferred_currency": true,
    "language": "en",
    "expiration": 1611384431
}),
  })
    .then((response) => response.json())
    .then((data) => {
      info = data
    })
    .catch((error) => {
      console.error("Error:", error);
    });
</script>

<div>
    {#if info?.redirect_url}
    <iframe class="rapyd-checkout" title="Rapyd Checkout" frameBorder="0" src={info?.redirect_url} width="100%" height="600">
    </iframe>
    {/if}
</div>

<style>
  .rapyd-checkout {
    overflow-x: scroll;
    overflow-y: scroll;
  }
</style>
