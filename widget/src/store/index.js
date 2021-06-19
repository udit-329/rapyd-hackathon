import { writable } from "svelte/store";

export const createStore = (key) => {
  const store = writable(JSON.parse(localStorage.getItem(key)) || []);
  store.subscribe((val) => {
    if (JSON.stringify(val) !== "[]")
      localStorage.setItem(key, [JSON.stringify(val)]);
  });
  return store;
};
