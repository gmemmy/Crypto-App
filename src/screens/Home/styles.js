import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp,
  heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperHalf: {
    flex: 0.4,
    backgroundColor: '#4E4DCF',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: wp(35)
  },
  lowerHalf: {
    flex: 0.5,
    backgroundColor: '#ffff',
    justifyContent: 'center',
  },
  // button: {
  //   width: 200
  // }
});

export default styles;
