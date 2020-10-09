import React from 'react';
import GiftDetail from '../detail'

export default function Index({ gifts }) {
  return (
    <>
      {gifts.map(g => {
        return <GiftDetail key={g.id} gift={g} />
      })}
    </>
  )
} 