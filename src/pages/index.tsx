import type { NextPage } from 'next';
import Head from 'next/head';
import {
  BoxLogout,
  BoxSelect,
  Container,
  ContainerLogo,
  Menu,
  SidebarInformations,
} from '../styles/pages/dashboard';

// images
import logo from '../assets/logo-white.svg';
import iconDashboard from '../assets/icon-dash.svg';
import iconTransac from '../assets/icon-transac.svg';
import iconConfig from '../assets/icon-config.svg';
import Button from '../components/Button/button';
import { SelectModel } from '../components/SelectModel/SelectModel';

const Dashboard: React.FC<NextPage> = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Dashboard SenFinança" />
      </Head>

      <Container>
        <SidebarInformations>
          <ContainerLogo>
            <img src={logo.src} alt="SenFinança" />
          </ContainerLogo>

          <Menu>
            <BoxSelect title="Dashboard">
              <img src={iconDashboard.src} alt="Dashboard" />
              <span>Dashboard</span>
            </BoxSelect>

            <BoxSelect title="Nova Transação">
              <img src={iconTransac.src} alt="Transação" />
              <span>Nova Transação</span>
            </BoxSelect>

            <BoxSelect title="Configurações">
              <img src={iconConfig.src} alt="Configurações" />
              <span>Configurações</span>
            </BoxSelect>
          </Menu>

          <BoxLogout>
            <SelectModel />
            <Button>Sair</Button>
          </BoxLogout>
        </SidebarInformations>
      </Container>
    </div>
  );
};

export default Dashboard;
