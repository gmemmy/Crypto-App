import { StyleSheet, Dimensions } from 'react-native';
import {widthPercentageToDP,
  heightPercentageToDP} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginTop: heightPercentageToDP(7),
    alignItems: 'center',
  },
  menuIcon: {
    marginLeft: widthPercentageToDP(4),
  },
  headerText: {
    marginLeft: widthPercentageToDP(25),
    color: '#ffff',
    fontWeight: 'bold'
  },
  balanceText: {
    marginLeft: widthPercentageToDP(4),
    marginTop: heightPercentageToDP(2),
    color: '#ACABF0'
  },
  coinValue: {
    flexDirection: 'row',
    marginLeft: widthPercentageToDP(4),
  },
  touchableHighlight: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.1,
    height: Dimensions.get('window').width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: widthPercentageToDP(1),
    marginTop: heightPercentageToDP(1)
  },
  currency: {
    marginLeft: widthPercentageToDP(1),
    fontWeight: 'bold',
    color: '#ACABF0'
  },
  currencyValue: {
    color: '#ffff',
    fontWeight: 'bold'
  },
  currencyCards: {
    flexDirection: 'row',
    marginTop: heightPercentageToDP(2),
    marginLeft: widthPercentageToDP(1.2)
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
    marginLeft: widthPercentageToDP(10),
    marginTop: widthPercentageToDP(3)
  },
  cardBottom: {
    marginTop: widthPercentageToDP(8),
    marginLeft: widthPercentageToDP(2),
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