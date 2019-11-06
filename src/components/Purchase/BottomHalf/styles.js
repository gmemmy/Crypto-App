import { StyleSheet } from 'react-native';
import {widthPercentageToDP,
  heightPercentageToDP} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'red',
  },
  row: {
    flexDirection: 'row',
    borderBottomColor: '#BABABA',
    alignItems: 'center',
    height: heightPercentageToDP(10)
  },
  card: {
    backgroundColor: '#F8F9FD',
    borderRadius: widthPercentageToDP(2),
  },
  dropDownIcon: {
    marginLeft: widthPercentageToDP(19),
    marginBottom: heightPercentageToDP(4)
  },
  choosePaymentText: {
    color: '#BABABA',
    fontSize: heightPercentageToDP(2)
  },
  infoColumn: {
    alignItems: 'center',
    marginBottom: heightPercentageToDP(1),
    backgroundColor: 'red'
  },
  rowTitle: {
    color: '#414143',
    marginLeft: widthPercentageToDP(1),
    fontSize: heightPercentageToDP(3)
  },
  currencyDropdown: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: widthPercentageToDP(26),
    height: heightPercentageToDP(6),
    borderRadius: widthPercentageToDP(50 / 2)
  },
  currency: {
    fontSize: heightPercentageToDP(3),
    color: '#4D4ACD'
  },
  dropDown: {
    marginLeft: widthPercentageToDP(4)
  }
});

export default styles;