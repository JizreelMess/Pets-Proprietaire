import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

import firebase from '../../Services/firebaseConnection';
import { useNavigation } from '@react-navigation/native';

export default function EsqueceuASenha(){
    const navigation = useNavigation();


 return(
<SafeAreaView style={styles.container}>
  <ScrollView style={styles.scrollView}>
  <Text style={styles.titulo}>Esqueci a senha</Text>

<Text style={styles.loginLabel}>Digite seu email</Text>

<TextInput 
  autoCorrect = {false} 
  placeholder = "Digite seu email" 
  placeholderTextColor = "grey" 
  style = {styles.textInput}
  clearButtonMode = "always"
  onChangeText={(value) => setEmail(value)}
 />

<View style={styles.button}>
  <Button
      title="Enviar"
      color="blue"
      accessibilityLabel="Learn more about this purple button"
      onPress={() => navigation.navigate('NovaSenha')}
  />
</View>

<Text style={styles.paragraph}>Após clicar em enviar, um e-mail será enviado para você com as devidas orientações de como alterar a sua senha.</Text>
      </ScrollView>
      </SafeAreaView>

 )


}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#7FFFD4',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    titulo: {
        fontSize:35,
        textAlign: 'center',
        marginBottom: 110,
        fontWeight: 'bold'
      },
      paragraph: {
        margin: 24,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 80,
        backgroundColor: '#eb4034',
        padding: 8,
        borderColor: 'black',
        borderWidth: 2
      },
      loginLabel: {
        marginTop: 10,
        marginLeft: 5,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      button:{
            color:'white',
          fontSize: 15,
            width: 280,
            marginTop: 30,
          marginBottom: 80,
          marginLeft:60,
          textAlign: 'center',
          backgroundColor: '#0000ff',
          borderWidth: 1,
      },
      textInput: {
            backgroundColor:'white',
          borderColor:'black',
          borderWidth: 1,
            color:'black',
          fontSize: 15,
            height: 40,
            width: 280,
            marginTop: 10,
            paddingHorizontal:10,
            alignSelf: 'center',
      }
})