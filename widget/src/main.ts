import App from "./App.svelte";

export default new App({
  target: document.querySelector("#rapyd-widget"),
  props: {
    _id: process.env._id,
  },
});
