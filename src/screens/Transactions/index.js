import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

// Components
import TopHalf from '../../components/Transactions/TopHalf/index'
import LowerHalf from '../../components/Transactions/LowerHalf/index';

const Transactions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperHalf}>
        <TopHalf />
      </View>
      <View style={styles.lowerHalf}>
        <LowerHalf />
      </View>
    </View>
  )
}

export default Transactions
