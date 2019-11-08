import React, { Fragment } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

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
        <TouchableOpacity style={
          !props.onHistoryScreen ? (
            styles.highlight
          ) : (
            styles.unhighlighted
          )}
        >
          <Text style={styles.navbarText}>Purchase</Text>
        </TouchableOpacity>
        <TouchableOpacity style={
          props.onHistoryScreen ? (
            styles.highlight
          ) : (
            styles.unhighlighted
          )
        }>
          <Text style={styles.navbarText}>
            History
          </Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  )
}

export default Header;
