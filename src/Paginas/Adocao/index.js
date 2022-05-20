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

export default function Adocao(){
    const navigation = useNavigation();


 return(
<SafeAreaView style={styles.container}>
  <ScrollView style={styles.scrollView}>
  <View style={styles.conteudo}>


      <View style={styles.animais}>
      <Image style={styles.tinyLogo} source = {require('../Imagens/cachorro1.jpg')}/>
      <Text style={styles.nome}>Adote o Romero</Text>
      <Text style={styles.infoPet}>Macho</Text>
      <Text style={styles.infoPet}>Sem raça definida</Text>
      <Text style={styles.infoPet}>5 anos</Text>
      </View>

      <View style={styles.animais}>
      <Pressable onPress={() => navigation.navigate('AdocaoDois')}>
      <Image style={styles.tinyLogo} source = {require('../Imagens/cachorroFemea.jpg')}/>
      </Pressable>
      <Text style={styles.nome}>Adote a Tóia</Text>
      <Text style={styles.infoPet}>Fêmea</Text>
      <Text style={styles.infoPet}>Sem raça definida</Text>
      <Text style={styles.infoPet}>8 anos</Text>
      </View>

      <View style={styles.animais}>
      <Image style={styles.tinyLogo} source = {require('../Imagens/gato1.jpg')}/>
      <Text style={styles.nome}>Adote o Eliseu</Text>
      <Text style={styles.infoPet}>Macho</Text>
      <Text style={styles.infoPet}>Sem raça definida</Text>
      <Text style={styles.infoPet}>2 anos</Text>
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
    topo: {
      flex:1
    },
    filtro: {
      flexDirection:"column",
      backgroundColor:'#7feba4',
      height:550,
      width:150,
      borderRadius:10,
      borderWidth:3,
    },
    conteudo: {
      marginLeft:25
    },
    telaInteira: {
      flexDirection:"row"
    },
    titulo: {
      fontSize:35,
      textAlign: 'center',
      marginBottom: 50,
      fontWeight: 'bold',
      marginTop:25
    },
    subtitulo: {
      fontWeight:'bold',
      fontSize:16,
      alignSelf:'center',
      
    },
    lista: {
      flexDirection:'column',
      alignSelf:"center",
      marginTop:8
    },
    select: {
      fontSize:16,
      marginBottom:40,
      width:130,
      height:70,
      borderRadius:8,
    },
    animais: {
      alignItems:"center",
      marginBottom:20,
    },
    nome: {
      fontWeight:"bold",
      fontSize:16,
    },
    infoPet: {
      color:'grey'
    },
    tinyLogo: {
      width:150,
      height:150,
      alignSelf: 'center',
      marginBottom:20,
      borderRadius:5,
    },
    scrollView: {
      marginHorizontal: 20,
    },
})