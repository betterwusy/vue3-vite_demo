import { ref, toRef } from 'vue'
export function myPiniaPlugin(context) {
  const { store } = context;
  console.log(context);
  if (!Object.prototype.hasOwnProperty(store.$state, 'hasError')) {
    const hasError = ref(false);
    store.$state.hasError = hasError;
  }
  store.hasError = toRef(store.$state, 'hasError');
}