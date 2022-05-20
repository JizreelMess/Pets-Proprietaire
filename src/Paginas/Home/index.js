import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Home(){
    const navigation =useNavigation();

 return(
    <View style={styles.container}>
          <Image style={styles.tinyLogo}
        source={require('../Imagens/LogoDegradeVerde.png')}></Image>
        <View style={styles.button}>
    <Button 
      title="Login"
      color="blue"
      onPress={()=> navigation.navigate('Login')}
      
    />
    </View>
    <View style={styles.button}>
    <Button 
      title="Cadastrar"
      color="blue"
      onPress={()=> navigation.navigate('Cadastro')}
      
    />
    </View>
  </View>

 )
}

const styles = StyleSheet.create({
container:{
    backgroundColor: '#7FFFD4',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
},
button:{
    flex: 0,
    textAlign: 'center',
    margin: 15,
    paddingVertical: 1,
    paddingHorizontal: 22,
    elevation: 1,
    borderWidth: 1,
    backgroundColor: '#0000ff',
    width:150,
    alignSelf:'center',
  },
  tinyLogo: {
    width:280,
    height: 280,
    alignSelf: 'center',
    margin: 15,
  },

})