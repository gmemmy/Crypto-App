import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';
import AppContainer from './src/index';

export default function App() {
  return (
    <Fragment>
      {/* <StatusBar hidden /> */}
      <AppContainer />
    </Fragment>
  );
}

