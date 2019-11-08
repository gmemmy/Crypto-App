import { StyleSheet, Dimensions } from 'react-native';
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
    paddingHorizontal: 1,
    paddingVertical: 0,
    marginTop: heightPercentageToDP(3)
  },
  dropDownIcon: {
    marginLeft: 'auto',
    marginRight: heightPercentageToDP(3.5)
  },
  tip: {
    color: '#BABABA',
    fontSize: heightPercentageToDP(1.7)
  },
  infoColumn: {
    alignItems: 'baseline',
    marginBottom: heightPercentageToDP(1),
    marginLeft: widthPercentageToDP(2)
  },
  rowTitle: {
    color: '#414143',
    fontSize: heightPercentageToDP(2.5),
    marginTop: heightPercentageToDP(1)
  },
  currencyDropdown: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: widthPercentageToDP(26),
    height: heightPercentageToDP(6),
    borderRadius: widthPercentageToDP(50 / 2),
    marginRight: widthPercentageToDP(3)
  },
  currency: {
    fontSize: heightPercentageToDP(3),
    color: '#4D4ACD'
  },
  dropDown: {
    marginLeft: widthPercentageToDP(4)
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: widthPercentageToDP(4),
    alignItems: 'center',
    marginTop: heightPercentageToDP(3)
  },
  footerText: {
    fontSize: heightPercentageToDP(1.3),
    color: '#A4A5AC',
    marginLeft: widthPercentageToDP(2)
  },
  touchableHighlight: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.1,
    height: Dimensions.get('window').width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A0A0F9'
  },
  buttonContainer: {
    width: widthPercentageToDP(90),
    marginLeft: widthPercentageToDP(4),
    marginTop: heightPercentageToDP(2)
  },
  button: {
    backgroundColor: '#3B3B95',
    borderRadius: widthPercentageToDP(10),
  },
  iconContainer: {
    marginLeft: widthPercentageToDP(5),
  },
  input: {
    width: widthPercentageToDP(30),
    marginRight: 'auto'
  }
});

export default styles;