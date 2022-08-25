import React, { useEffect, useContext } from 'react';
// import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RestaurantCard from '../../components/RestaurantCard';
import HomeContext from '../../context/HomeContext';
import HomeStyle from './style';

export default function Home() {
  const {
    user,
    // input,
    // setInput,
    requestData,
    results,
    // setResults,
    filterBy,
    setFilterBy
  } = useContext(HomeContext);

  const buttonFilter = ({ target }) => {
    if (target.id === 'restaurant') {
      setFilterBy('restaurant');
    } else {
      setFilterBy('item');
    }
  };

  useEffect(() => {
    requestData();
  }, [filterBy]);

  return (
    <>
      <Header username={user.username} />
      <HomeStyle>
        <section className='content_section'>
          <section className='filter_section'>
            <button
              className={filterBy === 'restaurant'
                ? 'active_filter_button'
                : 'inactive_filter_button'
              }
              onClick={(event) => buttonFilter(event)}
              id='restaurant'
            >
              Restaurantes
            </button>
            <button
              className={filterBy === 'item'
                ? 'active_filter_button'
                : 'inactive_filter_button'
              }
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
