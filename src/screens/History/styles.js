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
  lowerHalf: {
    flex: 2,
    backgroundColor: '#F2F5FF',
  },
  title: {
    marginLeft: widthPercentageToDP(3),
    marginTop: heightPercentageToDP(1),
    color: '#000'
  }
})

export default styles;
