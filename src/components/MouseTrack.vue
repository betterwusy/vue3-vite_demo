<!-- 
  一个利用作用域插槽实现的无渲染组件
 -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const x = ref(0)
const y = ref(0)
const update = (event) => {
  x.value = event.pageX;
  y.value = event.pageY;
}
onMounted(() => window.addEventListener('mousemove', update))
onUnmounted(() => window.removeEventListener('mousemove', update))
</script>
<template>
  <slot :x="x" :y="y"> </slot>
</template>