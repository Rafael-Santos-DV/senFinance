import Head from 'next/head';
import React from 'react';
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

const Register: React.FC = () => {
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
            <form>
              <h2>Criar Conta</h2>
              <p>
                Por favor, coloque suas credenciais de login abaixo para começar
                a usar a plataforma.
              </p>

              <BoxInput>
                <label>
                  <span>Nome</span>
                  <input type="text" name="name" required autoComplete="off" />
                </label>

                <label>
                  <span>E-mail</span>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="off"
                  />
                </label>

                <label>
                  <span>
                    Perfil URL <em>(opcional)</em>
                  </span>
                  <input type="text" name="perfil" autoComplete="off" />
                </label>

                <label>
                  <span>Senha</span>
                  <input
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    required
                  />
                </label>
              </BoxInput>

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
