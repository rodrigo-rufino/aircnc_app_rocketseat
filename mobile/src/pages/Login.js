import React from 'react';
import { View, KeyboardAvoidingView, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';

import logo from '../assets/logo.png';

export default function Login() {
    return <KeyboardAvoidingView
      style={styles.container}
      keyboardVerticalOffset={0}
      behavior={'padding'}
    >
      <Image source={logo}></Image>
      
      <View style={styles.form}>
        <Text style={styles.label}>SEU E-MAIL *</Text>
        <TextInput
          style={styles.input}
          textContentType="emailAddress"
          placeholder="Seu E-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        ></TextInput>

        <Text style={styles.label}>TECNOLOGIAS *</Text>
        <TextInput
          style={styles.input}
          placeholder="Tecnologias de Interesse"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}          
        ></TextInput>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Encontrar Spots</Text>  
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>;
};

const styles = StyleSheet.create({
  flex: 1,
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8
  },

  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 30
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 2
  },

  button: {
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16
  }
});