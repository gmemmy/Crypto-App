import { StyleSheet, Dimensions } from 'react-native';
import {widthPercentageToDP as wp,
  heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  header: {
    flex: 0.15,
    flexDirection: 'row',
    marginTop: hp(7),
    alignItems: 'center'
  },
  menuIcon: {
    marginLeft: wp(4),
  },
  headerText: {
    marginLeft: wp(23),
    color: '#ffff',
    fontWeight: 'bold'
  },
  balanceText: {
    marginLeft: wp(4),
    marginTop: hp(5),
    color: '#ACABF0'
  },
  coinValue: {
    flexDirection: 'row',
    marginLeft: wp(4),
    marginTop: hp(2),
    alignItems: 'flex-end'
  },
  touchableHighlight: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.1,
    height: Dimensions.get('window').width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp(1),
    marginTop: hp(1)
  },
  currency: {
    marginLeft: wp(1),
    fontWeight: 'bold',
    color: '#ACABF0'
  },
  currencyValue: {
    color: '#ffff',
    fontWeight: 'bold'
  },
  currencyCards: {
    flexDirection: 'row',
    marginTop: hp(5),
    marginLeft: wp(1.2)
  },
  cardView: {
    height: 120,
    width: 110,
    borderRadius: 25,
    resizeMode: 'contain',
    overflow: 'hidden',
    backgroundColor: '#6065C7'
  },
  cardTop: {
    flexDirection: 'row',
  },
  percentageText: {
    color: '#ffff',
    marginLeft: wp(10),
    marginTop: wp(3)
  },
  cardBottom: {
    marginTop: wp(8),
    marginLeft: wp(2),
  },
  cardBottom1: {
    flexDirection: 'row'
  },
  cardBottom2: {
    flexDirection: 'row'
  },
  sizes: {
    fontSize: 10
  }
});

export default styles;