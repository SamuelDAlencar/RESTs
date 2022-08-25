import React, { useState, useEffect } from 'react';
// import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RestaurantCard from '../../components/RestaurantCard';
import axiosRequest from '../../helpers/axiosRequest';
import HomeStyle from './style';

export default function Home() {
  const [restaurants, setRestaurants] = useState();
  const [items] = useState([]);
  const [user] = useState(JSON.parse(localStorage.getItem('user')));

  const getRestaurants = async () => {
    console.log(user.token);
    const response = await axiosRequest('GET', {}, {
      authorization: user.token
    }, 'restaurant');

    setRestaurants(response.data);

    response.data?.map((restaurant) => {
      items.push(...restaurant.items);
    });
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <>
      <Header username={user.username} />
      <HomeStyle>
        <section className='content_section'>
          <section className='filter_section'>
            <button>Restaurantes</button>
            <button>Itens</button>
          </section>
          <section className='restaurants_section'>
            {restaurants?.map(({ name, address, phone }, i) => {
              return <RestaurantCard key={i} name={name} address={address} phone={phone} />;
            })}
          </section>
        </section>
      </HomeStyle>
      {/* <Footer /> */}
    </>
  );
}
