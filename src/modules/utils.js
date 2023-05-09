import { Notify } from 'quasar'

const notifErrVue = (msg) => {
  Notify.create({
    message: msg,
    icon: 'report',
    position: 'top',
    color: 'negative',
    actions: [
      { label: 'OK', color: 'yellow', handler: () => { /* console.log('wooow') */ } }
    ]
  })
}

export {
  notifErrVue
}
