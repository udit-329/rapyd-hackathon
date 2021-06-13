import App from "./App.svelte";

export default new App({
  target: document.querySelector("#rapyd"),
  props: {
    name: "world",
    _id: process.env._id,
  },
});
