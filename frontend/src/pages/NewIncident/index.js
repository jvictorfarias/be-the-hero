import React from 'react';
import { Link } from 'react-router-dom';

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

export default function NewIncident() {
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
        <IncidentForm>
          <Input placeholder="Titulo do caso" />
          <textarea placeholder="Descrição" />
          <Input placeholder="Valor em reais" />
          <IncidentButtons>
            <Button>Cadastrar</Button>
          </IncidentButtons>
        </IncidentForm>
      </IncidentContent>
    </IncidentContainer>
  );
}
