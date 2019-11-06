import { StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#F8F9FD',
    borderRadius: widthPercentageToDP(2)
  },
  touchableHighlight: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.1,
    height: Dimensions.get('window').width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  portion1: {
    marginLeft: widthPercentageToDP(3),
  },
  portion2: {
    marginLeft: widthPercentageToDP(6),
    alignItems: 'flex-end'
  },
  coinValue: {
    flexDirection: 'row',
  },
  equivalentValue: {
    flexDirection: 'row'
  },
  coin: {
    fontSize: 14
  },
  valueMargin: {
    marginLeft: widthPercentageToDP(1)
  },
  dollarEquivalent: {
    color: '#3C3D41',
    fontSize: 12
  }
})

export default styles;
