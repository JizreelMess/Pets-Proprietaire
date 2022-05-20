import React from 'react';

import {  SafeAreaView, ScrollView, StatusBar,  StyleSheet, Text, useColorScheme,View,
} from 'react-native';

import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';

import Home from './src/Paginas/Home';
import Cadastro from './src/Paginas/Cadastro';
import Login from './src/Paginas/Login';
import Menu from './src/Paginas/Menu';
import Meuperfil from './src/Paginas/Meuperfil';
import Clinicas from './src/Paginas/Clinicas';
import Adocao from './src/Paginas/Adocao';
import Consultas from './src/Paginas/Consultas';
import Duvidas from './src/Paginas/Duvidas';
import DadosPessoais from './src/Paginas/DadosPessoais';
import Ongs from './src/Paginas/Ongs';
import LojasPet from './src/Paginas/LojasPet';
import Denuncia from './src/Paginas/Denuncia';
import Rastreio from './src/Paginas/Rastreio';
import Informacao from './src/Paginas/Informacao';
import EsqueceuASenha from './src/Paginas/EsqueceuASenha';


import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{
          title: 'PETS PROPRIETAIRE',
          headerStyle: {
            backgroundColor: '#7FFFD4',        
          },
          headerTintColor: '#0000ff',
          
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>

        <Stack.Screen name="Cadastro" component={Cadastro}
        options={{
          headerStyle: {
            backgroundColor: '#7FFFD4',
          },
          headerTintColor: '#0000ff',          
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>

         <Stack.Screen name="Login" component={Login}
          options={{
            headerStyle: {
              backgroundColor: '#7FFFD4',
            },
            headerTintColor: '#0000ff',          
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />

<Stack.Screen name="Menu" component={Menu}
          options={{
            headerStyle: {
              backgroundColor: '#7FFFD4',
            },
            headerTintColor: '#0000ff',          
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />


<Stack.Screen name="Meuperfil" component={Meuperfil}
          options={{
            title: 'Perfil',
            headerStyle: {
              backgroundColor: '#7FFFD4',
            },
            headerTintColor: '#0000ff',          
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />


          
<Stack.Screen name="Clinicas" component={Clinicas}
          options={{
            title: 'Clinicas',
            headerStyle: {
              backgroundColor: '#7FFFD4',
            },
            headerTintColor: '#0000ff',          
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />

<Stack.Screen name="Adocao" component={Adocao}
          options={{
            title: 'Adoção',
            headerStyle: {
              backgroundColor: '#7FFFD4',
            },
            headerTintColor: '#0000ff',          
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />


<Stack.Screen name="Consultas" component={Consultas}
          options={{
            title: 'Consultas',
            headerStyle: {
              backgroundColor: '#7FFFD4',
            },
            headerTintColor: '#0000ff',          
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />


<Stack.Screen name="Duvidas" component={Duvidas}
          options={{
            title: 'Duvidas',
            headerStyle: {
              backgroundColor: '#7FFFD4',
            },
            headerTintColor: '#0000ff',          
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />


<Stack.Screen name="DadosPessoais" component={DadosPessoais}
          options={{
            title: 'Dados Pessoais',
            headerStyle: {
              backgroundColor: '#7FFFD4',
            },
            headerTintColor: '#0000ff',          
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />


<Stack.Screen name="Ongs" component={Ongs}
          options={{
            title: 'Ongs',
            headerStyle: {
              backgroundColor: '#7FFFD4',
            },
            headerTintColor: '#0000ff',          
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />


<Stack.Screen name="LojasPet" component={LojasPet}
          options={{
            title: 'Lojas',
            headerStyle: {
              backgroundColor: '#7FFFD4',
            },
            headerTintColor: '#0000ff',          
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
          
          <Stack.Screen name="Denuncia" component={Denuncia}
          options={{
            title: 'Denuncia',
            headerStyle: {
              backgroundColor: '#7FFFD4',
            },
            headerTintColor: '#0000ff',          
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />

<Stack.Screen name="Rastreio" component={Rastreio}
          options={{
            title: 'Rastreio',
            headerStyle: {
              backgroundColor: '#7FFFD4',
            },
            headerTintColor: '#0000ff',          
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />

<Stack.Screen name="Informacao" component={Informacao}
          options={{
            title: 'Informação',
            headerStyle: {
              backgroundColor: '#7FFFD4',
            },
            headerTintColor: '#0000ff',          
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />


<Stack.Screen name="EsqueceuASenha" component={EsqueceuASenha}
          options={{
            title: 'Esqueceu a senha!',
            headerStyle: {
              backgroundColor: '#7FFFD4',
            },
            headerTintColor: '#0000ff',          
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7FFFD4',
    padding: 8,
  },
});