import React from 'react';
import PropTypes from 'prop-types';

import { AppRouter } from '../../routes/AppRouter';
import { Layout } from '../../components/Layout';
import Header from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Main } from '../../components/Main';

export const AppConnect = (props) => {
  const { isLogged, changeStatus } = props;

  return (
    <Layout>
      <Header isLogged={isLogged} changeStatus={changeStatus} />
      <Main>
        <AppRouter isLogged={isLogged} />
      </Main>
      <Footer />
    </Layout>
  );
};

AppConnect.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  changeStatus: PropTypes.func.isRequired,
};
