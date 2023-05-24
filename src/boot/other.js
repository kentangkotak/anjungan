import Print from 'vue3-print-nb'
import Vue3Marquee from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'

export default async ({ app }) => {
  app.use(Print)
  app.use(Vue3Marquee)
}
