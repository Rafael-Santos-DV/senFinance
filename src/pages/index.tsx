import type { NextPage } from 'next';
import Head from 'next/head';
import {
  BoxLogout,
  BoxSelect,
  Container,
  ContainerGraphic,
  ContainerLogo,
  ContainerTransactions,
  Content,
  MainContent,
  Menu,
  OneRow,
  SidebarInformations,
} from '../styles/pages/dashboard';

// images
import logo from '../assets/logo-white.svg';
import iconDashboard from '../assets/icon-dash.svg';
import iconTransac from '../assets/icon-transac.svg';
import iconConfig from '../assets/icon-config.svg';
import iconFilter from '../assets/icon-filter.svg';

import Button from '../components/Button/button';
import { SelectModel } from '../components/SelectModel/SelectModel';
import { Perfil } from '../components/Perfil/Perfil';
import { Transactions } from '../components/Transactions/Transactions';

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

        <Content>
          <div>
            <Perfil
              name="Rafael"
              avatar="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhMQBxIQEBQVERkYFxYRER0ZFxUdGRIaFxYYGhcYHCggGRsnGxcTIjEiJSkrLi4uGx8zODMvNy0tLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAwQCB//EADYQAQABAgMEBwUHBQAAAAAAAAABAgMEBREhMUFhElFxkaGxwRMiMnLRFCMzgeHw8TRCUmLC/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APrYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxVVTRTrVMREcZReJzimmdMNGvOd35QCVFZu43E3fjrnsidI8GiZmd4LaKpRduW5+7qqjslIYTNrlFWmJ96OuI2x9QTY1WcRZvx91VE+fc2gAAAAAAAAAAAAAAAAAAAANd+9RYtTVcnSIbFezTFfaL+lPw07I59cg8Y3G3MXXt2U8I+vXLlAAAAAGYmYnWEzluZe0mKMRv4T18p5oUBbhHZTjZv0dC78URsnrj6pEAAAAAAAAAAAAAAAAAAHLmV72GDqmN87I/P9yraYz6v3aKecz6esocAAAAAAAAHuzdqs3Yqo3xK0264uW4qp3TGqprBk9fTwMa8JmPX1B3AAAAAAAAAAAAAAAAAAhc+/Gp+X1RaXz6n4J7Y8v1RAAAAAAAAACdyONMHPzz5Qglly617LBUxPVr37QdIAAAAAAAAAAAAAAAAAOHOIonBT0+Exp2/xqr6ezq3VXhNaf7Z1nu0QIAAAAAAAACyYDFU4q17sTGmzwVtYMoseywkTO+rb9AdwAAAAAAAAAAAAAAAAAPNdEV0TFW6Y0Va7bm1dmmrhMwtaKzbA1Vz7SzGs/3R6ghgAAAAAAbLFmu/dim3vkHvA2YxGKppq3a7eyNqzRERGxy4DA0YSnrqnfPpDrAAAAAAAAAAAAAAAAAAAABXMyw32bEzpunbH0cixZpY9vhJ0307Y9fBXQAAAAE1kdiKbU1zvmdI7I/XyQqy5dT0cDR2a9+0HSAAAAAAAAAAAAAAAAAAAAABvVO5HRuTEcJnzWi/dizZmqrhH8KtM6ztBgAAABZcvq6WBo0/x07titJnI78Tbmid8bY7J3+PmCVAAAAAAAAAAAAAAAAAAAAGnEYqzh4+9mI5ce5DY3MrmIjo2/dp8Z7Qe82xsXquha+GJ2z1z9EaAAAAADZYu1WLsVUb4/ejWAtOGv0Ym10rf5x1cm1VsPiLmGua2p08p7U5g8xtYnZPu1dU8eyQdoAAAAAAAAAAAAMVTFNOtWyOYMtOIxVnDx97MRy49yMxuazV7uF2R/lx/LqRczNU61be0ExdzqmPwqJn5p08IcV7MsVd49GP9dnjvcYDMzMztYAAAAAAAAAAAHdhczv2Nlfvxz396Vw+Y4a/unoz1VbPHcrgC3CsWMXfsfhVTHLfHdKSw2cU1bMRHR5xu7gSo80V01060TExPGHoAAAAAAGKqopp1q2RCv5jjqsVVpRsojx5y6M5xfSq9nb3R8XOepFAAAAAAAAAAAAAAAAAAAAA6MHi7mFr1o2xxjhP6rFYvUX7UVW90+HJVXXl2LnC3ve+Gd/1BYxiNsbGQAAGjGX/ALPhqquPDtnc3onPrnu00xzn0j1BETMzOssAAAAAAAAAAAAAAAAAAAAAAACeya/N3DdGrfT5Tu9Ugr+UXvZYyIndVs+n75rAAAAg89/qqfk/6kARoAAAAAAAAAAAAAAAAAAAAAAANuE/qqPnjzWkAAAf/9k="
            />
          </div>
          <MainContent>
            <ContainerTransactions>
              <OneRow>
                <h1>Transações</h1>

                <div>
                  <img src={iconFilter.src} alt="Filter" />
                  <span>Filtros</span>
                </div>
              </OneRow>

              <Transactions />
            </ContainerTransactions>

            <ContainerGraphic></ContainerGraphic>
          </MainContent>
        </Content>
      </Container>
    </div>
  );
};

export default Dashboard;
