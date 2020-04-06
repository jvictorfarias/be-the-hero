import React, { Component } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { LogonContainer, LogonForm } from './styles';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default class Logon extends Component {
  state = {};

  render() {
    return (
      <LogonContainer>
        <section className="form">
          <img src={logoImg} alt="logo" />
          <LogonForm>
            <h1>Faça seu logon</h1>
            <input placeholder="Digite seu email" />
            <input placeholder="Digite sua senha" />
            <Button>Entrar</Button>
            <a href="/register">
              <FiLogIn />
              Não tenho cadastro
            </a>
          </LogonForm>
        </section>
        <img src={heroesImg} alt="heroes" />
      </LogonContainer>
    );
  }
}
