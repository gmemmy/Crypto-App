import React, { Fragment, Component } from 'react';
import { Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import styles from './styles';
import { Card, Button, Input } from 'react-native-elements';
import ModalDropdown from 'react-native-modal-dropdown';

import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'; 

import { cardPaymentItems, footerText } from '../../../screens/Purchase/constants';
import { showMessage } from "react-native-flash-message";

// Icons
import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';


class PaymentCard extends Component {
  state = {
    value: '',
    BTC: 'BTC',
    LTE: 'LTE',
    ETH: 'ETH',
    result: '0.00'
  }

  onChange = (value) => this.setState({value})

  validate = () => {
    if (this.state.value === '') {
      return showMessage({
        message: 'Please fill in input to make a transaction',
        type: 'Info',
        backgroundColor: 'red'
        })
    }
    if(this.state.value > 100000) {
      return showMessage({
        message: 'Your transaction limit is $100,000',
        type: 'Info',
        backgroundColor: 'red'
        })
    }
    return true;
  }
  calculate = (selected) => {
    if (this.validate()) {
      return this.setState({
        result: this.state.BTC === selected ? 
        ( eval(this.state.value / 2500)) : (this.state.ETH === selected ? (
         eval(this.state.value / 490)
       ) : eval(this.state.value / 1200))
      })
    } 
  }
  pressed = () => {
    showMessage({
      message: 'Transaction successful.',
      type: 'Info',
      backgroundColor: 'green'
    })
    this.props.pressed.navigate('History')
  }
  render() {
    const { BTC, ETH, LTE } = this.state
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
                <Text style={styles.tip}>
                  {item.tip}
                </Text>
                {cardPaymentItems.indexOf(item) === 0 && (
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <FontAwesome
                      name='cc-mastercard'
                      size={20}
                      style={{ marginTop: heightPercentageToDP(1.3) }}
                    />
                    <Text style={[styles.rowTitle, { marginLeft: widthPercentageToDP(2) }]}>
                      {item.title}
                    </Text>
                  </View>
                )}
                {cardPaymentItems.indexOf(item) !== 0 && (
                  <View style={{ flexDirection: 'row'}}>
                    {cardPaymentItems.indexOf(item) === 1 ? (
                      <Input 
                        placeholder='0.00'
                        blurOnSubmit={true}
                        onChangeText={this.onChange}
                        containerStyle={styles.input}
                        inputContainerStyle={{ height: heightPercentageToDP(5) }}
                      />
                    ) : (
                      <Text style={styles.rowTitle}>
                        {cardPaymentItems.indexOf(item) === 2 ? (
                          this.state.result
                        ) : item.title}
                      </Text>
                    )}
                    {cardPaymentItems.indexOf(item) === 3 && (
                      <TouchableOpacity style={{ marginLeft: widthPercentageToDP(3),
                        marginTop: heightPercentageToDP(1) }}
                      >
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
                <ModalDropdown onSelect={(index, value) => {
                  this.calculate(index)
                  cardPaymentItems.indexOf(item) === 3 ?
                   item.currency = value : item.currency = value
                }} options={[
                  BTC, LTE, ETH, 'USD'
                ]} style={[
                  styles.currencyDropdown, { backgroundColor: item.backgroundColor }]}>
                  <Text style={styles.currency}>{item.currency}</Text>
                  <Ionicons
                    name='md-arrow-dropdown'
                    size={25}
                    color='#524F9A' 
                    style={styles.dropDown}
                  />
                </ModalDropdown>
              )}
              {cardPaymentItems.indexOf(item) === 3 && (
                <FontAwesome
                  name='qrcode'
                  size={25} 
                  style={{
                    marginLeft: widthPercentageToDP(33)
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
          onPress={() => this.pressed()}
        />
      </Fragment>
    )
  }
}

export default PaymentCard;
