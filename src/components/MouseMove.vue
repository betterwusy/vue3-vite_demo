<script setup>
import { useMouse } from '../use/mouse';
const { x, y } = useMouse();
</script>
<template>
  <div>
    <p>
      Mouse position is at : {{ x }},{{ y }}
    </p>
  </div>
</template>