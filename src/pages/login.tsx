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
  Register,
} from '../styles/pages/LoginAndRegister';

// images
import logo from '../assets/logo.svg';
import dashboardHome from '../assets/dashboard-home.svg';
import Button from '../components/Button/button';
import logoGoogle from '../assets/logo-google.svg';
import Link from 'next/link';
import Axios from '../lib/api/axios';
import Router from 'next/router';
import { DataContextProvider } from '../context/DataProvider';
import { Loading } from '../components/Loading/Loading';
import { Feedback } from '../components/Feedback/Feedback';

const Login: React.FC = () => {
  const [getForm, setForm] = useState<Record<string, unknown>>();

  const [awaitResponse, setAwaitResponse] = useState(false);
  const [getErro, setErro] = useState('');

  const { setRefresh } = useContext(DataContextProvider);

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleChangeSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setAwaitResponse(true);

    try {
      const { data } = await Axios({
        baseURL: 'api/login?token=ok',
        method: 'POST',
        data: getForm,
      });

      if (!data.token) {
        alert('usuário ou senha inválidos!');
        return;
      }

      localStorage.setItem('t-register-platform', data.token);

      setRefresh((prev) => !prev);

      setAwaitResponse(false);
      Router.push('/');
    } catch (err) {
      setAwaitResponse(false);
      setErro('Usuário ou senha inválidos!');
      return;
    }
  };

  return (
    <div>
      <Head>
        <title>Faça seu Login</title>
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
              <h2>Login</h2>
              <p>
                Por favor, coloque suas credenciais de login abaixo para começar
                a usar a plataforma.
              </p>

              <BoxInput>
                <label>
                  <span>E-mail</span>
                  <input
                    type="email"
                    name="email"
                    required
                    onChange={handleChangeInput}
                    autoComplete="off"
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

              <ContainerButtons>
                <Button
                  type="button"
                  className="button-google"
                  onClick={() => alert('Em breve')}
                >
                  <img src={logoGoogle.src} alt="Google" />
                  <strong>Entrar com Google</strong>
                </Button>
                <Button type="submit">Entrar</Button>
              </ContainerButtons>
            </form>

            {awaitResponse && <Loading />}

            <Register>
              Não tem conta?
              <Link href="/register">
                <a>Inscreva-se</a>
              </Link>
            </Register>
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

export default Login;
