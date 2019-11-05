import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

// Components
import TopHalf from '../../components/Transactions/TopHalf/index'

const Transactions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperHalf}>
        <TopHalf />
      </View>
      <View style={styles.lowerHalf}>

      </View>
    </View>
  )
}

export default Transactions
