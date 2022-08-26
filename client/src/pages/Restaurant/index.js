import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosRequest from '../../helpers/axiosRequest';
import Header from '../../components/Header';
import Card from '../../components/Card';
// Creditos da imagem: https://flyclipart.com/gps-location-map-pin-pin-restaurant-icon-restaurant-icon-png-237324
import restaurantIcon from '../../images/restaurant.jpg';
import StyledRestaurant from './style';

export default function Restaurant() {
  const { id } = useParams();
  const [user] = useState(JSON.parse(localStorage.getItem('user')));
  const [foods] = useState([]);
  const [drinks] = useState([]);
  const [restaurant, setRestaurant] = useState();

  const requestItems = async () => {
    const response = await axiosRequest('GET', {}, {
      authorization: user.token
    }, `item/${id}`);

    response.data.map((item) => {
      item.type === 'food'
        ? foods.push(item)
        : drinks.push(item);
    });
  };

  const requestRestaurant = async () => {
    const response = await axiosRequest('GET', {}, {
      authorization: user.token
    }, `restaurant/${id}`);

    setRestaurant(response.data);
  };

  useEffect(() => {
    requestRestaurant();
    requestItems();
  }, []);

  return (
    <>
      <Header />
      <StyledRestaurant>
        <img src={restaurantIcon} />
        <h1>{restaurant?.name}</h1>
        <h1>{restaurant?.address}</h1>
        <h1>{restaurant?.phone}</h1>

        {foods?.map(({ id, name, description, price }) => {
          return (
            <Card
              key={id}
              name={name}
              description={description}
              price={price}
            />
          );
        })}
        {drinks?.map(({ id, name, description, price }) => {
          return (
            <Card
              key={id}
              name={name}
              description={description}
              price={price}
            />
          );
        })}
      </StyledRestaurant>
    </>
  );
}
