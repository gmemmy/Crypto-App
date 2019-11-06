import React, { Fragment, Component } from 'react';
import { AppState } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import AppContainer from './src';
import FlashMessage from "react-native-flash-message";

class App extends Component {
  registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      );
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      let token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  };
  componentDidMount() {
    this.registerForPushNotificationsAsync();
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  _handleNotification = notification => {
    this.setState({ notification: notification });
  };
  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }
  sendPushNotification = async () => {
    const message = {
      to: Notifications.getExpoPushTokenAsync(),
      sound: 'default',
      title: 'Crypto App',
      body: 'Hey there! Crypto App',
      date: new Date(Date.now())
    };
    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  };
  handleAppStateChange = (appState) => {
    if (appState === 'background') {
      setTimeout(this.sendPushNotification(), 300000)
    }
  }
  render() {
    return (
      <Fragment>
        <AppContainer />
        <FlashMessage position='bottom' />
      </Fragment>
    );
  }
}
export default App;
