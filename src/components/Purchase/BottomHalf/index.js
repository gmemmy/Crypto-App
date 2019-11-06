import React, { Fragment } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Card } from 'react-native-elements';
import { heightPercentageToDP } from 'react-native-responsive-screen'; 
import { cardPaymentItems } from '../../../screens/Purchase/constants';

// Icons
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const PaymentCard = () => {
  return (
   <Card containerStyle={styles.card}>
     {cardPaymentItems.map(item => (
        <View key={cardPaymentItems.indexOf(item)}
          style={[styles.row,
            { borderBottomWidth: cardPaymentItems.indexOf(item) === 4 ?
               heightPercentageToDP(0) : (
               heightPercentageToDP(0.1)
            )}
          ]}
          >
          <View style={styles.infoColumn}>
            <Text style={styles.choosePaymentText}>
              {item.tip}
            </Text>
            {cardPaymentItems.indexOf(item) === 0 && (
              <View style={{ flexDirection: 'row', alignItems:'center' }}>
                <FontAwesome
                  name='cc-mastercard'
                  size={20}
                />
                <Text style={styles.rowTitle}>{item.title}</Text>
              </View>
            )}
            {cardPaymentItems.indexOf(item) !== 0 && (
              <Text style={styles.rowTitle}>
                {item.title}
              </Text>
            )}
            {/* {cardPaymentItems.indexOf(item) === 3 && (
              <TouchableOpacity>
              <Ionicons
               name='md-arrow-dropdown'
               size={25}
               color='#524F9A'
              />
            </TouchableOpacity>
            )} */}
          </View>
          {cardPaymentItems.indexOf(item) === 0 && (
            <TouchableOpacity style={styles.dropDownIcon}>
              <Ionicons
               name='md-arrow-dropdown'
               size={25}
               color='#524F9A'
              />
            </TouchableOpacity>
          )}
          {item.currency && (
            <TouchableOpacity style={[
              styles.currencyDropdown, { backgroundColor: item.backgroundColor }]}
            >
              <Text style={styles.currency}>{item.currency}</Text>
              <Ionicons
                name='md-arrow-dropdown'
                size={25}
                color='#524F9A' 
                style={styles.dropDown}
              />
            </TouchableOpacity>
          )}
        </View>
      ))}
   </Card>
  )
}

export default PaymentCard;
