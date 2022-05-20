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



import { useNavigation } from '@react-navigation/native';

export default function DadosPessoais(){
    const navigation = useNavigation();


 return(
<SafeAreaView style={styles.container}>
  <ScrollView style={styles.scrollView}>

  <View style={styles.topo}>
      <Text style={styles.titulo}>Dados Pessoais</Text>

      <Text style={styles.subtitulo}>Meus dados</Text>

      <Text style={styles.loginLabel}>Nome</Text>
      <View style = {styles.textinput}>
      <TextInput 
        autoCorrect = {false} 
        placeholder = "Digite seu nome" 
        placeholderTextColor = "grey"
        backgroundColor = "white"
        style = {styles.textInput}
        clearButtonMode = "always"
       />
      </View>

      <Text style={styles.loginLabel}>Email</Text>
      <View style = {styles.textinput}>
      <TextInput 
        autoCorrect = {false} 
        placeholder = "Digite seu email" 
        placeholderTextColor = "grey"
        backgroundColor = "white"
        style = {styles.textInput}
        clearButtonMode = "always"
       />
      </View>

      <Text style={styles.loginLabel}>Senha</Text>
      <View style = {styles.textinput}>
      <TextInput 
        autoCorrect = {false} 
        placeholder = "Digite sua senha" 
        placeholderTextColor = "grey"
        backgroundColor = "white"
        secureTextEntry={true} 
        style = {styles.textInput}
        clearButtonMode = "always"
       />
      </View>

      <Text style={styles.loginLabel}>Gênero</Text>

    <View style={styles.botao}>
      <View style={styles.botao1}>

      <Text>Masculino</Text>
      </View>

      <View style={styles.botao2}>

      <Text>Feminino</Text>
      </View>

      <View style={styles.botao3}>

      <Text>Não informar</Text>
      </View>
    </View>

    <Text style={styles.loginLabel}>Data de Nascimento</Text>
      <View style = {styles.textinput}>
      <TextInput 
        autoCorrect = {false} 
        placeholder = " D / M / A" 
        placeholderTextColor = "grey"
        backgroundColor = "white"
        style = {styles.textInput}
        clearButtonMode = "always"
       />
      </View>

      <Text style={styles.loginLabel}>Telefone</Text>
      <View style = {styles.textinput}>
      <TextInput 
        autoCorrect = {false} 
        placeholder = " (DDD)_____ - ____" 
        placeholderTextColor = "grey"
        backgroundColor = "white"
        style = {styles.textInput}
        clearButtonMode = "always"
       />
      </View>

      <View style={styles.botaoEditar}>
        <Button
            title="Editar"
            color="blue"
            accessibilityLabel="Learn more about this purple button"
        />
      </View>

      <Text style={styles.subtitulo}>Dados do meu pet</Text>

      <Text style={styles.loginLabel}>Nome</Text>
      <View style = {styles.textinput}>
      <TextInput 
        autoCorrect = {false} 
        placeholder = "Digite seu nome" 
        placeholderTextColor = "grey"
        backgroundColor = "white"
        style = {styles.textInput}
        clearButtonMode = "always"
       />
      </View>

      <Text style={styles.loginLabel}>Sexo</Text>

    <View style={styles.botao}>
      <View style={styles.botao1}>

      <Text>Macho</Text>
      </View>

      <View style={styles.botao2}>

      <Text>Femea</Text>
      </View>

      <View style={styles.botao3}>

      <Text>Não sei</Text>
      </View>
    </View>

    <Text style={styles.loginLabel}>Data de Nascimento</Text>
      <View style = {styles.textinput}>
      <TextInput 
        autoCorrect = {false} 
        placeholder = " D / M / A" 
        placeholderTextColor = "grey"
        backgroundColor = "white"
        style = {styles.textInput}
        clearButtonMode = "always"
       />
      </View>

      <Text style={styles.loginLabel}>Idade</Text>

      <View style={styles.botao4}>
 
      <Text>Menos de 5 anos</Text>
      </View>

      <View style={styles.botao4}>
 
      <Text>Mais de 5 anos</Text>
      </View>

      <View style={styles.botao4}>

      <Text>Mais de 10 anos</Text>
      </View>

      <Text style={styles.loginLabel}>Ficha médica:</Text>
      <Text>Faça upload da imagem da ficha médica do seu Pet clicando no icone abaixo:</Text>

      <Image style={styles.tinyLogo} source = {require('../Imagens/upload.png')}/>

      <View style={styles.botaofinal}>
      <View style={styles.botaoEditar2}>
        <Button
            title="Editar"
            color="blue"
            accessibilityLabel="Learn more about this purple button"
        />
        </View>
        <View style={styles.botaoAdicionar}>
        <Button
            title="Adicionar"
            color="blue"
            accessibilityLabel="Learn more about this purple button"
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
    textinput: {
        backgroundColor: 'white',
        height: 20,
      },
      textinput2: {
        backgroundColor: 'white',
        width: 70,
      },
      textinput3: {
        backgroundColor: 'white',
        width:120,
      },
      textInput: {
        height:40,
        borderWidth:1,
      },
      titulo: {
        fontSize:35,
        textAlign: 'center',
        marginBottom: 15,
        fontWeight: 'bold',
        marginTop:10
      },
        subtitulo: {
        fontWeight: "bold",
        fontSize:18,
        marginTop:20
      },
      paragraph: {
        fontSize: 16,
      },
      topo: {
        flex:1
      },
      botao: {
        alignSelf: "center",
        flexDirection: "row"
      },
      botaoEditar: {
        width:120,
        alignSelf:"center",
        marginTop:50,
        marginBottom:50,
        marginLeft:220,
        backgroundColor:'#0000ff',
      },
      botaofinal: {
        flexDirection:"row",
        marginLeft:90,
      },
        botaoEditar2: {
        width:120,
        alignSelf:"center",
        marginTop:20,
        backgroundColor:'#0000ff',
      },
      botaoAdicionar: {
        marginLeft:20,
        marginTop:20,
        width:120,
        backgroundColor:'#0000ff',
      },
      botao1: {
        alignItems:"center",
        marginRight:20,
      },
        botao2: {
        alignItems:"center",
        marginRight:20,
      },
        botao3: {
        alignItems:"center"
      },
        botao4: {
          alignItems:"center",
          flexDirection:"row"
      },
     loginLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop:20,
        marginBottom:8,
      },
      tinyLogo: {
        width:60,
        height:60,
        alignSelf:"center",
        marginTop:20,
      },
})