import { useCounterStore } from "./counter";
import { useUserStore } from "./user";
import { createPinia } from "pinia";
import { myPiniaPlugin } from './myPiniaPlugin'
const pinia = createPinia()
pinia.use(myPiniaPlugin)
export {
  pinia,
  useCounterStore,
  useUserStore,
}