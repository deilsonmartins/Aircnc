import React, { useState, useMemo } from 'react';

import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';

import { Container } from '../../styles/Container';

import { Content } from '../../styles/Content';

import { Label } from './styles';

import Brand from '../../components/brand';

import camera from '../../assets/camera.svg';

import api from '../../services/api';

import history from '../../services/history';

export default function New() {
  const [company, setCompany] = useState(''); //eslint-disable-line
  const [techs, setTechs] = useState(''); //eslint-disable-line
  const [price, setPrice] = useState(''); //eslint-disable-line
  const [thumbnail, setThumbnail] = useState(''); //eslint-disable-line

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const data = new FormData();

      const user_id = localStorage.getItem('user');

      data.append('thumbnail', thumbnail);
      data.append('company', company);
      data.append('techs', techs);
      data.append('price', price);

      await api.post('/spots', data, {
        headers: { user_id },
      });

      history.push('/dashboard');
    } catch (err) {
      toast.error('Cadastro não realziado, tente novamente.');
    }
  }
  return (
    <Container>
      <Brand />
      <Content>
        <form onSubmit={handleSubmit}>
          <Label preview={preview}>
            <input
              type="file"
              onChange={(event) => setThumbnail(event.target.files[0])}
            />
            <img src={camera} alt="Select img" />
          </Label>

          <label htmlFor="company">EMPRESA *</label>
          <input
            placeholder="Sua empresa incrivel"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
          />

          <label htmlFor="techs">
            TECNOLOGIAS * <span>(separadas por vírgula)</span>
          </label>
          <input
            placeholder="Quais tecnologias usam?"
            value={techs}
            onChange={(event) => setTechs(event.target.value)}
          />

          <label htmlFor="price">
            VALOR DA DIÁRIA * <span>(em branco para GRATUITO)</span>
          </label>
          <input
            placeholder="Valor cobrado por dia"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </form>
        <Link to="/dashboard">
          <button type="button">Retornar</button>
        </Link>
      </Content>
    </Container>
  );
}
