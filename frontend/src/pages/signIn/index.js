import React, { useState } from 'react';

import { toast } from 'react-toastify';

import api from '../../services/api';

import { Container } from '../../styles/Container';

import { Content } from '../../styles/Content';

import Brand from '../../components/brand';

import history from '../../services/history';

export default function signIn() {
  const [email, setEmail] = useState(''); //eslint-disable-line

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post('/sessions', {
        email,
      });

      const { _id: id } = response.data;

      localStorage.setItem('user', id);

      history.push('/dashboard');
    } catch (err) {
      toast.error('Cadastro não realizado, tente novamente.');
    }
  }
  return (
    <Container>
      <Brand />
      <Content>
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre
          <strong> talentos</strong> para sua empresa
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL</label>
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <button type="submit">Entrar</button>
        </form>
      </Content>
    </Container>
  );
}
