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
  RadioButton,
} from 'react-native';

import firebase from '../../Services/firebaseConnection';
import { useNavigation } from '@react-navigation/native';

export default function Rastreio(){
    const navigation = useNavigation();
  

 return(
<SafeAreaView style={styles.container}>
  <ScrollView style={styles.scrollView}>
  <View style={styles.topo}>
      <Text style={styles.titulo}>Rastreio</Text>

      <Text style={styles.subtitulo}>Qual animal deseja rastrear ?</Text>

    <View style={styles.botao}>
      <View style={styles.botao1}>

      <Text>Mel</Text>
      </View>

      <View style={styles.botao2}>
 
      <Text>Brutus</Text>
      </View>

      <View style={styles.botao3}>

      <Text>Romeu</Text>
      </View>
    </View>

    <View style={styles.botaoRastreio}>
    <Button
      title="Rastrear"
      color="blue"
    />
    </View>

    <View>
    <Image style={styles.tinyLogo} source = {require('../Imagens/mapaBrutus.jpg')}/>
    </View>

    <View>
    <Image style={styles.tinyLogo2} source = {require('../Imagens/cachorroEncontrado.jpeg')}/>
        <Text style={styles.atencao}>ATENÇÃO</Text>
        <Text style={styles.paragraph}>Seu animal acaba de ser rastreado e um e-mail com a localização dele foi enviado.</Text>
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
    titulo: {
        fontSize:35,
        textAlign: 'center',
        marginBottom: 15,
        fontWeight: 'bold',
      },
        subtitulo: {
        fontWeight: "bold",
        fontSize:18,
        alignSelf:"center",
        marginBottom:30
      },
      paragraph: {
        fontSize: 16,
        marginHorizontal: 20,
        width:250,
        alignSelf:'center',
      },
      topo: {
        flex:1
      },
      botaoRastreio: {
        width:250,
        alignSelf:"center",
        marginTop: 30,
        backgroundColor:'#0000ff'
      },
      botao: {
        alignSelf: "center"
      },
      botao1: {
        flexDirection: "row",
        alignItems:"center"
      },
      botao2: {
        flexDirection: "row",
        alignItems:"center"
      },
      botao3: {
        flexDirection: "row",
        alignItems:"center"
      },
      tinyLogo: {
        width:250,
        height: 150,
        alignSelf: 'center',
        marginTop:30,
      },
      tinyLogo2: {
        width:200,
        height: 130,
        alignSelf: 'center',
        marginTop:30,
      },
      atencao: {
        color:"red",
        fontWeight:"bold",
        fontSize:18,
        alignSelf: "center",
        marginTop:8,
        marginBottom:8,
      },
})