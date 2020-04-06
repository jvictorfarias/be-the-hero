import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import { ProfileContainer, ProfileHeader } from './styles';
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
      </ProfileContainer>
    );
  }
}
