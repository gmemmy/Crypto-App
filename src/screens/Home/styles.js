import { StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperHalf: {
    flex: 0.6,
    backgroundColor: '#4E4DCF',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: widthPercentageToDP(25)
  },
  lowerHalf: {
    flex: 0.4,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    flexDirection: 'row',
    width: widthPercentageToDP(70),
    height: heightPercentageToDP(7),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    color: '#ffff',
    textAlign: 'center',
    fontSize: 40
  },
  buttonText: {
    fontSize: 15
  }
});

export default styles;
