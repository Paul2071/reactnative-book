import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>  
        <Text style={styles.boldText}>Hello world</Text>      
      </View>
        <View style={styles.body}>
          <Text style={styles.boldText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatum cumque laudantium rerum expedita accusamus.<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatum cumque laudantium rerum expedita accusamus. </Text></Text>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatum cumque laudantium rerum expedita accusamus. </Text>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatum cumque laudantium rerum expedita accusamus. </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
   },
   boldText: {
      fontWeight: "bold",
      color: "red",
   },
   body: {
    backgroundColor: "purple",
    padding: 20,
    fontWeight: "bold",
   }
});
