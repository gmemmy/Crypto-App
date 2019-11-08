import React, { Fragment } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { exchangeItems } from '../../../../screens/Purchase/constants';

const ExchangeRate = () => {
  return (
    <Fragment>
      <Text style={[styles.text, styles.exchangeRate]}
      >
        Exchange Rate
      </Text>
      <View style={styles.coinValue}>
        {exchangeItems.map(item => (
          <Text key={exchangeItems.indexOf(item)} style={
            [styles.text, { color: item.color }]}
          >
            {item.value}
          </Text>
        ))}
      </View>
    </Fragment>
  )
}

export default ExchangeRate;
