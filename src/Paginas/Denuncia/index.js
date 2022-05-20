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

export default function Denuncia(){
    const navigation = useNavigation();


 return(
<SafeAreaView style={styles.container}>
  <ScrollView style={styles.scrollView}>
  <View style={styles.topo}>
      <Text style={styles.titulo}>Denúncia</Text>

      <Text style={styles.paragraph}>Disque Denúncia Animal</Text>
      <Text style={styles.regiao}>(São Paulo e Grande São Paulo)</Text>
      <Text style={styles.contato}>0800 600 6428</Text>


      <Text style={styles.paragraph}>Web Denúncia</Text>
      <Text style={styles.contato}
      onPress={() => { 
      Linking.openURL('http://www.webdenuncia.org.br/'); 
    }}>http://www.webdenuncia.org.br/</Text>

      <Text style={styles.paragraph}>Delegacia Eletrônica de Proteção Animal</Text>
      <Text style={styles.contato}
      onPress={() => { 
      Linking.openURL('http://www.ssp.sp.gov.br/depa'); 
    }}>http://www.ssp.sp.gov.br/depa</Text>

      <Text style={styles.paragraph}>Polícia Ambiental</Text>
      <Text style={styles.contato}
      onPress={() => { 
      Linking.openURL('http://denuncia.sigam.sp.gov.br/'); 
    }}>http://denuncia.sigam.sp.gov.br/</Text>

      <Text style={styles.paragraph}>Por e-mail:</Text>
      <Text style={styles.contato}>ambientaldenuncias@policiamilitar.sp.gov.br</Text>
      
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
        marginTop:10
      },
      paragraph: {
        fontSize: 16,
        marginHorizontal: 17,
        fontWeight: "bold"
      },
      regiao: {
        marginHorizontal: 17,
        color: 'gray'
      },
      topo: {
        flex:1
      },
      contato: {
        color: 'blue',
        marginHorizontal:17,
        marginBottom:20
      },
})