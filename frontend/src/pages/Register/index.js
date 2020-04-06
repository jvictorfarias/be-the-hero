import React, { useState } from 'react';
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

import api from '../../services/api';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  function handleRegister(e) {
    e.preventDefault();
  }

  /**
   * Without hooks
   *

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

   */

  return (
    <RegisterContainer>
      <RegisterContent>
        <section>
          <img src={logoImg} alt="logo" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <Link to="/">
            <FiArrowLeft /> Voltar
          </Link>
        </section>
        <RegisterForm onSubmit={handleRegister}>
          <Input
            type="text"
            placeholder="Nome da ONG"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Senha"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="text"
            placeholder="WhatsApp"
            value={whatsapp}
            name="whatsapp"
            onChange={(e) => setWhatsapp(e.target.value)}
          />

          <RegisterInputAddress>
            <Input
              type="text"
              placeholder="Cidade"
              value={city}
              name="city"
              onChange={(e) => setCity(e.target.value)}
            />
            <Input
              type="text"
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              name="uf"
              onChange={(e) => setUf(e.target.value)}
            />
          </RegisterInputAddress>
          <Button>Cadastrar</Button>
        </RegisterForm>
      </RegisterContent>
    </RegisterContainer>
  );
}