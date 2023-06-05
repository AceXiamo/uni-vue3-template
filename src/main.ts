import { createSSRApp } from "vue";
import App from "./App.vue";

// pinia
import { createPinia } from 'pinia'
const pinia = createPinia()

// unocss
import 'virtual:uno.css'

export function createApp() {
  const app = createSSRApp(App);
  app.use(pinia)
  return {
    app,
  };
}


