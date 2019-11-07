import React, { Fragment, Component } from 'react';
// import { AppState } from 'react-native';
// import { Notifications } from 'expo';
// import * as Permissions from 'expo-permissions';
// import Constants from 'expo-constants';
import AppContainer from './src';
import FlashMessage from "react-native-flash-message";

class App extends Component {
  // registerForPushNotificationsAsync = async () => {
  //   if (Constants.isDevice) {
  //     const { status: existingStatus } = await Permissions.getAsync(
  //       Permissions.NOTIFICATIONS
  //     );
  //     let finalStatus = existingStatus;
  //     if (existingStatus !== 'granted') {
  //       const { status } = await Permissions.askAsync(
  //         Permissions.NOTIFICATIONS
  //       );
  //       finalStatus = status;
  //     }
  //     if (finalStatus !== 'granted') {
  //       alert('Failed to get push token for push notification!');
  //       return;
  //     }
  //   } else {
  //     alert('Must use physical device for Push Notifications');
  //   }
  // };
  // componentDidMount() {
  //   this.registerForPushNotificationsAsync();
  //   AppState.addEventListener('change', this.handleAppStateChange);
  // }

  // _handleNotification = notification => {
  //   this.setState({ notification: notification });
  // };
  // componentWillUnmount() {
  //   AppState.removeEventListener('change', this.handleAppStateChange);
  // }
  // sendPushNotification = async () => {
  //   const message = {
  //     to: this.getDeviceToken(),
  //     sound: 'default',
  //     title: 'Crypto App',
  //     body: 'Hey there! Crypto App is still running.',
  //     date: new Date(Date.now())
  //   };
  //   await fetch('https://exp.host/--/api/v2/push/send', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Accept-encoding': 'gzip, deflate',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(message),
  //   });
  // };
  // getDeviceToken = async () => {
  //   let token = await Notifications.getExpoPushTokenAsync();
  //   return token;
  // }
  // handleAppStateChange = (appState) => {
  //   if (appState == 'background') {
  //     return setInterval(this.sendPushNotification(), 3000)
  //   }
  // }
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
