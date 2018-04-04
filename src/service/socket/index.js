/* eslint-disable */
import axios from 'axios'
const Primus = require('./primus');


let primusInstance = Primus.connect('/snapper');

primusInstance.on('open', () => {
  console.log('Primus connection opened')
})

let first = true
primusInstance.on('data', (rawData) => {
  console.log('sockt data: ', rawData)
  // _data = JSON.parse(rawData)
  if (first) {
    first = false
    axios.post('/chatops/api/v2/chat/users/subscribe', {}, {
      headers: {'X-Socket-Id': rawData.socketId}
    })
  }
})


