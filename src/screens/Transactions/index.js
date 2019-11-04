import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Transactions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperHalf}>
        <Text>Transactions</Text>
      </View>
      <View style={styles.lowerHalf}>

      </View>
    </View>
  )
}

export default Transactions
