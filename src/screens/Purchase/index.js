import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

// Components
import Header from '../../components/Purchase/Header';
import ExchangeRate from '../../components/Purchase/ExchangeRate';

const Purchase = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <View style={styles.header}>
          <Header pressed={navigation} />
        </View>
        <View style={styles.exchangeRate}>
          <ExchangeRate />
        </View>
      </View>
      <View style={styles.bottomHalf}>

      </View>
    </View>
  )
}

export default Purchase;
