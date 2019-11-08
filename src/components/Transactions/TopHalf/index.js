import React, { Fragment } from 'react';
import { Text, View, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import styles from './styles';
import {widthPercentageToDP,
  heightPercentageToDP} from 'react-native-responsive-screen';
import { cards } from '../../../screens/Transactions/constants';

// Icons
import { AntDesign, Foundation, MaterialCommunityIcons} from '@expo/vector-icons';

const TopHalf = (props) => {
  return (
    <Fragment>
      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign
            name='menuunfold'
            size={20}
            color='white'
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>TRANSACTIONS</Text>
      </View>
      <Text style={styles.balanceText}>Balance</Text>
      <View style={styles.coinValue}>
        <Text style={[styles.currencyValue, {fontSize: 25}]}>
          2.00102000
        </Text>
        <Text style={[styles.currency, {fontSize: 25}]}>
          BTC
        </Text>
        <View style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          marginLeft: 'auto',
          marginBottom: heightPercentageToDP(0.5),
          }}>
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: '#2DD6BB'
          }}>
            +3.678%
          </Text>
          <AntDesign
            name='arrowup'
            size={20}
            color='#2DD6BB'
            style={{ marginBottom: heightPercentageToDP(0.5) }}
          />
        </View>
      </View>
      <View style={[styles.coinValue, { marginTop: heightPercentageToDP(0.5) }]}>
        <Text style={[styles.currencyValue, { fontSize: heightPercentageToDP(2) }]}>
          18,659.55
        </Text>
        <Text style={[styles.currency, { fontSize: heightPercentageToDP(2) }]}>
          USD
        </Text>
      </View>
      <View style={styles.currencyCards}>
        {cards.map(card => (
          <TouchableOpacity onPress={() => props.pressed.navigate('Purchase')}
            key={cards.indexOf(card)} style={{
              paddingHorizontal: widthPercentageToDP(1.0) }}
          >
            <View style={styles.cardView}>
              <View style={styles.cardTop}>
                {card.type === 'BTC' && (
                  <TouchableHighlight style={[styles.touchableHighlight,
                    { backgroundColor: card.backgroundColor }]}>
                    <Foundation
                      name='bitcoin'
                      color='white'
                      size={25}
                    />
                  </TouchableHighlight>
                  )}
                {card.type === 'ETH' && (
                  <TouchableHighlight style={[styles.touchableHighlight,
                    { backgroundColor: card.backgroundColor }]}>
                    <Foundation
                      name='bitcoin'
                      color='white'
                      size={25}
                    />
                  </TouchableHighlight>
                )}
                {card.type === 'LTE' && (
                  <TouchableHighlight style={[styles.touchableHighlight,
                    { backgroundColor: card.backgroundColor }]}>
                    <MaterialCommunityIcons
                      name='litecoin'
                      color='white'
                      size={20}
                    />
                  </TouchableHighlight>
                )}
                <Text style={styles.percentageText}>{card.percentage}</Text>
                </View>
                  <View style={styles.cardBottom}>
                    <View style={styles.cardBottom1}>
                      <Text style={[styles.currencyValue, styles.sizes]}>
                        {card.value}
                      </Text>
                      <Text style={[styles.currency, styles.sizes]}>
                        {card.type}
                      </Text>
                    </View>
                    <View style={styles.cardBottom1}>
                      <Text style={[styles.currencyValue, styles.sizes, { color: '#ACABF0' }]}>
                        {card.equivalent}
                      </Text>
                      <Text style={[styles.currency, styles.sizes]}>
                        {card.equivalentType}
                      </Text>
                    </View>
                  </View>
              </View>
            </TouchableOpacity>
          ))}
      </View>
    </Fragment>
  )
}

export default TopHalf;
