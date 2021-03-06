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
      {history.map((item, index) => (
        <Card containerStyle={styles.card} key={index}>
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
                      'arrow-down' : item.color === '#F76869' ? 'exclamation' : 'pause')
                }
                size={20}
                color='white'
               />
            </TouchableHighlight>
            <View style={styles.portion1}>
              <Text style={styles.status}>
                {item.status}
              </Text>
              <Text style={styles.date}>
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
      <View style={{ height: heightPercentageToDP(3) }} />
    </ScrollView>
  )
}

export default LowerHalf;
