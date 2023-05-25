import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

// const host = 'xenter.my.id'
// const host = '36.89.103.117'
// const host = '192.168.101.79'
// const host = '192.168.150.103'
const host = window.location.hostname // 'localhost'

window.Pusher = Pusher

// window.Echo = new Echo({
//   broadcaster: 'pusher',
//   key: 'simrs_key_harry141312',
//   cluster: 'mt1',
//   // wsHost: host,
//   wsHost: host,
//   encrypted: true,
//   wssPort: 6002,
//   wsPort: 6002,
//   disableStats: true,
//   forceTLS: true, // default true
//   enabledTransports: ['ws', 'wss']
// })
window.Echo = new Echo({
  broadcaster: 'pusher',
  key: 'simrs_key',
  cluster: 'mt1',
  // wsHost: host,
  wsHost: host,
  encrypted: false,
  wssPort: 6001,
  wsPort: 6001,
  disableStats: true,
  forceTLS: false, // default true
  enabledTransports: ['ws', 'wss']
})

// window.Echo = new Echo({
//   broadcaster: 'pusher',
//   key: 'simrs_key',
//   wsHost: host,
//   wsPort: 6001,
//   forceTLS: false,
//   disableStats: true
// })

const channel = window.Echo.channel('public.antrean')
// const channel = window.Echo.channel('public.playground.1')
// const qrcodeChannel = window.Echo.channel('qrcode')

// const socket = () => {
//   let msg = null
//   channel.subscribed(() => {
//     console.log('subscribed!!!')
//   }).listen('.playground', (e) => {
//     msg = e
//   })

//   return msg
// }

export { channel }
