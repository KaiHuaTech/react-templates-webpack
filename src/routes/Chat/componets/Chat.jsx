import React from 'react';

const img1 = require('@/assets/img/1.jpg'); // eslint-disable-line

export default () => (
  <div>
    <h2>Chat1</h2>
    <img src={img1} alt="" />
    <div className="photo-box" />
  </div>
);
