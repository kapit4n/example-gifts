import React from 'react';
import SimpleReactLightbox from "simple-react-lightbox";

import List from './list';

export default function Index({ gifts }) {

  console.log(gifts);

  return (
    <div style={{border: '1px solid'}}>
      <SimpleReactLightbox>
        <List gifts={gifts} />
      </SimpleReactLightbox>

    </div>
  )
}