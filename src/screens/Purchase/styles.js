import { StyleSheet } from 'react-native';
import {widthPercentageToDP,
  heightPercentageToDP} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topHalf: {
    flex: 0.4,
    backgroundColor: '#4D4ACD'
  }, 
  header: {
    flex: 0.5,
    marginTop: heightPercentageToDP(5),
  },
  exchangeRate: {
    flex: 0.5,
    marginTop: heightPercentageToDP(2),
    marginLeft: widthPercentageToDP(4),
  }
})

export default styles;
