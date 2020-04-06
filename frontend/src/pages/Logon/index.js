import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { LogonContainer, LogonForm } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';

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
            <Input placeholder="Digite seu email" />
            <Input placeholder="Digite sua senha" />
            <Button>Entrar</Button>
            <Link to="/register">
              <FiLogIn />
              Não tenho cadastro
            </Link>
          </LogonForm>
        </section>
        <img src={heroesImg} alt="heroes" />
      </LogonContainer>
    );
  }
}
