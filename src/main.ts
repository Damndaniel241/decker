import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router }  from "@/router/index";
import { createPinia } from "pinia";
import { clerkPlugin } from 'vue-clerk';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import 'primeicons/primeicons.css'



const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;


if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key')
  }

const app = createApp(App);
const pinia = createPinia();

app.component('QuillEditor', QuillEditor);
app.use(pinia);
app.use(router);
app.use(clerkPlugin, {
    publishableKey: PUBLISHABLE_KEY
  })
app.mount("#app");