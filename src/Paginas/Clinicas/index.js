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

export default function Clinicas(){
    const navigation = useNavigation();
    const [estados] = useState(['Estado','Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espirito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'])
    const [estadoSelecionado, setEstadoSelecionado] = useState([])
  
    const [cidades] = useState(['Cidade','São Paulo','Campinas','Osasco','Sorocaba','Santos','Guarulhos','Rio de Janeiro','Petrópolis','Nova Iguaçu','Curitiba','Maringá','Cascavel','Londrina','Foz do Iguaçu'])
    const [cidadeSelecionada, setCidadeSelecionada] = useState([])


 return(
 <SafeAreaView style={styles.container}>
  <ScrollView style={styles.scrollView}>
    
    <View style={styles.topo}>

    <Text style={styles.titulo}>Clinicas</Text>

    <View style={styles.lista}>


    <View style={styles.listaCidade}>
 
    </View>
    </View>

  <View style={styles.mapas}>
  <View style={styles.textClinicas}>
  <Text style={styles.tituloClinicas}>Clínica Veterinária Santo Amaro</Text>
  <Text style={styles.end}>Av. Eng Eusébio Stevaux,823 </Text>
  <Text style={styles.end}>- Santo Amaro</Text>
  </View>
  <Image style={styles.tinyLogo} source = {require('../Imagens/clinciaSantoAmaro.png')}/>
  </View>

  <View style={styles.mapas}>
  <View style={styles.textClinicas}>
  <Text style={styles.tituloClinicas}>Veterinária Morumbi</Text>
  <Text style={styles.end}>Av. Albert Einstein, 126</Text>
  <Text style={styles.end}>- Morumbi</Text>
  </View>
  <Image style={styles.tinyLogo2} source = {require('../Imagens/clinicaMorumbi.png')}/>
  </View>

  <View style={styles.mapas}>
  <View style={styles.textClinicas}>
  <Text style={styles.tituloClinicas}>Veterinária Animales</Text>
  <Text style={styles.end}>Rua Bento de Andrade, 243</Text>
  <Text style={styles.end}>- Ibirapuera</Text>
  </View>
  <Image style={styles.tinyLogo3} source = {require('../Imagens/clinicaAnimales.png')}/>
  </View>

  <View style={styles.mapas}>
  <View style={styles.textClinicas}>
  <Text style={styles.tituloClinicas}>Clínica Veterinária Cães e Cats</Text>
  <Text style={styles.end}>Av. Pavão, 1083</Text>
  <Text style={styles.end}>- Moema</Text>
  </View>
  <Image style={styles.tinyLogo4} source = {require('../Imagens/caesEcats.png')}/>
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
        fontWeight: 'bold',
      },
      lista: {
        flexDirection:'row',
        alignSelf:"center",
        marginBottom:40,
      },
      listaCidade: {
        marginLeft:8
      },
      select: {
        fontSize:18,
        width:150,
      },
      mapas: {
        width:230,
        marginBottom:20,
      },
      tituloClinicas: {
        fontWeight:"bold",
        fontSize:16,
      },
      end: {
        color:'grey'
      },
      imgMapas: {
    
      },
      tinyLogo: {
        width:150,
        height:100,
        marginTop: 30,
        marginLeft:20,
      },
      tinyLogo2: {
        width:150,
        height:100,
        marginTop: 30,
        marginLeft:15,
      },
      tinyLogo3: {
        width:150,
        height:100,
        marginTop: 30,
        marginLeft:18,
      },
      tinyLogo4: {
        width:150,
        height:100,
        marginTop: 30,
        marginLeft:15,
      },
})