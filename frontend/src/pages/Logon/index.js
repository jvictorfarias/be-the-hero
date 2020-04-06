import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { LogonContainer, LogonForm } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

import api from '../../services/api';

export default function Logon() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data } = await api.post('/session', {
        email,
        password,
      });

      localStorage.setItem('token', JSON.stringify(data.token));
      localStorage.setItem('name', JSON.stringify(data.ong.name));

      history.push('/profile');
    } catch (error) {
      alert('Authentication failed');
    }
  }

  return (
    <LogonContainer>
      <section className="form">
        <img src={logoImg} alt="logo" />
        <LogonForm onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <Input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
