import { NextPage } from 'next';
import Head from 'next/head';
import React, { useContext, useEffect, useState } from 'react';

import {
  BoxLogout,
  BoxSelect,
  Container,
  ContainerAnalitc,
  ContainerGraphic,
  ContainerLogo,
  ContainerMobile,
  Content,
  MainContent,
  Menu,
  SidebarInformations,
} from '../styles/pages/dashboard';

let placeholderImage =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhMQBxIQEBQVERkYFxYRER0ZFxUdGRIaFxYYGhcYHCggGRsnGxcTIjEiJSkrLi4uGx8zODMvNy0tLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAwQCB//EADYQAQABAgMEBwUHBQAAAAAAAAABAgMEBREhMUFhElFxkaGxwRMiMnLRFCMzgeHw8TRCUmLC/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APrYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxVVTRTrVMREcZReJzimmdMNGvOd35QCVFZu43E3fjrnsidI8GiZmd4LaKpRduW5+7qqjslIYTNrlFWmJ96OuI2x9QTY1WcRZvx91VE+fc2gAAAAAAAAAAAAAAAAAAAANd+9RYtTVcnSIbFezTFfaL+lPw07I59cg8Y3G3MXXt2U8I+vXLlAAAAAGYmYnWEzluZe0mKMRv4T18p5oUBbhHZTjZv0dC78URsnrj6pEAAAAAAAAAAAAAAAAAAHLmV72GDqmN87I/P9yraYz6v3aKecz6esocAAAAAAAAHuzdqs3Yqo3xK0264uW4qp3TGqprBk9fTwMa8JmPX1B3AAAAAAAAAAAAAAAAAAhc+/Gp+X1RaXz6n4J7Y8v1RAAAAAAAAACdyONMHPzz5Qglly617LBUxPVr37QdIAAAAAAAAAAAAAAAAAOHOIonBT0+Exp2/xqr6ezq3VXhNaf7Z1nu0QIAAAAAAAACyYDFU4q17sTGmzwVtYMoseywkTO+rb9AdwAAAAAAAAAAAAAAAAAPNdEV0TFW6Y0Va7bm1dmmrhMwtaKzbA1Vz7SzGs/3R6ghgAAAAAAbLFmu/dim3vkHvA2YxGKppq3a7eyNqzRERGxy4DA0YSnrqnfPpDrAAAAAAAAAAAAAAAAAAAABXMyw32bEzpunbH0cixZpY9vhJ0307Y9fBXQAAAAE1kdiKbU1zvmdI7I/XyQqy5dT0cDR2a9+0HSAAAAAAAAAAAAAAAAAAAAABvVO5HRuTEcJnzWi/dizZmqrhH8KtM6ztBgAAABZcvq6WBo0/x07titJnI78Tbmid8bY7J3+PmCVAAAAAAAAAAAAAAAAAAAAGnEYqzh4+9mI5ce5DY3MrmIjo2/dp8Z7Qe82xsXquha+GJ2z1z9EaAAAAADZYu1WLsVUb4/ejWAtOGv0Ym10rf5x1cm1VsPiLmGua2p08p7U5g8xtYnZPu1dU8eyQdoAAAAAAAAAAAAMVTFNOtWyOYMtOIxVnDx97MRy49yMxuazV7uF2R/lx/LqRczNU61be0ExdzqmPwqJn5p08IcV7MsVd49GP9dnjvcYDMzMztYAAAAAAAAAAAHdhczv2Nlfvxz396Vw+Y4a/unoz1VbPHcrgC3CsWMXfsfhVTHLfHdKSw2cU1bMRHR5xu7gSo80V01060TExPGHoAAAAAAGKqopp1q2RCv5jjqsVVpRsojx5y6M5xfSq9nb3R8XOepFAAAAAAAAAAAAAAAAAAAAA6MHi7mFr1o2xxjhP6rFYvUX7UVW90+HJVXXl2LnC3ve+Gd/1BYxiNsbGQAAGjGX/ALPhqquPDtnc3onPrnu00xzn0j1BETMzOssAAAAAAAAAAAAAAAAAAAAAAACeya/N3DdGrfT5Tu9Ugr+UXvZYyIndVs+n75rAAAAg89/qqfk/6kARoAAAAAAAAAAAAAAAAAAAAAAANuE/qqPnjzWkAAAf/9k=';

// icons
import logo from '../assets/logo-white.svg';
import iconDashboard from '../assets/icon-dash.svg';
import iconTransac from '../assets/icon-transac.svg';
import iconConfig from '../assets/icon-config.svg';
import iconMenu from '../assets/icon-menu.svg';
import iconRemove from '../assets/icon-remove.svg';

import Button from '../components/Button/button';
import { SelectModel } from '../components/SelectModel/SelectModel';
import { Perfil } from '../components/Perfil/Perfil';

import { Chart } from 'react-google-charts';
import { AllTransactions } from '../components/AllTransactions/AllTransactions';
import { NewTransaction } from '../components/NewTransaction/NewTransaction';
import { Settings } from '../components/Settings/Settings';
import { DataContextProvider } from '../context/DataProvider';
import Router from 'next/router';

type TypeRouter = 'dashboard' | 'newTransaction' | 'settings';

