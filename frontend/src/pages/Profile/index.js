import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { ProfileContainer, ProfileHeader, CaseList } from './styles';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const name = JSON.parse(localStorage.getItem('name'));
  const token = JSON.parse(localStorage.getItem('token'));

  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setIncidents(response.data.incidents);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [token]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (error) {
      alert('Erro ao deletar');
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <ProfileContainer>
      <ProfileHeader>
        <img src={logoImg} alt="logo" />
        <span> Bem vindo(a) {name}</span>

        <Link to="/incidents">
          <Button>Cadastrar novo caso</Button>
        </Link>
        <button type="button" onClick={() => handleLogout()}>
          <FiPower size={18} color="#e02041" />
        </button>
      </ProfileHeader>

      <h1>Casos Cadastrados</h1>
      <CaseList>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>
            <strong>Descrição</strong>
            <p>{incident.description}</p>
            <strong>Valor</strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </p>

            <button
              type="button"
              onClick={() => handleDeleteIncident(incident.id)}
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </CaseList>
    </ProfileContainer>
  );
}
