import axios from 'axios';

require('./service/socket/socket');

axios.get('/chatops/api/v2/chat/users/me')
  .then((res) => {
    console.log('axios', res);
  });
