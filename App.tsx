import React from 'react';
import { StatusBar } from 'react-native';

//pages
import { Home } from './src/pages/Home/Home';

export const App = () => {
  return (
    <>
      <StatusBar backgroundColor='#121015' />
      <Home />
    </>
  );
};