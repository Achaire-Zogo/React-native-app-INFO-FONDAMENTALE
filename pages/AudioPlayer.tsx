import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import Sound from 'react-native-sound';

// Initialisation de la bibliothèque Sound
Sound.setCategory('Playback');

const AudioPlayer = () => {
  const [song, setSong] = useState(null);

  // Charger le fichier audio au format mp3 ou autre
  const loadSound = () => {
    const sound = new Sound('song.wav', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('Erreur de chargement du son:', error);
        return;
      }
      setSong(sound);
    });
  };

  // Fonction pour jouer la chanson
  const playSound = () => {
    if (!song) {
      loadSound();
    } else {
      song.play((success) => {
        if (!success) {
          console.log('Échec de lecture du son');
        }
      });
    }
  };

  // Fonction pour arrêter la chanson
  const stopSound = () => {
    if (song) {
      song.stop(() => {
        console.log('Son arrêté');
      });
    }
  };

  return (
    <View style={{ padding: 100, marginTop: 10 }}>
      <Text>Lecteur Audio</Text>
      <Button title="Play" onPress={playSound} />
      <View style={{ marginTop: 10 }}>
        <Button title="Stop" onPress={stopSound} />
      </View>
    </View>
  );
};

export default AudioPlayer;
