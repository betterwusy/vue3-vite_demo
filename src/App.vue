<script setup>
import PluginDemo from './PluginDemo.vue';
import MouseMove from './components/MouseMove.vue'
import MouseTrack from './components/MouseTrack.vue';
import ModelDemo from './ModelDemo.vue';
import ModuleStyle from './ModuleStyle.vue';
import CustomRef from './CustomRef.vue'
import CounterDemo from './components/CounterDemo.vue'
</script>
<template>
  <!-- <PluginDemo></PluginDemo> -->
  <!-- <MouseMove></MouseMove> -->
  <!-- <MouseTrack v-slot="{ x, y }">
    <p>Mouse position is at : {{ x }}, {{ y }}</p>
  </MouseTrack> -->
  <!-- <ModelDemo></ModelDemo> -->
  <!-- <ModuleStyle></ModuleStyle> -->
  <!-- <CustomRef></CustomRef> -->
  <div>
    <CounterDemo></CounterDemo>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