const Dashboard: React.FC<NextPage> = () => {
  const [filter, setFilter] = useState(false);
  const [getRouter, setRouter] = useState<TypeRouter>('dashboard');

  const [menu, setMenu] = useState(false);

  const { getUser, transactions } = useContext(DataContextProvider);

  const [amountTransactions, setAmountTransactions] = useState({
    amountInput: 0,
    amountOutput: 0,
    amount: 0,
    amountInputPrice: 0,
    amountOutputPrice: 0,
  });

  const [options] = useState({
    title: 'Média de transações',
  });
  const [data, setData] = useState([
    ['Transações', String(transactions?.length)],
    ['Entrada', amountTransactions.amountInput],
    ['Saída', amountTransactions.amountOutput],
  ]);

  useEffect(() => {
    if (!localStorage.getItem('t-register-platform')) {
      Router.push('/login');
    }

    // implementar verificação de token
  }, []);

  useEffect(() => {
    const amountInput =
      transactions?.filter((value) => value.type === 'input').length ?? 0;
    const amountOutput =
      transactions?.filter((value) => value.type === 'output').length ?? 0;

    let amountInputPrice = 0;
    let amountOutputPrice = 0;

    transactions?.forEach((value) => {
      if (value.type === 'input') {
        amountInputPrice += value.price;
      }

      if (value.type === 'output') {
        amountOutputPrice += value.price;
      }
    });

    let amount = amountInputPrice + amountOutputPrice;

    setAmountTransactions({
      amountInput,
      amountOutput,
      amount,
      amountOutputPrice,
      amountInputPrice,
    });

    setData([
      ['Transações', String(transactions?.length)],
      ['Entrada', amountInput],
      ['Saída', amountOutput],
    ]);
  }, [transactions]);

  const handleChangeActiveFilter = () => {
    setFilter((prev) => !prev);
  };

  const handleChangeRouter = (router: TypeRouter) => {
    setRouter(router);

    // remover sidebar mobile
    handleClickActiveMenu();
  };

  const formatMoney = (money: number) => {
    return money.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const handleClickActiveMenu = () => {
    const body = document.querySelector('#body-id-js');

    if (menu) {
      body?.classList.remove('body-hidden');
      setMenu((prev) => !prev);
      return;
    }

    body?.classList.add('body-hidden');
    setMenu((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem('t-register-platform');
    Router.push('/login');
  };

  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard SenFinança" />
      </Head>

      <Container>
        <SidebarInformations className={menu ? 'active-mobile' : 'disabled'}>
          <ContainerMobile
            onClick={handleClickActiveMenu}
            className="mobile-remove"
          >
            <img src={iconRemove.src} alt="Ativar menu" />
          </ContainerMobile>
          <ContainerLogo>
            <img src={logo.src} alt="SenFinança" />
          </ContainerLogo>

          <Menu>
            <BoxSelect
              className={getRouter === 'dashboard' ? 'border' : ''}
              title="Dashboard"
              onClick={() => handleChangeRouter('dashboard')}
            >
              <img src={iconDashboard.src} alt="Dashboard" />
              <span>Dashboard</span>
            </BoxSelect>

            <BoxSelect
              className={getRouter === 'newTransaction' ? 'border' : ''}
              title="Nova Transação"
              onClick={() => handleChangeRouter('newTransaction')}
            >
              <img src={iconTransac.src} alt="Transação" />
              <span>Nova Transação</span>
            </BoxSelect>

            <BoxSelect
              className={getRouter === 'settings' ? 'border' : ''}
              title="Configurações"
              onClick={() => handleChangeRouter('settings')}
            >
              <img src={iconConfig.src} alt="Configurações" />
              <span>Configurações</span>
            </BoxSelect>
          </Menu>

          <BoxLogout>
            <SelectModel />
            <Button onClick={handleLogout}>Sair</Button>
          </BoxLogout>
        </SidebarInformations>

        <Content>
          <div>
            <ContainerMobile onClick={handleClickActiveMenu}>
              <img src={iconMenu.src} alt="Ativar menu" />
            </ContainerMobile>
            <Perfil
              name={getUser?.name ?? 'Empty'}
              avatar={getUser?.avatar ?? placeholderImage}
            />
          </div>
          <MainContent>
            {getRouter === 'dashboard' && (
              <AllTransactions
                isMobile={false}
                className="children-main"
                filter={filter}
                handleChangeActiveFilter={handleChangeActiveFilter}
              />
            )}

            {getRouter === 'newTransaction' && (
              <NewTransaction className="children-main" />
            )}

            {getRouter === 'settings' && (
              <Settings
                className="children-main"
                clientId={getUser?.id ?? ''}
                email={getUser?.email ?? ''}
                name={getUser?.name ?? ''}
                password={getUser?.password ?? ''}
                avatar={getUser?.avatar ?? ''}
              />
            )}

            <ContainerGraphic>
              <div>
                <Chart
                  width={'250px'}
                  height={'150px'}
                  chartType="PieChart"
                  data={data}
                  options={options}
                />
              </div>

              <ContainerAnalitc>
                <div>
                  <strong>Total de entradas: </strong>
                  <span className="inputs">
                    {formatMoney(amountTransactions.amountInputPrice)}
                  </span>
                </div>

                <div>
                  <strong>Total de saídas: </strong>
                  <span className="outputs">
                    {formatMoney(amountTransactions.amountOutputPrice)}
                  </span>
                </div>

                <div>
                  <strong>Q. de transações: </strong>
                  <span className="transactions">
                    {amountTransactions.amountInput +
                      amountTransactions.amountOutput}
                  </span>
                </div>

                <div>
                  <strong>Total: </strong>
                  <span className="amount">
                    {formatMoney(amountTransactions.amount)}
                  </span>
                </div>
              </ContainerAnalitc>
            </ContainerGraphic>
          </MainContent>
        </Content>
      </Container>
    </div>
  );
};

export default Dashboard;
