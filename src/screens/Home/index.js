import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { Button } from 'react-native-elements';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperHalf}>
        <Text>Crypto App</Text>
      </View>
      <View style={styles.lowerHalf}>
        <Button
          onPress={() => navigation.navigate('Transactions')} 
          title='Login with Google'
          type= 'outline'
          raised={true}
          containerStyle={styles.button}
        />
      </View>
    </View>
  )
}

export default Home;



