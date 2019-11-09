import React, { Fragment, Component } from 'react';
import { AppState } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import AppContainer from './src';
import FlashMessage from "react-native-flash-message";

class App extends Component {
  state = {
    pushToken: '',
    notification: {},
    appState: AppState.currentState,
  }
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
      this.setState({pushToken: token});
    } else {
      alert('Must use physical device for Push Notifications');
    }
  };
  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
    this.registerForPushNotificationsAsync();
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }
  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }
  _handleNotification = notification => {
    this.setState({ notification: notification });
  };
  sendPushNotification = async () => {
    const message = {
      to: this.state.pushToken,
      sound: 'default',
      title: 'Crypto App',
      body: 'Hey there! Crypto App is still running.',
    };
    const response = await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
    const data = response._bodyInit;
    console.log(`Status & Response ID-> ${JSON.stringify(data)}`);
  };
  
  _handleAppStateChange = (appState) => {
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
