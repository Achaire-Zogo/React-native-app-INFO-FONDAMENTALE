import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Crud = () => {
  const [userName, setUserName] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const storedUsers = await AsyncStorage.getItem('users');
      if (storedUsers) {
        setUsers(JSON.parse(storedUsers));
      }
    } catch (error) {
      console.error("Erreur de chargement des utilisateurs : ", error);
    }
  };

  const addUser = async () => {
    if (userName.trim() === '') {
      console.warn("Le nom d'utilisateur ne peut pas être vide.");
      return;
    }
    if (users.includes(userName)) {
      console.warn("Cet utilisateur existe déjà.");
      return;
    }
    
    const newUsers = [...users, userName];
    setUsers(newUsers);
    await AsyncStorage.setItem('users', JSON.stringify(newUsers));
    setUserName('');
  };

  const deleteUser = async (name) => {
    const newUsers = users.filter(user => user !== name);
    setUsers(newUsers);
    await AsyncStorage.setItem('users', JSON.stringify(newUsers));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nom d'utilisateur"
        value={userName}
        onChangeText={setUserName}
      />
      <Button title="Ajouter Utilisateur" onPress={addUser} />
      <FlatList
        data={users}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text>{item}</Text>
            <Button title="Supprimer" onPress={() => deleteUser(item)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  userItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
});

export default Crud;
