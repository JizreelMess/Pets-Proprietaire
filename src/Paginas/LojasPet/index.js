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

export default function LojasPet(){
    const navigation = useNavigation();


 return(
<SafeAreaView style={styles.container}>
  <ScrollView style={styles.scrollView}>

  <View style={styles.topo}>
      <Text style={styles.titulo}>Loja Pet</Text>

      <Image style={styles.barraPesquisa} source = {require('../Imagens/pesquisa.png')}/>

      <View style={styles.filtro}>
  

    
      </View>


      <View style={styles.todosProdutos}>
      <View style={styles.icone1}>
        <Image style={styles.tinyLogo} source = {require('../Imagens/racao1.webp')}/>
        <Text>                         </Text>
        <Image style={styles.tinyLogo} source = {require('../Imagens/racao2.webp')}/>
      </View>
      <View style={styles.textoIcones1}>
      <View style={styles.item1}>
        <Text style={styles.paragraph}>Ração Golden Special</Text>
        <Text style={styles.detalhes}>Sabor frango-15KG</Text>
        <Text style={styles.detalhes}>R$142,90</Text>
      </View>
      <View style={styles.item2}>
        <Text style={styles.textoRacao2}>Ração Premier</Text>
        <Text style={styles.detalhes}>Sabor frango-15KG</Text>
        <Text style={styles.detalhes}>R$237,50</Text>
      </View>
      </View>

      <View style={styles.icone3}>
        <Pressable onPress={() => navigation.navigate('LojaProduto')}>
        <Image style={styles.tinyLogo} source = {require('../Imagens/racao3.webp')}/>
        </Pressable>
        <Text>                           </Text>
        <Image style={styles.tinyLogo} source = {require('../Imagens/bifinho.webp')}/>
      </View>
      <View style={styles.textoIcones}>
      <View style={styles.item3}>
        <Text style={styles.paragraph2}>Ração Royal Canin</Text>
        <Text style={styles.detalhes}>Sabor frango-12KG</Text>
        <Text style={styles.detalhes}>R$343,20</Text>
      </View>
      <View style={styles.item4}>
        <Text style={styles.textoBifinho}>Bifinho Keldog</Text>
        <Text style={styles.detalhes3}>Sabor churrasco-500g</Text>
        <Text style={styles.detalhes3}>R$22,90</Text>
      </View>
      </View>

      <View style={styles.icone5}>
        <Image style={styles.tinyLogo} source = {require('../Imagens/bolinha.webp')}/>
        <Text>                           </Text>
        <Image style={styles.tinyLogo} source = {require('../Imagens/tapete.webp')}/>
      </View>
      <View style={styles.textoIcones}>
      <View style={styles.item5}>
        <Text style={styles.paragraph3}>Bolinha</Text>
        <Text style={styles.detalhes1}>Cores sortidas</Text>
        <Text style={styles.detalhes2}>R$12,99</Text>
      </View>
      <View style={styles.item6}>
        <Text style={styles.textoTapete}>Tapete</Text>
        <Text style={styles.detalhes}>30 unidades</Text>
        <Text style={styles.detalhes}>R$88,90</Text>
      </View>
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
    topo: {
      flex:1
    },
    titulo: {
      fontSize:35,
      textAlign: 'center',
      marginBottom: 35,
      fontWeight: 'bold',
      marginTop:10
    },
    lista: {
      flexDirection:'row',
      alignSelf:"center",
      marginBottom:40,
    },
    listaProduto: {
      marginLeft:8
    },
    select: {
      fontSize:14,
      width:150,
    },
    filtro: {
      flexDirection: "row",
      alignSelf:'center',
    },
    todosProdutos: {
      marginLeft:35,
      marginTop:20,
    },
    textoIcones: {
      flexDirection: "row",
    },
    textoIcones1: {
      flexDirection: "row",
      marginTop:20,
    },
      paragraph: {
      marginLeft:5,
      fontWeight:"bold"
    },
    textoRacao2: {
      marginLeft:20,
      fontWeight:"bold"
    },
    paragraph2: {
      marginLeft:5,
      marginHorizontal: 20,
      fontWeight:"bold"
    },
    paragraph3: {
      marginLeft:30,
      fontWeight:"bold"
    },
    textoBifinho: {
      marginLeft:40,
      fontWeight:"bold"
    },
    textoTapete: {
      fontWeight:"bold"
    },
    icone1: {
      flex: 2,
      flexDirection: "row",
      alignItems: 'center',
      marginLeft:20,
    },
    icone3: {
      flex: 4,
      flexDirection:"row",
      alignItems: 'center',
      marginTop: 40,
      marginHorizontal:20,
    },
    icone5: {
      flex: 6,
      flexDirection:'row',
      alignItems:'center',
      marginTop: 5,
      marginHorizontal:18,
    },
    detalhes: {
      color:'grey'
    },
    detalhes1: {
      color:'grey',
      marginLeft:12,
    },
    detalhes2: {
      color:'grey',
      marginLeft:30,
    },
    detalhes3: {
      color:'grey',
      marginLeft:20,
    },
    item1: {
      flexDirection:"column",
      alignItems:"center",
    },
    item2: {
      flexDirection:"column",
      alignItems:"center",
      marginLeft:20,
    },
    item3: {
      flexDirection:"column",
      alignItems:"center",
    },
      item4: {
      flexDirection:"column",
      alignItems:"center",
    },
      item5: {
      flexDirection:"column",
    },
      item6: {
      flexDirection:"column",
      alignItems:"center",
      marginLeft:95,
    },
      tinyLogo: {
      width:80,
      height:80,
      alignSelf: 'center',
      marginBottom:20,
    },
    barraPesquisa: {
      width:220,
      height:40,
      alignSelf: 'center',
    },
})