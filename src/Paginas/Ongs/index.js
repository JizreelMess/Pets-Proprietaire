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

export default function Ongs(){
    const navigation = useNavigation();


 return(
<SafeAreaView style={styles.container}>
  <ScrollView style={styles.scrollView}>
  <View style={styles.topo}>
      <Text style={styles.titulo}>ONGs</Text>

      <Text style={styles.subtitulo}>Quer fazer uma doação ou adotar um PET ?</Text>
      <Text style={styles.subtitulo2}>Escolha uma das ONGs para entrar em contato ou adote através da nossa aba de adoção que também te levará diretamente para a ONG cuidadora do animal.
      </Text>

      <View style={styles.linhas}>
      <View style={styles.texto}>
      <Text style={styles.contato} 
      onPress={() => { 
      Linking.openURL('https://www.ongviralataedez.com/'); 
    }}>Vira-lata é dez</Text>
      <Text style={styles.paragraph}>Fundada em 2003, a ONG Vira-Lata é Dez busca transformar animais de rua em animais de estimação</Text>
      </View>
      <Image style={styles.tinyLogo} source = {require('../Imagens/logoONG1.webp')}/>
      </View>
      

      <View style={styles.linhas}>
      <View style={styles.texto}>
      <Text style={styles.contato}
      onPress={() => { 
      Linking.openURL('http://www.caosemdono.com.br/'); 
    }}>Cão sem  dono</Text>
      <Text style={styles.paragraph}>O Cão Sem Dono é uma ONG, sem fins lucrativos, e que nasceu de um grande sonho do seu atual presidente: tirar...</Text>
      </View>
      <Image style={styles.tinyLogo} source = {require('../Imagens/logoONG2.png')}/>
      </View>

      <View style={styles.linhas}>
      <View style={styles.texto}>
      <Text style={styles.contato}
      onPress={() => { 
      Linking.openURL('https://ilm.org.br/'); 
    }}>Instituo Luisa Mell</Text>
      <Text style={styles.paragraph}>Fundado em fevereiro de 2015, o Instituto Luisa Mell atua principalmente no resgate de animais feridos...</Text>
      </View>
      <Image style={styles.tinyLogo} source = {require('../Imagens/logoONG3.png')}/>
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
        marginBottom: 50,
        fontWeight: 'bold',
      },
      subtitulo: {
        fontSize:16,
        fontWeight:"bold",
        alignSelf:"center",
      },
      subtitulo2: {
        alignSelf:'center',
        width:330,
      },
      linhas: {
        flexDirection: "row",
        marginTop:40,
        marginHorizontal:20,
        alignItems:'center',
      },
      paragraph: {
        fontSize: 12,
        marginHorizontal: 17,
        fontWeight: "bold"
      },
      texto: {
        alignItems:'center',
        width:250,
      },
      topo: {
        flex:1
      },
      contato: {
        color: 'blue',
        textDecorationLine: 'underline',
        marginTop: 30,
      },
      tinyLogo: {
        width: 80,
        height: 80,
        marginTop: 5,
      },
})