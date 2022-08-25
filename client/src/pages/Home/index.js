import React, { useState, useEffect } from 'react';
// import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RestaurantCard from '../../components/RestaurantCard';
import axiosRequest from '../../helpers/axiosRequest';
import HomeStyle from './style';

export default function Home() {
  const [results, setResults] = useState();
  const [user] = useState(JSON.parse(localStorage.getItem('user')));
  const [filterBy, setFilterBy] = useState('restaurant');

  const getResults = async () => {
    const response = await axiosRequest('GET', {}, {
      authorization: user.token
    }, filterBy);

    setResults(response.data);
  };

  const buttonFilter = ({ target }) => {
    if (target.id === 'restaurant') {
      setFilterBy('restaurant');
    } else {
      setFilterBy('item');
    }
  };

  useEffect(() => {
    getResults();
  }, [filterBy]);

  return (
    <>
      <Header username={user.username} />
      <HomeStyle>
        <section className='content_section'>
          <section className='filter_section'>
            <button
              onClick={(event) => buttonFilter(event)}
              id='restaurant'
            >
              Restaurantes
            </button>
            <button
              onClick={(event) => buttonFilter(event)}
              id='item'
            >
              Itens
            </button>
          </section>
          <section className='items_section'>
            {results?.map(({ name, address, phone }, i) => {
              return filterBy === 'restaurant'
                ? <RestaurantCard key={i} name={name} address={address} phone={phone} />
                : <RestaurantCard key={i} name={name} address={address} phone={phone} />;
            })}
          </section>
        </section>
      </HomeStyle>
      {/* <Footer /> */}
    </>
  );
}
