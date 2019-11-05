import React, { Fragment } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { widthPercentageToDP } from 'react-native-responsive-screen';

// Icons
import { Ionicons } from '@expo/vector-icons';

const Header = (props) => {
  return (
    <Fragment>
      <View style={styles.title}>
        <TouchableOpacity onPress={() => props.pressed.goBack()}>
          <Ionicons
            name='ios-arrow-round-back'
            size={30}
            color='white'
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>BUY</Text>
      </View>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.highlight}>
          <Text style={styles.navbarText}>Purchase</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.navbarText,
            { marginLeft: widthPercentageToDP(15) }]}
          >
            History
          </Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  )
}

export default Header;
