import { createApp } from 'vue'

import App from './App.vue'

import installPlugins from '@/plugins'

import '@/permission'

import '@/styles/index.scss'

const app = createApp(App)

// Install plugins
app.use(installPlugins)

app.mount('#app')
