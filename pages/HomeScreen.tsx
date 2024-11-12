import React from 'react';
import { TouchableOpacity, Text, View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// Définir le type de navigation pour le Stack
type RootStackParamList = {
  Home: undefined;
  HelloWorld: undefined;
  Formulaire: undefined;
  Crud: undefined;
  Camera: undefined;
  AudioPlayer: undefined;
};

// Définir le type des props pour le composant HomeScreen
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

function HomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('HelloWorld')}>
            <Text style={styles.buttonText}>Hello World</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Formulaire')}>
            <Text style={styles.buttonText}>Formulaire</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Crud')}>
            <Text style={styles.buttonText}>CRUD</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Camera')}>
            <Text style={styles.buttonText}>CAMERA</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('AudioPlayer')}>
            <Text style={styles.buttonText}>SONG</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Formulaire')}>
            <Text style={styles.buttonText}>CHAT</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Formulaire')}>
            <Text style={styles.buttonText}>CLIENT-SERVER</Text>
          </TouchableOpacity>



        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  button: {
    margin: 10,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default HomeScreen;
