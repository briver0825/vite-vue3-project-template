import { App } from 'vue'

import router from './router'
import pinia from './pinia'

export default (app: App) => {
  // use router
  app.use(router)
  // use pinia
  app.use(pinia)
}
