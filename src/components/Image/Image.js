import React from 'react';

import './Image.css';

const image = props => (
  <div
    className="image"
    style={{
      backgroundImage: `url('${props.imageUrl}')`,
      backgroundSize: props.contain ? 'contain' : 'cover'
    }}
  />
);

export default image;
