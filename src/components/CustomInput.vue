<!-- 在组件上使用 v-model -->
<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>
<style scoped>
</style>