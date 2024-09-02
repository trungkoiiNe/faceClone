import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemedView } from '@/components/ThemedView';
// import {TabNavigator} from './AppNavigator';
export default function MusicPlayerApp() {
  return (
    <ThemedView style={styles.container}>
      <StatusBar style="auto" />
      {/* <TabNavigator/> */}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'white'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  footerText: {
    fontSize: 16,
    color:'white'
  },
  contentText: {
    fontSize: 18,
    color:'white'
  },
});
