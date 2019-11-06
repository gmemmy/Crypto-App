import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import * as Google from 'expo-google-app-auth'

import { showMessage } from "react-native-flash-message";

// Icons
import { AntDesign } from '@expo/vector-icons';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Home extends Component {
  state = {
    authenticated: false,
  }
  signIn = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: '849518871329-qos53ngs2e5kcb7l631lf4ufk835iimn.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
        this.setState({
          authenticated: true,
        })
        if (this.state.authenticated) (
          this.props.navigation.navigate('Transactions')
        )
      } else {
        showMessage({
          message: 'Please check your internet connection and try again.',
          type: 'Info',
          backgroundColor: "red",
        })
      }
    } catch (e) {
      console.log('error');
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upperHalf}>
          <Text style={styles.title}>
            Crypto App
          </Text>
        </View>
        <View style={styles.lowerHalf}>
          <TouchableOpacity style={styles.button}
            onPress={() => this.signIn()}>
            <AntDesign
              name='google'
              color='#3B3B95'
              size={heightPercentageToDP(5)}
              style={{ marginRight: widthPercentageToDP(3) }}
            />
            <Text style={styles.buttonText}>SignIn with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Home;



