import React, { Fragment, Component } from 'react';
import { Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import styles from './styles';
import { Card, Button, Input } from 'react-native-elements';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'; 
import { cardPaymentItems, footerText } from '../../../screens/Purchase/constants';
import { showMessage } from "react-native-flash-message";

// Icons
import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';

class PaymentCard extends Component {
  state = {
    value: '',
    BTC: '2500',
    LTE: '490',
    ETH: '1200',
    result: '0.00'
  }

  onChange = (value) => this.setState({value})

  validate = () => {
    if(this.state.value > 100000) {
      return false
    }
    return true;
  }

  calculate = () => {
    if (this.validate()) {
      return this.setState({
        result: eval(this.state.value * 2500)
      })
    } else {
      return showMessage({
        message: 'Your transaction limit is $100,000',
        type: 'Info',
        backgroundColor: 'red'
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
                    {cardPaymentItems.indexOf(item) === 1 ? (
                      <Input 
                        placeholder='0.00'
                        blurOnSubmit={true}
                        onChangeText={this.onChange}
                        containerStyle={styles.input}
                        inputContainerStyle={{ height: 25 }}
                      />
                    ) : (
                      <Text style={styles.rowTitle}>
                        {cardPaymentItems.indexOf(item) === 2 ? (
                          this.state.result
                        ) : item.title}
                      </Text>
                    )}
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
                  onPress={this.calculate}
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
          onPress={() => this.pressed()}
        />
      </Fragment>
    )
  }
}

export default PaymentCard;
