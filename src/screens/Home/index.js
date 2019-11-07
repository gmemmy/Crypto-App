import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import * as Google from 'expo-google-app-auth'

import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { showMessage } from "react-native-flash-message";

// Icons
import { AntDesign } from '@expo/vector-icons';

class Home extends Component {
  state = {
    authenticated: false,
  }
  signIn = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: '849518871329-11ulfip2qub21lstqlb8bvdd5c1a6240.apps.googleusercontent.com',
        androidStandaloneAppClientId: '849518871329-rokcjgoj44geajepr4qg5l4ng2asdisp.apps.googleusercontent.com',
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
          message: 'Unable to signin. Please try again.',
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
            <Text style={styles.buttonText}>Signin with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Home;



