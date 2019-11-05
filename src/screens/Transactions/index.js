import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { heightPercentageToDP } from 'react-native-responsive-screen';

// Components
import TopHalf from '../../components/Transactions/TopHalf/index'
import LowerHalf from '../../components/Transactions/LowerHalf/index';

const Transactions = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperHalf}>
        <TopHalf pressed={navigation} />
      </View>
      <View style={{height: heightPercentageToDP(3), backgroundColor: '#4D4ACD'}} />
      <View style={styles.lowerHalf}>
        <LowerHalf />
      </View>
    </View>
  )
}

export default Transactions
