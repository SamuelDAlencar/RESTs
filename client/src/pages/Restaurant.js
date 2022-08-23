import React from 'react';
import { useParams } from 'react-router-dom';

export default function Restaurant() {
  const params = useParams();

  return (
    <h1>Restaurant { params.id }</h1>
  );
}
