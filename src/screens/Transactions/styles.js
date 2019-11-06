import { StyleSheet } from 'react-native';
import {widthPercentageToDP,
  heightPercentageToDP} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperHalf: {
    backgroundColor: '#4D4ACD',
  },
  lowerHalf: {
    flex: 2,
    backgroundColor: '#F2F5FF'
  }
});

export default styles;