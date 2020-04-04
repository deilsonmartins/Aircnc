import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import { Container } from '../../styles/Container';

import Brand from '../../components/brand';

import { Content } from '../../styles/Content';

import { List } from './styles';

import api from '../../services/api';

export default function dashboard() {
  const [spots, setSpots] = useState([]); //eslint-disable-line

  async function loadSpots() {
    try {
      const user_id = localStorage.getItem('user');

      const response = await api.get('/profile', {
        headers: { user_id },
      });

      setSpots(response.data);
    } catch (err) {
      toast.error('Error no servidor.');
    }
  }

  useEffect(() => { //eslint-disable-line
    loadSpots();
  }, []);

  return (
    <Container>
      <Brand />
      <Content>
        <>
          <List>
            {spots.map((spot) => (
              <li key={spot._id}>
                <header
                  style={{ backgroundImage: `url(${spot.thumbnail_url})` }}
                />
                <strong>{spot.company}</strong>
                <span>{spot.price ? `R$ ${spot.price}/dia` : 'Gratuito'}</span>
              </li>
            ))}
          </List>

          <Link to="/new">
            <button type="button">Cadastrar novo spot</button>
          </Link>
          <Link to="/">
            <button type="button">Sair</button>
          </Link>
        </>
      </Content>
    </Container>
  );
}
