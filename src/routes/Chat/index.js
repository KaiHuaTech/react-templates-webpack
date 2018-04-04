// async route definition
import React from 'react';
import Loadable from 'react-loadable';

// export default (cb) => {
//   require.ensure([], (require) => {
//     const Chat = require('./componets/Chat').default;
//     cb(null, Chat);
//   });
// };
export default Loadable({
  loader: () => import('./componets/Chat'),
  loading() {
    return <div>Loading...</div>;
  },
});
