import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

// Components
import Header from '../../components/Purchase/TopHalf/Header';
import ExchangeRate from '../../components/Purchase/TopHalf/ExchangeRate';
import PaymentCard from '../../components/Purchase/BottomHalf';

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
        <PaymentCard />
      </View>
    </View>
  )
}

export default Purchase;
