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
  Pressable,
  Image,
} from 'react-native';

import firebase from '../../Services/firebaseConnection';
import { useNavigation } from '@react-navigation/native';


export default function Meuperfil(){
const navigation =useNavigation();

 return(
  <SafeAreaView style={styles.container}>
  <ScrollView style={styles.scrollView}>
      <View><Text></Text></View>
      <View style={styles.icone1}>
      <Image  style={styles.tinyLogo} source={require('../Imagens/PerfilFoto.png')}></Image>
      <Text style={styles.paragraph}>Meus dados</Text>
      </View>

      <View style={styles.icone2}>
        <Image style={styles.tinyLogo} source = {require('../Imagens/MinhasConsultas.png')}/>
        <Pressable onPress={() => navigation.navigate('MinhasConsultas')}>
        <Text style={styles.paragraph2}>Minhas consultas</Text>
        </Pressable>
      </View>


     


      <View style={styles.icone4}>
        <Image style={styles.tinyLogo} source = {require('../Imagens/4-Rastreio.png')}/>
        <Pressable onPress={() => navigation.navigate('Rastreio')}>
        <Text style={styles.paragraph4}>Rastreio</Text>
        </Pressable>
      </View>

      
      
      <View style={styles.icone6}>
        <Image style={styles.tinyLogo} source = {require('../Imagens/6-ExcluirConta.png')}/>
        <Pressable onPress={() => navigation.navigate('ExcluirConta')}>
        <Text style={styles.paragraph6}>Excluir conta</Text>
        </Pressable>
      </View>

       
      <View style={styles.icone5}>
        <Image style={styles.tinyLogo} source = {require('../Imagens/5-EncerrarSessão.png')}/>
        <Pressable onPress={() => navigation.navigate('Home')}>
        <Text style={styles.paragraph5}>Encerrar sessão</Text>
        </Pressable>
      </View>



      <View style={styles.icone3}>
        <Image style={styles.tinyLogo} source = {require('../Imagens/3-Configuração.png')}/>
        <Text style={styles.paragraph3}>Configurações</Text>
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
titulo: {
    fontSize:35,
    textAlign: 'center',
    marginBottom: 60,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 16,
    marginLeft:20,
    marginTop:15,
  },
    paragraph2: {
    fontSize: 16,
    marginLeft:20,
    marginTop:8,
  },
    paragraph3: {
    fontSize: 16,
    marginLeft:20,
    marginBottom:10
  },
    paragraph4: {
    fontSize: 16,
    marginLeft:20,
    marginBottom:30,
  },
    paragraph5: {
    fontSize: 16,
    marginLeft:20,
    marginBottom:40,
  },
    paragraph6: {
    fontSize: 16,
    marginLeft:20,
    marginBottom:50,
  },
  tinyLogo: {
    width:50,
    height: 50,
    marginLeft: 25,
  },
  icone1: {
    flex: 3,
    flexDirection: "row",
    alignItems: 'center',
  },
  icone2: {
    flex: 3,
    flexDirection:"row",
    alignItems:'center',
    marginTop: 50
  },
  icone3: {
    flex: 4,
    flexDirection:"row",
    alignItems: 'center',
    marginTop: 40
  },
  icone4: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40
  },
  icone5: {
    flex: 6,
    flexDirection:'row',
    alignItems:'center',
    marginTop: 30
  },
  icone6: {
    flex:7,
    flexDirection:"row",
    alignItems:"center",
    marginTop: 20,
  },
scrollView: {
  marginHorizontal: 20,
},

})