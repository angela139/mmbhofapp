import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Header}>MMBHOF Catalog</Text>
      <Image source={require('./assets/marin_logo.png')} style={{ height: 200, width: 250, resizeMode: 'contain' }} />
      <View style={{ flexDirection: "row" }}>
        <Image source={require('./assets/placeholder.jpg')} style={styles.Content} />
        <Text style={styles.BodyHeader}>Bicycle Item</Text>
      </View>
      <Text style={styles.Body}>Random Description</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  Header: {
    color: '#fd6350',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20
  },
  Content: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    marginRight: 30,
  },
  BodyHeader: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginRight: 40
  },
  Body: {
    color: '#000000',
    fontSize: 14,
    marginLeft: 90
  }
});
