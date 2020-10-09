import React from 'react';
import { SRLWrapper } from "simple-react-lightbox";

export default function List({ gifts }) {
  return (
    <div style={{ border: '1px solid', margin: '0 15%' }}>
      <SRLWrapper images={gifts}>
        {gifts.map(gift => {
          return (
            <div style={{ border: '1px solid', padding: '1rem', boxShadow: '2px 2px #888888', backgroundColor: '#f7f7f7' }}>
              <a key={gift.id} href={gift.images.original.url} data-attribute="SRL">
                <h1>{gift.title}</h1>
                <div>
                  User name: {gift.username}
                </div>
                <img src={gift.images.original.url} alt="Image" />
              </a>

            </div>
          )
        })}
      </SRLWrapper>

    </div>
  )
}