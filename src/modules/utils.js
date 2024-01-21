import { Notify, date } from 'quasar'
import * as storage from 'src/utility/storrage'

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

const notifErr = (resp) => {
  const status = (resp === 'undefined' || resp === undefined) ? 500 : resp?.status
  const statusText = (resp === 'undefined' || resp === undefined) ? 500 : resp?.statusText
  const statusMsg = (resp === 'undefined' || resp === undefined) ? 500 : resp?.data ? resp?.data?.message : 'ER'

  if (status === 401 || statusText === 'Unauthorized' || statusMsg === 'Unauthenticated.') {
    // console.log('remove token', resp.status)
    return removeToken()
  }
}

const removeToken = () => {
  // caches.delete()
  storage.clearStore()
}

export {
  notifErrVue, dateHuman, notifErr
}
