import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, PermissionsAndroid, Alert, Platform } from 'react-native';
import { launchCamera } from 'react-native-image-picker';

const Camera = () => {
  const [imageUri, setImageUri] = useState(null);

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Permission d'accès à la caméra",
          message: "L'application a besoin d'accéder à votre caméra pour prendre des photos.",
          buttonNeutral: "Demander plus tard",
          buttonNegative: "Annuler",
          buttonPositive: "OK"
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true; // Pour iOS, la permission est gérée automatiquement par le système.
  };

  const takePhoto = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) {
      Alert.alert("Permission refusée", "Vous devez autoriser l'accès à la caméra pour utiliser cette fonctionnalité.");
      return;
    }

    const options = {
      mediaType: 'photo',
      includeBase64: false,
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('L\'utilisateur a annulé la caméra');
      } else if (response.errorCode) {
        console.log('Erreur caméra: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      } else {
        console.log("Erreur inconnue lors de la capture de la photo");
      }
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Prendre une photo" onPress={takePhoto} />
      {imageUri && (
        <Image source={{ uri: imageUri }} style={styles.image} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
});

export default Camera;
