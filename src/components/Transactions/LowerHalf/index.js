import React, { Fragment } from 'react';
import { Text, View, TouchableHighlight, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import styles from './styles';
import { heightPercentageToDP } from 'react-native-responsive-screen';

// Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LowerHalf = (props) => {
  const { history } = props;
  return (
    <ScrollView alwaysBounceVertical='true'>
      {history.map(item => (
        <Card containerStyle={styles.card} key={history.indexOf(item)}>
          <View style={styles.container}>
            <TouchableHighlight style={[styles.touchableHighlight,
               { backgroundColor: item.color 
            }]}>
              <MaterialCommunityIcons
                name={
                  item.type === 'feed' ?
                   (item.color === '#11CC71' ?
                    'arrow-collapse-down' : 'arrow-collapse-up') :
                    (item.color === '#11CC71' ? 
                      'arrow-down' : item.color === '#F76869' ? 'arrow-up' : 'exclamation')
                }
                size={20}
                color='white'
               />
            </TouchableHighlight>
            <View style={styles.portion1}>
              <Text style={{ 
                fontWeight: 'bold', 
                color: '#4A4C50',
                fontSize: 14
              }}>
                {item.status}
              </Text>
              <Text style={{ color: '#96989C', fontSize: 12 }}>
                {item.date}
              </Text>
            </View>
            <View style={styles.portion2}>
              <View style={styles.coinValue}>
                <Text style={[styles.coin, { color: item.color }]}>
                  {item.value}
                </Text>
                <Text style={[styles.coin, styles.valueMargin, { color: item.color }]}>
                  {item.currency}
                </Text>
              </View>
              <View style={styles.equivalentValue}>
                <Text style={styles.dollarEquivalent}>
                  {item.equivalent}
                </Text>
                <Text style={[styles.valueMargin, styles.dollarEquivalent]}>
                  {item.equivalentType}
                </Text>
              </View>
            </View> 
          </View>
        </Card>
      ))}
      <View style={{height: heightPercentageToDP(3), backgroundColor: '#F2F5FF'}} />
    </ScrollView>
  )
}

export default LowerHalf;
