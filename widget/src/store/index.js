import { writable } from "svelte/store";

export default (key) => {
  const store = writable(localStorage.getItem(key) || []);
  store.subscribe((val) => localStorage.setItem(key, val));
  return store;
};
