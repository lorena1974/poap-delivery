import React from 'react';
import { Global } from '@emotion/core';

// Lib
import { mainStyles } from 'lib/theme';

// UI
import MainLayout from 'ui/layouts/MainLayout';

const Home = () => {
  return (
    <MainLayout>
      <h1> Hello Gatsby!</h1>
      <Global styles={mainStyles} />
    </MainLayout>
  );
};

export default Home;