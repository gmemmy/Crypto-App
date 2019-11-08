import { StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  coinValue: {
    flexDirection: 'row',
  },
  text: {
    fontWeight: 'bold',
    fontSize: heightPercentageToDP(3.5),
    paddingHorizontal: widthPercentageToDP(1)
  },
  exchangeRate: {
    fontSize: heightPercentageToDP(2),
    color: '#ACABF0', 
    fontWeight: 'normal',
    marginBottom: heightPercentageToDP(1)
  }
})

export default styles;