import React from 'react';
import GiftListComponent from '../../components/gifts/list'
import LightBoxView from '../../components/gifts/lightbox'
import axios from 'axios';

export default function Index() {
  const [searchText, setSearchText] = React.useState('react');
  const [searchTextAux, setSearchTextAux] = React.useState('react');
  const [apiKey, setApiKey] = React.useState('3xjvF6mEa9PtnTV7ZqpcT1qSAQZVOh9s');
  const [gifts, setGifts] = React.useState([]);

  React.useEffect(() => {
    async function getGifts() {
      if (searchText && apiKey) {
        const gifts = await axios.get(`${process.env.REACT_APP_API_URL}/search?api_key=${apiKey}&q=${searchText}&limit=5&offset=0&rating=g&lang=en`);
        setGifts(gifts.data.data);
      }
    }
    getGifts();
  }, [searchText])


  React.useEffect(() => {
    const timer = setTimeout(() => {
      setSearchText(searchTextAux);
    }, 1000);
    return () => clearTimeout(timer);
  }, [searchTextAux]);

  return (<>
    <div>
      Search: <input onChange={e => setSearchTextAux(e.target.value)} value={searchTextAux} />
        Api Key: <input onChange={e => setApiKey(e.target.value)} value={apiKey} />
    </div>
    <div style={{ width: "100%" }}>
      <LightBoxView gifts={gifts} />
    </div>
  </>
  )
}