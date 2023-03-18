<template>
  <div>
    <input type="text" v-model="text" />
    <p>{{ text }}</p>
  </div>
</template>
<script setup>
import { useDebounceRef } from "./debounceRef";
const text = useDebounceRef("test", 500);
</script>
<style scoped>
</style>