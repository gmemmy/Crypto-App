import React, { Fragment } from 'react';
import { Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import styles from './styles';
import { Card, Button } from 'react-native-elements';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'; 
import { cardPaymentItems, footerText } from '../../../screens/Purchase/constants';
import { showMessage } from "react-native-flash-message";

// Icons
import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';

const PaymentCard = ({ navigation }) => {
  return (
    <Fragment>
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
                <View style={{ flexDirection: 'row'}}>
                  <Text style={styles.rowTitle}>
                    {item.title}
                  </Text>
                  {cardPaymentItems.indexOf(item) === 3 && (
                    <TouchableOpacity style={{ marginLeft: widthPercentageToDP(4) }}>
                      <Ionicons
                        name='md-arrow-dropdown'
                        size={25}
                        color='#524F9A'
                      />
                    </TouchableOpacity>
                  )}
                </View>
              )}
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
            {cardPaymentItems.indexOf(item) === 3 && (
              <FontAwesome
                name='qrcode'
                size={25} 
                style={{
                  marginLeft: widthPercentageToDP(25)
                }}
              />
            )}
          </View>
        ))}
      </Card>
      <View style={styles.footer}>
        <TouchableHighlight style={styles.touchableHighlight}>
          <FontAwesome
            name='info'
            size={20}
            color='white'
          />
        </TouchableHighlight>
        <Text style={styles.footerText}>
          {footerText}
        </Text>
      </View>
      <Button
        raised={true}
        title='CONTINUE'
        iconRight={true}
        icon={
          <AntDesign
            name='arrowright'
            size={20}
            color='white'
          />
        }
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        iconContainerStyle={styles.iconContainer}
        onPress={() => (
          showMessage({
            message: 'Transaction successful.',
            type: 'Info',
            backgroundColor: 'green'
          })
        )}
      />
    </Fragment>
  )
}

export default PaymentCard;
