<template>
  <div>
    <p>Current count: {{ count }}</p>
    <p>Current doubleCount: {{ doubleCount }}</p>
    <p>Current thribleCount: {{ thribleCount }}</p>
  </div>
  <button @click="count++">increment</button>
  <button @click="reset">reset</button>
  <button @click="patch">patch</button>
</template>
<script setup>
import { useCounterStore, useUserStore } from "../store/index.js";
import { storeToRefs } from "pinia";
const counter = useCounterStore();
const user = useUserStore();
console.log(counter);
const { count, doubleCount, thribleCount } = storeToRefs(counter);
const { increment } = counter;
const reset = () => {
  counter.$patch({
    count: 0,
  });
};
const patch = () => {
  counter.$patch({
    count: 100,
  });
};
counter.$subscribe(
  (mutation, state) => {
    console.log(mutation);
  },
  {
    detached: true,
  }
);
counter.$onAction(({ name, store, args, after, onError }) => {
  console.log(`before action-${name}, store:${store.count}`);
  after((res) => {
    console.log(`after action-${name}, store:${store.count}`);
  });
});
</script>
<style scoped>
</style>