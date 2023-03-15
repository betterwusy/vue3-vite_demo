<template>
  <CustomInputVue v-model="searchText"></CustomInputVue>
  <p>{{ searchText }}</p>
</template>

<script setup>
import { ref } from 'vue';
import CustomInputVue from "./components/CustomInput.vue";
const searchText = ref("test");
</script>
