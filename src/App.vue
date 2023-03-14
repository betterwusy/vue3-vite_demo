<script setup>
import HelloWorld from './components/HelloWorld.vue'
import MouseMove from './components/MouseMove.vue'
import MouseTrack from './components/MouseTrack.vue';
import { inject } from 'vue';
const i18n = inject('i18n')
console.log(i18n.greetings.hello);
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
    <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
  <HelloWorld msg="Vite + Vue" /> -->
  <!-- <div>
    {{ $translate('greetings.hello') }}
  </div> -->
  <!-- <MouseMove></MouseMove> -->
  <MouseTrack v-slot="{ x, y }">
    <p>Mouse position is at : {{ x }}, {{ y }}</p>
  </MouseTrack>
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
