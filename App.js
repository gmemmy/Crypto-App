import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';
import AppContainer from './src';

export default function App() {
  return (
    <Fragment>
      {/* <StatusBar hidden /> */}
      <AppContainer />
    </Fragment>
  );
}

