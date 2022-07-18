import { App } from 'vue'

import { router } from '@/router'

export default (app: App) => {
  app.use(router)
}
