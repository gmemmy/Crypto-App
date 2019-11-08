import { StyleSheet } from 'react-native';
import {widthPercentageToDP,
  heightPercentageToDP} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topHalf: {
    backgroundColor: '#4D4ACD'
  }, 
  header: {
    marginTop: heightPercentageToDP(5),
  },
  exchangeRate: {
    marginTop: heightPercentageToDP(2),
    marginLeft: widthPercentageToDP(4),
  },
  bottomHalf: {
    flex: 0.5,
    backgroundColor: '#F2F5FF'
  }
})

export default styles;
