import { StyleSheet } from 'react-native';
import {widthPercentageToDP,
  heightPercentageToDP} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#ffff',
    fontWeight: 'bold',
    marginLeft: widthPercentageToDP(35),
  },
  backIcon: {
    marginLeft: widthPercentageToDP(4),
  },
  navBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#3C3DD3',
    marginTop: heightPercentageToDP(1),
    marginLeft: widthPercentageToDP(4),
    borderRadius: heightPercentageToDP(0.9),
    width: widthPercentageToDP(90),
    alignItems: 'center',
  },
  navbarText: {
    color: '#ffff'
  },
  highlight: {
    backgroundColor: '#7176F1',
    borderRadius: heightPercentageToDP(0.9),
    width: widthPercentageToDP(43),
    height: heightPercentageToDP(5),
    marginLeft: widthPercentageToDP(1),
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles;
