import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { store } from 'react-notifications-component';

import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import {
  IncidentContainer,
  IncidentContent,
  IncidentForm,
  IncidentButtons,
} from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

import api from '../../services/api';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();

    try {
      const token = JSON.parse(localStorage.getItem('token'));

      const data = { title, description, value };
      await api.post('/incidents', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      store.addNotification({
        title: 'Sucesso!',
        message: 'Incidente adicionado.',
        type: 'success',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });

      history.push('/profile');
    } catch (error) {
      store.addNotification({
        title: 'Erro!',
        message: 'Dados inválidos',
        type: 'danger',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
    }
  }

  return (
    <IncidentContainer>
      <IncidentContent>
        <section>
          <img src={logoImg} alt="logo" />
          <h1>Cadastre um novo caso</h1>
          <p>Forneça os detalhes sobre o caso que você deseja cadastrar.</p>
          <Link to="/profile">
            <FiArrowLeft /> Voltar para home
          </Link>
        </section>
        <IncidentForm onSubmit={handleNewIncident}>
          <Input
            value={title}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titulo do caso"
          />
          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição"
          />
          <Input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Valor em reais"
          />
          <IncidentButtons>
            <Button>Cadastrar</Button>
          </IncidentButtons>
        </IncidentForm>
      </IncidentContent>
    </IncidentContainer>
  );
}
