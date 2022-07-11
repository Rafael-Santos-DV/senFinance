import Router from 'next/router';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import Axios from '../lib/api/axios';

type TypeTransactions = {
  _id: string;
  name: string;
  title: string;
  price: number;
  category: 'pix' | 'ted' | 'especie';
  type: 'input' | 'output';
  adminId: string;
  lastUpdate: string;
  dateCreated: string;
};

type TypeUser = {
  email: string;
  name: string;
  password: string;
  avatar: string;
  id: string;
};

type TypeDataContext = {
  transactions: TypeTransactions[] | undefined;
  getUser: TypeUser | undefined;
  setFilter: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DataContextProvider = createContext({} as TypeDataContext);

type DataType = {
  children: ReactNode;
};

export const DataProvider: React.FC<DataType> = ({ children }) => {
  const [data, setData] = useState<TypeTransactions[]>();
  const [transactions, setTransactions] = useState<TypeTransactions[]>();
  const [getUser, setUser] = useState<TypeUser>();

  const [getRefresh, setRefresh] = useState<boolean>(false);

  const [filter, setFilter] = useState<Record<string, string>>({
    category: 'all',
    type: 'all',
  });

  useEffect(() => {
    let newData = null;

    if (filter.category === 'all' && filter.type === 'all') {
      setTransactions(data);
      return;
    }

    newData = data?.filter((value) => {
      return (
        (value.category === filter.category && value.type === filter.type) ||
        (value.category === filter.category && filter.type === 'all')
      );
    });

    if (newData) {
      setTransactions(newData);
    }

    let lastFilter = newData as [];

    if (!lastFilter?.length) {
      const filted = data?.filter((value) => {
        return filter.category === 'all' && value.type === filter.type;
      });

      setTransactions(filted);
    }
  }, [filter, data]);

  useEffect(() => {
    if (localStorage.getItem('t-register-platform')) {
      (async () => {
        try {
          const { data } = await Axios({
            baseURL: 'api/transaction?token=hash',
            method: 'GET',
            headers: {
              authorization: `Bearer ${localStorage.getItem(
                't-register-platform'
              )}`,
            },
          });

          setData(data as TypeTransactions[]);
          Router.push('/');
        } catch (err) {
          console.log(err);
        }
      })();

      (async () => {
        try {
          const { data } = await Axios({
            baseURL: 'api/register?token=hash',
            method: 'GET',
            headers: {
              authorization: `Bearer ${localStorage.getItem(
                't-register-platform'
              )}`,
            },
          });

          setUser(data as TypeUser);
        } catch (err) {
          alert(err);
        }
      })();
    }
  }, [getRefresh]);

  return (
    <DataContextProvider.Provider
      value={{ transactions, getUser, setFilter, setRefresh }}
    >
      {children}
    </DataContextProvider.Provider>
  );
};
