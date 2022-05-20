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


export default function Menu(){
const navigation =useNavigation();

 return(
  <SafeAreaView style={styles.container}>
  <ScrollView style={styles.scrollView}>

  <View style={styles.tituloImg}>
      <Text style={styles.titulo}>Menu</Text>
      <Pressable onPress={() => navigation.navigate('Meuperfil')}>
      <Image style={styles.imgTitulo} source = {require('../Imagens/perfil.png')}/>
      </Pressable>
      </View>

      <View style={styles.icone1}>
      <Pressable onPress={() => navigation.navigate('Informacao')}>
        <Image style={styles.tinyLogo} source = {require('../Imagens/informacao.png')}/>
      </Pressable>
        <Text>                         </Text>
      <Pressable onPress={() => navigation.navigate('Clinicas')}>
        <Image style={styles.tinyLogo} source = {require('../Imagens/clinica.png')}/>
      </Pressable>
      </View>

      <View style={styles.textoIcones}>
        <Text style={styles.paragraph}>Informações</Text>
        <Text style={styles.paragraph}>Clinicas</Text>
      </View>
    
     
     
      <View style={styles.icone3}>
      <Pressable onPress={() => navigation.navigate('Adocao')}>
        <Image style={styles.tinyLogo} source = {require('../Imagens/adocao.png')}/>
      </Pressable>
        <Text>                           </Text>
        <Pressable onPress={() => navigation.navigate('Consultas')}>
        <Image style={styles.tinyLogo} source = {require('../Imagens/consulta.png')}/>
        </Pressable>
      </View>
      <View style={styles.textoIcones}>
        <Text style={styles.paragraph2}>Adoção</Text>
        <Text style={styles.paragraph2}>Consultas</Text>
      </View>




      <View style={styles.icone5}>
        <Pressable onPress={() => navigation.navigate('Duvidas')}>
        <Image style={styles.tinyLogo} source = {require('../Imagens/duvida.png')}/>
        </Pressable>
        <Text>                           </Text>
        <Pressable onPress={() => navigation.navigate('DadosPessoais')}>
        <Image style={styles.tinyLogo} source = {require('../Imagens/meusDados.png')}/>
        </Pressable>
      </View>
      <View style={styles.textoIcones}>
        <Text style={styles.paragraph3}>Dúvidas</Text>
        <Text style={styles.paragraph3}>Dados Pessoais</Text>
      </View>



      <View style={styles.icone6}>
        <Pressable onPress={() => navigation.navigate('Ongs')}>
        <Image style={styles.tinyLogo} source = {require('../Imagens/ong.png')}/>
        </Pressable>
        <Text>                           </Text>
        <Pressable onPress={() => navigation.navigate('LojasPet')}>
        <Image style={styles.tinyLogo} source = {require('../Imagens/petShop.png')}/>
        </Pressable>
      </View>
      <View style={styles.textoIcones}>
        <Text style={styles.paragraph4}>ONGs</Text>
        <Text style={styles.paragraph4}>Loja Pet</Text>
      </View>


      <View style={styles.icone2}>
        <Pressable onPress={() => navigation.navigate('Denuncia')}>
        <Image style={styles.tinyLogo} source = {require('../Imagens/denuncia.png')}/>
        </Pressable>
        <Text>                           </Text>
        <Pressable onPress={() => navigation.navigate('Rastreio')}>
        <Image style={styles.tinyLogo} source = {require('../Imagens/rastreio.png')}/>
        </Pressable>
      </View>
      <View style={styles.textoIcones}>
        <Text style={styles.paragraph5}>Denúncia</Text>
        <Text style={styles.paragraph5}>Rastreio</Text>
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
  marginBottom: 70,
  fontWeight: 'bold',
  marginTop:10
},
tituloImg: {
  flexDirection:"row",
  marginLeft: 135,
},
imgTitulo: {
  width:40,
  height: 40,
  marginLeft:80,
  marginTop:15
},
paragraph: {
  fontSize: 16,
  marginLeft:55,
  marginHorizontal: 30,
},
paragraph2: {
  fontSize: 16,
  marginLeft:60,
  marginHorizontal: 45,
},
paragraph3: {
  fontSize: 16,
  marginLeft:60,
  marginHorizontal: 18,
  marginBottom:15,
},
paragraph4: {
  fontSize: 16,
  marginLeft:60,
  marginHorizontal: 60,
},
paragraph5: {
  fontSize: 16,
  marginLeft:50,
  marginHorizontal: 55,
  marginBottom:50,
},
tinyLogo: {
  width:50,
  height: 50,
  marginLeft: 25,
},
textoIcones: {
  flexDirection: "row",
  marginTop:20,
},
icone1: {
  flex: 2,
  flexDirection: "row",
  alignItems: 'center',
  marginLeft:40,
},
icone2: {
  flex: 3,
  flexDirection:"row",
  alignItems:'center',
  marginTop: 35,
  marginLeft:30,
},
icone3: {
  flex: 4,
  flexDirection:"row",
  alignItems: 'center',
  marginTop: 15,
  marginLeft:35,
},
icone5: {
  flex: 6,
  flexDirection:'row',
  alignItems:'center',
  marginTop: 10,
  marginLeft:30,
},
icone6: {
  flex:7,
  flexDirection:"row",
  alignItems:"center",
  marginLeft:18,
  marginLeft:30,
},
  

scrollView: {
  marginHorizontal: 20,
},

})