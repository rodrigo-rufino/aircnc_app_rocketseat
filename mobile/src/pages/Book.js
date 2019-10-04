import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet } from 'react-native';

export default function Book( { navigation }) {
    const [date, setDate] = useState('');
    const id = navigation.getParam('id');
    return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>DATA DE INTERESSE *</Text>
      <TextInput
        style={styles.input}
        textContentType="emailAddress"
        placeholder="Qual data você quer reservar?"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="words"
        autoCorrect={false}
        value={date}
        onChangeText={text => setDate(text)}
      ></TextInput>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  },

  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8
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
