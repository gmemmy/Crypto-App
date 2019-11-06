import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './styles';
import { heightPercentageToDP } from 'react-native-responsive-screen';

// Components
import Header from '../../components/Purchase/TopHalf/Header';
import ExchangeRate from '../../components/Purchase/TopHalf/ExchangeRate';
import PaymentCard from '../../components/Purchase/BottomHalf';

const Purchase = ({ navigation }) => {
  return (
    <ScrollView alwaysBounceVertical='true' style={styles.container}>
      <View style={styles.topHalf}>
        <View style={styles.header}>
          <Header pressed={navigation} />
        </View>
        <View style={styles.exchangeRate}>
          <ExchangeRate />
        </View>
      </View>
      <View style={{ 
        height: heightPercentageToDP(3), backgroundColor: '#4D4ACD'
        }}
      />
      <View style={styles.bottomHalf}>
        <PaymentCard />
      </View>
      <View style={{height: heightPercentageToDP(3), backgroundColor: '#F2F5FF'}} />
    </ScrollView>
  )
}

export default Purchase;
