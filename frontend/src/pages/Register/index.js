import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import {
  RegisterContainer,
  RegisterForm,
  RegisterContent,
  RegisterInputAddress,
} from './styles';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default class Register extends Component {
  state = {};

  render() {
    return (
      <RegisterContainer>
        <RegisterContent>
          <section>
            <img src={logoImg} alt="logo" />
            <h1>Cadastro</h1>
            <p>
              Faça seu cadastro, entre na plataforma e ajude pessoas a
              encontrarem os casos da sua ONG.
            </p>
            <Link to="/">
              <FiArrowLeft /> Voltar
            </Link>
          </section>
          <RegisterForm>
            <Input placeholder="Nome da ONG" />
            <Input type="email" placeholder="Email" />
            <Input placeholder="Senha" />
            <Input placeholder="WhatsApp" />

            <RegisterInputAddress>
              <Input placeholder="Cidade" />
              <Input placeholder="UF" style={{ width: 80 }} />
            </RegisterInputAddress>
            <Button>Cadastrar</Button>
          </RegisterForm>
        </RegisterContent>
      </RegisterContainer>
    );
  }
}
