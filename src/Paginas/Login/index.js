import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Pressable,
  Button,
  Image,
} from 'react-native';

import firebase from '../../Services/firebaseConnection';
import { useNavigation } from '@react-navigation/native';

export default function Login(){
    const navigation = useNavigation();
  const[email, setEmail ]= useState('');
  const[password, setPassword ]= useState('');

  async function logar(){
 await firebase.auth().signInWithEmailAndPassword(email,password)
 .then((value)=> {
    navigation.navigate('Menu')
  
 })
 setEmail('');
 setPassword('');


  }

 return(
<View style={styles.container}>

<View>
        <Image style={styles.tinyLogo} source = {require('../Imagens/LogoDegradeVerde.png')}/>
      </View>


<Text style={styles.loginLabel}>Email</Text>
<TextInput 
  autoCorrect = {false} 
  placeholder = "Digite seu email" 
  placeholderTextColor = "grey" 
  style = {styles.textInput}
  clearButtonMode = "always"
  onChangeText={(value) => setEmail(value)}
  value={email}
 />


<Text style={styles.loginLabel}>Senha</Text>     
      <TextInput 
        autoCorrect = {false} 
        placeholder = "Digite seu senha" 
        placeholderTextColor = "grey"
        backgroundColor = "black"
        secureTextEntry={true} 
        style = {styles.textInput}
        clearButtonMode = "always"
        onChangeText={(value) => setPassword(value)}
        value={password}
       />
<View>
<Pressable  onPress={() => navigation.navigate('EsqueceuASenha')}>
       <Text style={styles.underline}     
       >Esqueceu a senha</Text>
       </Pressable>
</View>

       <View style={styles.button}>
        <Button
          color="blue"
            onPress={logar}
            title="Login"
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
    textInput: {
	    backgroundColor:'white',
      borderColor:'black',
      borderWidth: 1,
	    color:'black',
      fontSize: 15,
	    height: 40,
	    width: 250,
	    marginTop: 5,
	    marginHorizontal:20,
	    paddingHorizontal:10,
	    alignSelf: 'center',
      marginBottom:10,
  },
  button:{
    justifyContent: 'center',
     textAlign: 'center',
     borderWidth: 1,
       height: 40,
       width: 250,
       marginTop: 20,
       alignSelf: 'center'
   },
   loginLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'black',
  },
  underline: {
    textDecorationLine: 'underline',
    color: 'blue',
    alignSelf:"center",
    marginTop: 5,
  },
  tinyLogo: {
    width:280,
    height: 280,
    alignSelf: 'center',
    margin: 15,
  },
})