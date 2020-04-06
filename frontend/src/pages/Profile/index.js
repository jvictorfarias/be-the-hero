import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { ProfileContainer, ProfileHeader, CaseList } from './styles';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

export default class Profile extends Component {
  state = {};

  render() {
    return (
      <ProfileContainer>
        <ProfileHeader>
          <img src={logoImg} alt="logo" />
          <span> Bem vindo ****</span>

          <Link to="/incidents/new">
            <Button>Cadastrar novo caso</Button>
          </Link>
          <button type="button">
            <FiPower size={18} color="#e02041" />
          </button>
        </ProfileHeader>

        <h1>Casos Cadastrados</h1>
        <CaseList>
          <li>
            <strong>CASO:</strong>
            <p>Caso teste</p>
            <strong>Descrição</strong>
            <p>Descrição teste</p>
            <strong>Valor</strong>
            <p>Valor test</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
          <li>
            <strong>CASO:</strong>
            <p>Caso teste</p>
            <strong>Descrição</strong>
            <p>Descrição teste</p>
            <strong>Valor</strong>
            <p>Valor test</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
          <li>
            <strong>CASO:</strong>
            <p>Caso teste</p>
            <strong>Descrição</strong>
            <p>Descrição teste</p>
            <strong>Valor</strong>
            <p>Valor test</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        </CaseList>
      </ProfileContainer>
    );
  }
}
