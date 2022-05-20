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

export default function Informacao(){
    const navigation = useNavigation();
 return(
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>


<Text style={styles.titulo}>Informações</Text>
      <Text style={styles.subtitulo}>Blog Pet</Text>
      <View style={styles.icone1}>
        <Image style={styles.tinyLogo} source = {require('../Imagens/vacina-para-caes.jpg')}/>
        <View style={styles.textoImg}>
        <Text style={styles.paragraph}>Quais vacinas o seu cão deve tomar ?</Text>
        <Pressable onPress={() => navigation.navigate('Noticia')}>
        <Text style={styles.paragraph2}>Saiba mais</Text>
        </Pressable>
        </View>
      </View>

      <View style={styles.icone2}>
        <Image style={styles.tinyLogo} source = {require('../Imagens/peixes.jpg')}/>
        <View style={styles.textoImg}>
        <Text style={styles.paragraph}>Quais peixes podem viver juntos ?</Text>
        <Text style={styles.paragraph1}>Saiba mais</Text>
        </View>
      </View>

      <View style={styles.icone3}>
        <Image style={styles.tinyLogo} source = {require('../Imagens/passaro.jpg')}/>
        <View style={styles.textoImg}>
        <Text style={styles.paragraph}>Qual passarinho que canta ?</Text>
        <Text style={styles.paragraph3}>Saiba mais</Text>
        </View>
      </View>

      <View style={styles.icone4}>
        <Image style={styles.tinyLogo} source = {require('../Imagens/gato.png')}/>
        <View style={styles.textoImg}>
        <Text style={styles.paragraph}>Dia do gato: confira mitos e verdades</Text>
        <Text style={styles.paragraph4}>Saiba mais</Text>
        </View>
      </View>

</ScrollView>
</SafeAreaView>
 )}

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
        marginTop:10
      },
      subtitulo: {
        fontWeight:"bold",
        fontSize:20,
        marginBottom:50,
        textAlign:'center',
      },
      textoImg: {
        flexDirection:"column",
        marginLeft:8,
      },
    
      paragraph: {
        fontSize: 16,
      },
      paragraph2: {
        color: 'blue',
        textDecorationLine: 'underline',
      },
      paragraph1: {
        color: 'blue',
        textDecorationLine: 'underline',
        marginBottom:20,
      },
      paragraph3: {
        color: 'blue',
        textDecorationLine: 'underline',
        marginBottom:45,
      },
      paragraph4: {
        color: 'blue',
        textDecorationLine: 'underline',
        marginBottom:70,
      },
      tinyLogo: {
        width:120,
        height: 80,
      },
      icone1: {
        flex: 2,
        alignItems: 'center',
        width:250,
      },
      icone2: {
        flex: 3,
        alignItems:'center',
        marginTop: 50,
      },
      icone3: {
        flex: 4,
        alignItems: 'center',
        marginTop: 30,
      },
      icone4: {
        flex: 5,
        alignItems: 'center',
        marginTop: 15,
        width:250,
      },
})