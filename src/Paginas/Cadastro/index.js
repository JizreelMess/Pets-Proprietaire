import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
} from 'react-native';

import firebase from '../../Services/firebaseConnection';
import { useNavigation } from '@react-navigation/native';


export default function Cadastro(){
  const[nome, setNome ]= useState('');
  const[sobrenome, setSobrenome ]= useState('');
  const[dataDeNascimento, setDataDeNascimento ]= useState('');
  const[telefone, setTelefone ]= useState('');
  const[email, setEmail ]= useState('');
  const[password, setPassword ]= useState('');

  async function cadastrar(){


      await firebase.auth().createUserWithEmailAndPassword(email,password)
      .then((value)=>{ 
        firebase.database().ref('usuarios').child(value.user.uid).set({
         nome: nome,
         sobrenomne: sobrenome,
         dataDeNascimento: dataDeNascimento,
         telefone:telefone,
         
        })
        alert('Usuario Cadastrado');
        setSobrenome('');
        setNome('');
        setDataDeNascimento('');
        setTelefone('');
        setEmail('');
        setPassword('');
        })
      .catch((error)=>{
       alert('Error');

      })
 
      
    
   
    
  }

    const navigation =useNavigation();

 return(
  <SafeAreaView style={styles.container}>
  <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
        <View style={styles.topo}>
      <Text style={styles.loginLabel}>Nome</Text>
      <View style = {styles.textinput}>
      <TextInput 
        autoCorrect = {false} 
        placeholder = "Digite seu nome" 
        placeholderTextColor = "grey"
        backgroundColor = "white" 
        style = {styles.textInput}
        clearButtonMode = "always"
        onChangeText={(texto) => setNome(texto) }
        value={nome}
       />
      </View>
       
      <Text style={styles.loginLabel}>Sobrenome</Text>
      <View style = {styles.textinput}>
      <TextInput 
        autoCorrect = {false} 
        placeholder = "Digite seu sobrenome" 
        placeholderTextColor = "grey"
        backgroundColor = "white" 
        style = {styles.textInput}
        clearButtonMode = "always"
        onChangeText={(texto) => setSobrenome(texto) }
      value={sobrenome}
       />
      </View>

       
      <Text style={styles.loginLabel}>Data de Nascimento</Text>
      <View style = {styles.textinput2}>
      <TextInput 
        autoCorrect = {false} 
        placeholder = " D / M / A" 
        placeholderTextColor = "grey"
        backgroundColor = "white"
        style = {styles.textInput}
        clearButtonMode = "always"
        onChangeText={(texto) => setDataDeNascimento(texto) }
      value={dataDeNascimento}
       />
      </View>

      <Text style={styles.loginLabel}>Telefone</Text>
      <View style = {styles.textinput3}>
      <TextInput 
        autoCorrect = {false} 
        placeholder = " (DDD)_____ - ____" 
        placeholderTextColor = "grey"
        backgroundColor = "white"
        style = {styles.textInput}
        clearButtonMode = "always"
        onChangeText={(texto) => setTelefone(texto) }
      value={telefone}
       />
      </View>

      <Text style={styles.loginLabel}>Email</Text>
      <View style = {styles.textinput}>
      <TextInput 
        autoCorrect = {false} 
        placeholder = "Digite seu email" 
        placeholderTextColor = "grey"
        backgroundColor = "white"
        style = {styles.textInput}
        clearButtonMode = "always"
        onChangeText={(texto) => setEmail(texto) }
      value={email}
       />
      </View>

      <Text style={styles.loginLabel}>Senha</Text>
      <View style = {styles.textinput}>
      <TextInput 
        autoCorrect = {false} 
        placeholder = "Digite sua senha" 
        placeholderTextColor = "grey"
        backgroundColor = "white"
        secureTextEntry={true} 
        style = {styles.textInput}
        clearButtonMode = "always"
        onChangeText={(texto) => setPassword(texto) }
      value={password}
       />
      </View>
      
      <View style={styles.botao}>
        <Button
        color='blue'
            title="Salvar"
            accessibilityLabel="Learn more about this purple button"
            onPress={cadastrar}
        />
        </View>
      </View>
  </View>
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
  
  textInput: {
    backgroundColor:'white',
    borderColor:'black',
    borderWidth: 1,
    color:'black',
    fontSize: 15,
    height: 40,
    width: 250,
    marginHorizontal:20,
    paddingHorizontal:10,
    alignSelf: 'center'
},
titulo: {
  fontSize:25,
  textAlign: 'center',
  marginBottom: 15,
  fontWeight: 'bold',
  marginTop:10
},
topo: {
  flex:1
},
botao: {
  justifyContent: 'center',
  textAlign: 'center',
  margin: 15,
  backgroundColor: '#0000ff',
  borderWidth: 3,
},
botaoEditar: {
  backgroundColor:'#0000ff',
  width:120,
  alignSelf:"right",
  marginTop:20,
  marginLeft:190,
},
botao1: {
  alignItems:"center",
  marginRight:20,
},
  botao2: {
  alignItems:"center",
  marginRight:20,
},
  botao3: {
  alignItems:"center"
},
loginLabel: {
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop:20,
  marginBottom:8,
},
scrollView: {
  marginHorizontal: 20,
},

})