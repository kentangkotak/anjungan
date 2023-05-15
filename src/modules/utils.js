import { Notify, date } from 'quasar'

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

const dateHuman = (val) => {
  return date.formatDate(val, 'DD MMM YYYY HH:mm:ss')
}

export {
  notifErrVue, dateHuman
}
