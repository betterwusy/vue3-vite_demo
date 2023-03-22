import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
export const useCounterStore = defineStore('counter',
  {
    state: () => {
      return {
        count: 0,
      }
    },
    getters: {
      doubleCount: (state) => {
        return state.count * 2;
      },
      thribleCount() {
        return this.count * 3;
      }
    },
    actions: {
      increment() {
        this.count++;
      }
    }
  }
  // () => {
  //   const count = ref(0);
  //   const doubleCount = computed(() => { return count.value * 2 });
  //   function increment() {
  //     count.value++;
  //   }
  //   return {
  //     count, doubleCount, increment
  //   }
  // }
)