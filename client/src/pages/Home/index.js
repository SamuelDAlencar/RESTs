import React, { useEffect, useContext } from 'react';
// import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Card from '../../components/Card';
import HomeContext from '../../context/HomeContext';
import HomeStyle from './style';
import Loading from '../../components/Loading';

export default function Home() {
  const {
    user,
    requestData,
    results,
    setResults,
    filterBy,
    setFilterBy
  } = useContext(HomeContext);

  const buttonFilter = ({ target }) => {
    setResults();

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
            {results
              ? results?.map(({ name, address, phone, description, price }, i) => {
                return filterBy === 'restaurant'
                  ? <Card key={i} name={name} address={address} phone={phone} />
                  : <Card key={i} name={name} description={description} price={price} />;
              })
              : <Loading />
            }
          </section>
        </section>
      </HomeStyle>
      {/* <Footer /> */}
    </>
  );
}
