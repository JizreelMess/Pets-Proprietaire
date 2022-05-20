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

export default function Duvidas(){
    const navigation = useNavigation();


 return(
<SafeAreaView style={styles.container}>
  <ScrollView style={styles.scrollView}>
  <View style={styles.topo}>
      <Text style={styles.titulo}>Dúvidas</Text>

      <Image style={styles.tinyLogo} source = {require('../Imagens/pesquisa.png')}/>

      <View style={styles.textos}>
      <Pressable onPress={() => navigation.navigate('DuvidasDois')}>
      <Text style={styles.tituloDuvidas}>A chinchila pode tomar banho ?</Text>
      </Pressable>
      <Text style={styles.texto}>O banho úmido é vetado. “A chinchila apresenta tantos folículos pilosos...</Text>

      <Text style={styles.tituloDuvidas}>Quais os alimentos que nunca devem se dar a um cão?</Text>
      <Text style={styles.texto}>Alguns alimentos proibidos para se dar ao cão é o chocolate, café, uva... </Text>

      <Text style={styles.tituloDuvidas}>Como fazer um cão não puxar briga com outros cães na rua?</Text>
      <Text style={styles.texto}>Através de treino e condicionamento. O cão deve andar na rua obedecendo...</Text>

      <Text style={styles.tituloDuvidas}>Em que época do ano é melhor aplicar o antipulgas nos pets?</Text>
      <Text style={styles.texto}>Os produtos antipulgas devem ser aplicados durante o ano inteiro...</Text>
      </View>

      <View style={styles.botao}>
      <Button
      title = 'Perguntar'
      color = 'blue'
      onPress={() => navigation.navigate('TireSuaDuvida')}
      />
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
      tituloDuvidas: {
        fontWeight:"bold",
        marginHorizontal:15,
        marginTop:20,
      },
      texto: {
        marginLeft:15,
        color:'grey',
        marginHorizontal:15,
      },
      textos: {
        width:350,
      },
      botao: {
        width:100,
        marginTop:30,
        marginLeft:230,
        backgroundColor:'#0000ff',
      },
      tinyLogo: {
        width:220,
        height:40,
        alignSelf: 'center',
        marginBottom:20,
      },
})