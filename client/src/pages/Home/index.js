import React, { useEffect, useContext } from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import HomeContext from '../../context/HomeContext';
import StyledHome from './style';
import Loading from '../../components/Loading';
import FilterButton from '../../components/FilterButton';

export default function Home() {
  const {
    requestData,
    results,
    filterBy,
    searchedBy
  } = useContext(HomeContext);

  useEffect(() => {
    requestData();
  }, [filterBy]);

  return (
    <>
      <Header home />
      <StyledHome>
        <section className='content_section'>
          <section className='filter_section'>
            <section>
              <FilterButton
                id='restaurant'
              />
              <FilterButton
                id='item'
              />
            </section>
            {searchedBy && (
              <p className='searchingFor_p'>
                Buscando {filterBy === 'restaurant' ? 'restaurantes' : 'itens'} por <span>&quot;{searchedBy}&quot;</span>
              </p>)}
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
                price,
                type
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
                    type={type}
                  />;
              })
              : <Loading />
            }

            {results?.length === 0 && (
              <p className='notFound_p'>
                Nenhum {filterBy === 'restaurant' ? 'restaurante' : 'item'} com o termo <span>&quot;{searchedBy}&quot;</span> foi encontrado :&apos;&#40;
              </p>)}
          </section>
        </section>
      </StyledHome>
    </>
  );
}
