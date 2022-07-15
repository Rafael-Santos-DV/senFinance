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

// icons
import logo from '../assets/logo-white.svg';
import iconDashboard from '../assets/icon-dash.svg';
import iconTransac from '../assets/icon-transac.svg';
import iconConfig from '../assets/icon-config.svg';
import iconMenu from '../assets/icon-menu.svg';
import iconRemove from '../assets/icon-remove.svg';
import placeholderImage from '../assets/placeholder.jpg';

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

  const [darkModel, setDarkModel] = useState(false);

  const { getUser, transactions, getModel, setModel } =
    useContext(DataContextProvider);

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

    setDarkModel(getModel);
  }, [getModel]);

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

        <Content className={`${darkModel ? 'color-dark' : ''}`}>
          <div className={darkModel ? 'color-dark' : ''}>
            <ContainerMobile onClick={handleClickActiveMenu}>
              <img src={iconMenu.src} alt="Ativar menu" />
            </ContainerMobile>

            <SelectModel />

            <Perfil
              className={darkModel ? 'color-light' : ''}
              name={getUser?.name ?? 'Empty'}
              avatar={getUser?.avatar ?? placeholderImage.src}
            />
          </div>
          <MainContent className={`${darkModel ? 'color-dark' : ''}`}>
            {getRouter === 'dashboard' && (
              <AllTransactions
                isMobile={false}
                className="children-main"
                filter={filter}
                handleChangeActiveFilter={handleChangeActiveFilter}
              />
            )}

            {getRouter === 'newTransaction' && (
              <NewTransaction
                className={`children-main ${getModel ? 'color-light' : ''}`}
              />
            )}

            {getRouter === 'settings' && (
              <Settings
                className={`children-main ${darkModel ? 'color-light' : ''}`}
                classForm={darkModel}
                clientId={getUser?.id ?? ''}
                email={getUser?.email ?? ''}
                name={getUser?.name ?? ''}
                password={getUser?.password ?? ''}
                avatar={getUser?.avatar ?? ''}
              />
            )}

            <ContainerGraphic>
              <div>
                {amountTransactions.amount ? (
                  <Chart
                    width={'250px'}
                    height={'150px'}
                    chartType="PieChart"
                    data={data}
                    options={options}
                  />
                ) : (
                  <div className="empty-transaction">
                    <span>Média de transações</span>
                    <div>Não há transações</div>
                  </div>
                )}
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
