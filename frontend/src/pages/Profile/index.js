import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { ProfileContainer, ProfileHeader, CaseList } from './styles';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const name = JSON.parse(localStorage.getItem('name'));
  const token = JSON.parse(localStorage.getItem('token'));

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

  return (
    <ProfileContainer>
      <ProfileHeader>
        <img src={logoImg} alt="logo" />
        <span> Bem vindo(a) {name}</span>

        <Link to="/incidents/new">
          <Button>Cadastrar novo caso</Button>
        </Link>
        <button type="button">
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
            <p>{incident.value}</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </CaseList>
    </ProfileContainer>
  );
}
