import React from 'react';

export default function Index({ gift }) {
  return (
    <div>
      <h1>{gift.title}</h1>
      <img src={gift.images.preview_gif.url} />
    </div>
  )
}