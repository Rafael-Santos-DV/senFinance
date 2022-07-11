import Head from 'next/head';
import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import {
  BoxForm,
  BoxInput,
  ContainerButtons,
  ContainerLeft,
  ContainerRight,
  ContentLogo,
  MainContent,
  Register as Login,
} from '../styles/pages/LoginAndRegister';

// images
import logo from '../assets/logo.svg';
import dashboardHome from '../assets/dashboard-home.svg';
import Button from '../components/Button/button';
import Link from 'next/link';
import Axios from '../lib/api/axios';
import Router from 'next/router';
import { DataContextProvider } from '../context/DataProvider';
import { Feedback } from '../components/Feedback/Feedback';
import { Loading } from '../components/Loading/Loading';

const Register: React.FC = () => {
  const [getForm, setForm] = useState({
    name: '',
    email: '',
    avatar: '',
    password: '',
  });

  const { setRefresh } = useContext(DataContextProvider);

  const [awaitResponse, setAwaitResponse] = useState(false);
  const [getErro, setErro] = useState('');

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleChangeSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!getForm.email) {
      setErro('Email está vazio!');
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(getForm.email)) {
      setErro('Email é inválido!');
      return;
    }

    if (getForm.password.length < 8) {
      setErro('Senha é inválida!');
      return;
    }

    setAwaitResponse(true);
    try {
      const { data } = await Axios({
        baseURL: 'api/register?token=ok',
        method: 'POST',
        data: getForm,
      });

      localStorage.setItem('t-register-platform', data.token);
      setRefresh((prev) => !prev);
      setAwaitResponse(false);
      Router.push('/');
    } catch (err) {
      setAwaitResponse(false);
      setErro(`E-mail já está em uso.`);

      const clear = setTimeout(() => {
        setErro(``);
      }, 2000);

      return () => clearTimeout(clear);
    }
  };

  return (
    <div>
      <Head>
        <title>Criar Conta</title>
      </Head>

      <MainContent>
        <ContentLogo className="content-mobile">
          <img src={logo.src} alt="SenFinança Logo" />
        </ContentLogo>

        <ContainerLeft>
          <ContentLogo>
            <img src={logo.src} alt="SenFinança Logo" />
          </ContentLogo>
          <BoxForm>
            <form onSubmit={handleChangeSubmit}>
              <h2>Criar Conta</h2>
              <p>
                Por favor, coloque suas credenciais de login abaixo para começar
                a usar a plataforma.
              </p>

              <BoxInput>
                <label>
                  <span>Nome</span>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="off"
                    onChange={handleChangeInput}
                  />
                </label>

                <label>
                  <span>E-mail</span>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="off"
                    onChange={handleChangeInput}
                  />
                </label>

                <label>
                  <span>
                    Perfil URL <em>(opcional)</em>
                  </span>
                  <input
                    type="text"
                    name="avatar"
                    autoComplete="off"
                    onChange={handleChangeInput}
                  />
                </label>

                <label>
                  <span>Senha</span>
                  <input
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    onChange={handleChangeInput}
                    required
                  />
                </label>
              </BoxInput>

              {getErro && <Feedback text={getErro} type="Error" />}

              {awaitResponse && <Loading />}

              <ContainerButtons className="container-register-buttons">
                <Button type="submit">Criar Conta</Button>
              </ContainerButtons>
            </form>

            <Login>
              Já tem conta?
              <Link href="/login">
                <a>Login</a>
              </Link>
            </Login>
          </BoxForm>
        </ContainerLeft>
        <ContainerRight>
          <div>
            <img src={dashboardHome.src} alt="Plataforma senFinança" />
          </div>
          <h1>Conheça nossa plataforma</h1>
          <p>Tenha o controle das suas transações com nossa plataforma</p>
        </ContainerRight>
      </MainContent>
    </div>
  );
};

export default Register;
