import React, { useEffect, useContext } from 'react';
// import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Card from '../../components/Card';
import HomeContext from '../../context/HomeContext';
import StyledHome from './style';
import Loading from '../../components/Loading';
import FilterButton from '../../components/FilterButton';

export default function Home() {
  const {
    user,
    input,
    requestData,
    results,
    filterBy,
  } = useContext(HomeContext);

  useEffect(() => {
    requestData();
  }, [filterBy]);

  return (
    <>
      <Header username={user.username} />
      <StyledHome>
        <section className='content_section'>
          <section className='filter_section'>
            <FilterButton
              id='restaurant'
            />
            <FilterButton
              id='item'
            />
          </section>
          <section className='items_section'>
            {results
              ? results?.map(({
                id,
                restaurantId,
                name,
                address,
                phone,
                description,
                price
              }, i) => {
                return filterBy === 'restaurant'
                  ? <Card
                    key={i}
                    id={id}
                    name={name}
                    address={address}
                    phone={phone}
                  />
                  : <Card
                    key={i}
                    id={restaurantId}
                    name={name}
                    description={description}
                    price={price}
                  />;
              })
              : <Loading />
            }

            {results?.length === 0 && (
              <p className='notFound_p'>
                Nenhum {filterBy === 'restaurant' ? 'restaurante' : 'item'} com o termo <span>&quot;{input}&quot;</span> foi encontrado :&apos;&#40;
              </p>)}
          </section>
        </section>
      </StyledHome>
      {/* <Footer /> */}
    </>
  );
}
