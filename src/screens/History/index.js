import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './styles';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import history from '../../screens/History/constants';

// Components
import Header from '../../components/Purchase/TopHalf/Header';
import LowerHalf from '../../components/Transactions/LowerHalf'

const History = ({ navigation }) => {
  return (
    <ScrollView alwaysBounceVertical='true' style={styles.container}>
      <View style={styles.topHalf}>
        <View style={styles.header}>
          <Header onHistoryScreen={true} pressed={navigation} />
        </View>
      </View>
      <View style={{ 
        height: heightPercentageToDP(3), backgroundColor: '#4D4ACD'
        }}
      />
      <View style={styles.bottomHalf}>
        <Text style={styles.title}>History</Text>
        <LowerHalf history={history} />
      </View>
      <View style={{height: heightPercentageToDP(3), backgroundColor: '#F2F5FF'}} />
    </ScrollView>
  )
}

export default History;
