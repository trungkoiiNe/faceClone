import { ThemedView } from "@/components/ThemedView";
import { StatusBar, View, Text,StyleSheet } from "react-native";

//default home screen
export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <StatusBar  />
      <View style={styles.header}>
        <Text style={styles.headerText}>My Music Player</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>Welcome to your music player!</Text>
        {/* Add your main content components here */}
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Player controls will go here</Text>
      </View>
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