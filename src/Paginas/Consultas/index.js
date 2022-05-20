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

export default function Consultas(){
    const navigation = useNavigation();


 return(
<SafeAreaView style={styles.container}>
  <ScrollView style={styles.scrollView}>
  <View style={styles.topo}>

<Text style={styles.titulo}>Consulta Pet</Text>




<View style={styles.local}>
<Image style={styles.tinyLogo} source = {require('../Imagens/Local.png')}/>
<Text>Selecione um dos locais abaixo</Text>
</View>


<View style={styles.botao1}>

  <View style={styles.texto}>
  <Text>Clinica Veterinária Santo Amaro</Text>
  <Text style={styles.endereco}>Av.Eng Eusébio Stevaux, 823</Text>
  </View>
</View>

<View style={styles.botao1}>

  <View style={styles.texto}>
  <Text>Veterinária Morumbi</Text>
  <Text style={styles.endereco}>Av.Albert Einstein, 126</Text>
  </View>
</View>

<View style={styles.botao1}>

  <View style={styles.texto}>
  <Text>Veterinária Animales</Text>
  <Text style={styles.endereco}>Rua Bento de Andrade, 243</Text>
  </View>
</View>

<View style={styles.botao1}>

  <View style={styles.texto}>
  <Text>Veterinária Cães e Cats</Text>
  <Text style={styles.endereco}>Av.Pavão, 1083</Text>
  </View>
</View>

<View style={styles.local}>
<Image style={styles.tinyLogo} source = {require('../Imagens/medico.png')}/>
<Text style={styles.textMedico}>Selecione o horário com o profissional desejado</Text>
</View>


  <View style={styles.medicos}>
  <Image style={styles.fotoMedico} source = {require('../Imagens/medico1.jpg')}/>
  <Text style={styles.nome}>Dr. Pedro Silva</Text>
  </View>

  <View style={styles.botao}>
  <View style = {styles.horario}>
  <Button
        title="08:50"
        color="blue"
        accessibilityLabel="Learn more about this purple button"
  />
  </View>
  <View style={styles.espaco}></View>
  <View style = {styles.horario}>
  <Button
        title="14:00"
        color="blue"
        accessibilityLabel="Learn more about this purple button"
  />
  </View>
  <View style={styles.espaco}></View>
  <View style = {styles.horario}>
  <Button
        title="17:30"
        color="blue"
        accessibilityLabel="Learn more about this purple button"
  />
  </View>
  </View>




  <View style={styles.medicos}>
  <Image style={styles.fotoMedico} source = {require('../Imagens/medico2.jpg')}/>
  <Text style={styles.nome}>Dr. Ângela Aparecida</Text>
  </View>

  <View style={styles.botao}>
  <View style = {styles.horario}>
  <Button
        title="15:45"
        color="blue"
        accessibilityLabel="Learn more about this purple button"
  />
  </View>
  </View>



  <View style={styles.medicos}>
  <Image style={styles.fotoMedico} source = {require('../Imagens/medico3.jpg')}/>
  <Text style={styles.nome}>Dr. Gabriel Moreira</Text>
  </View>

  <View style={styles.botao}>
  <View style = {styles.horario}>
  <Button
        title="10:00"
        color="blue"
        accessibilityLabel="Learn more about this purple button"
  />
  </View>
  <View style={styles.espaco}></View>
  <View style = {styles.horario}>
  <Button
        title="11:45"
        color="blue"
        accessibilityLabel="Learn more about this purple button"
  />
  </View>
  <View style={styles.espaco}></View>
  <View style = {styles.horario}>
  <Button
        title="16:45"
        color="blue"
        accessibilityLabel="Learn more about this purple button"
  />
  </View>
  </View>

  <View>
  <View style={styles.botaoAgendar}>
  <Button
        title="Agendar"
        color="blue"
        accessibilityLabel="Learn more about this purple button"
        onPress={() => navigation.navigate('ConsultaAgendada')}
  />
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
        fontWeight: 'bold',
      },
      texto: {
        flexDirection:"column"
      },
      lista: {
        flexDirection:'row',
        alignSelf:"center",
        marginBottom:40,
      },
      listaCidade: {
        marginLeft:8
      },
      calendario:{
        marginHorizontal:40
      },
      viewData: {
        marginLeft:23,
      },
      local: {
        flexDirection:"row",
        marginTop:30,
        alignItems:"center",
        marginLeft:20,
        marginBottom:15,
      },
      botao1: {
        flexDirection: "row",
        alignItems:"center",
        marginTop:10,
        marginLeft:20,
      },
      endereco: {
        color:'grey'
      },
      textMedico: {
        marginLeft:8,
        width:250,
      },
        botao: {
        marginTop:5,
        width: 100,
        flexDirection: "row",
        marginHorizontal:20,
        marginBottom:25,
      },
      horario: {
        backgroundColor:'white',
        borderWidth:0.5,
        borderRadius:3,
      },
      botaoAgendar: {
        backgroundColor:'#0000ff',
        width:300,
        marginTop:0,
        alignSelf:'center',
      },
      espaco: {
        marginHorizontal:4
      },
      medicos: {
        flexDirection:"row",
        alignItems:"center",
        marginTop:20,
        marginLeft:20,
      },
      nome: {
        marginLeft:8,
        fontWeight:'bold'
      },
      select: {
        fontSize:14,
        width:150,
      },
      fotoMedico:{
        width:50,
        height:50,
      },
      tinyLogo: {
        width:35,
        height:35,
      },
})