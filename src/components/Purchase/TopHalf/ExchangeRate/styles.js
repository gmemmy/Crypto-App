import { StyleSheet } from 'react-native';
import {widthPercentageToDP,
  heightPercentageToDP} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  coinValue: {
    flexDirection: 'row',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingHorizontal: widthPercentageToDP(1)
  }
})

export default styles;