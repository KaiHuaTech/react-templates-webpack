const serverkey = process.env.server || '62.235';

const Servers = {
  // eslint-disable-next-line
  '62.235': {
    token: '9b5901497a6450f8c0d4558df0463dacf07ab25a154c55ca007cc70a6ebf5ddf',
    tenant: '',
    chatops: 'http://10.1.62.235:8030',
  },
};

const server = Servers[serverkey];

module.exports = {
  '/chatops/api': {
    target: server.chatops,
    pathRewrite: { '^/chatops': '/hummer' },
    logLevel: 'debug',
    ws: true,
    headers: {
      language: 'zh_CN',
      skin: 'blue',
      token: server.token,
    },
  },
};
