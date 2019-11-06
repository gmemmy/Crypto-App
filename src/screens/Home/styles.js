import { StyleSheet } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

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
    width: widthPercentageToDP(80),
  },
  title: {
    color: '#ffff',
    textAlign: 'center',
    fontSize: 40
  }
});

export default styles;
