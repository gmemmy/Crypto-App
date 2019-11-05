import React, { Fragment } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import {widthPercentageToDP as wp,
  heightPercentageToDP as hp} from 'react-native-responsive-screen';
import cards from '../../../screens/Transactions/constants';

// Icons
import { AntDesign } from '@expo/vector-icons';

const TopHalf = () => {
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
          alignItems: 'center',
          marginLeft: wp(7),
          marginBottom: hp(0.5)
          }}>
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: '#39ABBE'
          }}>
            +3.678%
          </Text>
          <AntDesign
            name='arrowup'
            size={20}
            color='#39ABBE'
            style={{ marginBottom: hp(0.5) }}
          />
        </View>
      </View>
      <View style={[styles.coinValue, { marginTop: hp(0.5) }]}>
        <Text style={[styles.currencyValue, { fontSize: 15 }]}>
          18,659.55
        </Text>
        <Text style={[styles.currency, { fontSize: 15 }]}>
          USD
        </Text>
      </View>
      <View style={styles.currencyCards}>
          {cards.map(card => (
            <TouchableOpacity key={cards.indexOf(card)} style={{ paddingHorizontal: wp(1.3) }}>
              <View style={styles.cardView}>
                  <View style={styles.cardTop}>
                    <Image source={card.logo} style={styles.logo} />
                    <Text style={styles.percentageText}>{card.percentage}</Text>
                  </View>
                  <View style={styles.cardBottom}>
                    <View style={styles.cardBottom1}>
                      <Text style={[styles.currencyValue, { fontSize: 10 }]}>
                        {card.value}
                      </Text>
                      <Text style={[styles.currency, {fontSize: 10 }]}>
                        {card.type}
                      </Text>
                    </View>
                    <View style={styles.cardBottom1}>
                      <Text style={[styles.currencyValue, { fontSize: 10, color: '#ACABF0' }]}>
                        {card.equivalent}
                      </Text>
                      <Text style={[styles.currency, {fontSize: 10 }]}>
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
