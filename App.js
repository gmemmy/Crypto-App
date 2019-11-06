import React, { Fragment } from 'react';
import AppContainer from './src';
import FlashMessage from "react-native-flash-message";

export default function App() {
  return (
    <Fragment>
      <AppContainer />
      <FlashMessage position='bottom' />
    </Fragment>
  );
}

