import { StyleSheet, Dimensions } from 'react-native';
import {widthPercentageToDP as wp,
  heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#F8F9FD',
    borderRadius: wp(2)
  },
  touchableHighlight: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.1,
    height: Dimensions.get('window').width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1FC375',
  },
  portion1: {
    marginLeft: wp(3),
  },
  portion2: {
    marginLeft: wp(8),
    alignItems: 'flex-end'
  },
  coinValue: {
    flexDirection: 'row',
  },
  equivalentValue: {
    flexDirection: 'row'
  },
  coin: {
    color: '#49D693',
    fontSize: 14
  },
  valueMargin: {
    marginLeft: wp(1)
  },
  dollarEquivalent: {
    color: '#3C3D41',
    fontSize: 12
  }
})

export default styles;
