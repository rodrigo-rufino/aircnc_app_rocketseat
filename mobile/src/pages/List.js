import React, { useState, useEffect } from 'react';
import { Text, ScrollView, SafeAreaView, Image, StyleSheet, AsyncStorage } from 'react-native';

import logo from '../assets/logo.png';
import SpotList from '../components/SpotList';

export default function List() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('techs').then((storagedTechs) => {
      const techsArray = storagedTechs.split(',').map((tech) => {
        return tech.trim()
      });
      setTechs(techsArray);
    })
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logo}></Image>
      <ScrollView>
        {techs.map((tech) => {return (<SpotList key={tech} tech={tech}></SpotList>)})}
      </ScrollView>
      </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  },

  logo: {
    height: 32,
    resizeMode: "contain",
    alignSelf: "center"
  }
});