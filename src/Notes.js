import React, {useState} from 'react';
import { View, StyleSheet, Text, Button, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import TodoList from './ TodoList';
import AddNote from './AddNote';

export default function Notes ({ navigation }) {
    const closeNote = () => {
        navigation.navigate('Auth');
    }

    return (
        <ImageBackground source = {require('./image/backgroundNotes.jpeg')} resizeMode="cover" style={styles.image}>
            <Text style={styles.navbar}>Заметки</Text>

            <View style={styles.container}>
                <TodoList />
            </View>

            <TouchableOpacity  onPress={() => closeNote()} style={styles.auth}>
                <Text style={{fontSize: 25}}> К авторизации</Text> 
            </TouchableOpacity>
        </ImageBackground>
    ) 
  }

const styles=StyleSheet.create({
    image: {
        flex: 1,
    },
    navbar: {
        height: 50,
        marginBottom: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 28,
        backgroundColor: '#5583EE',
        opacity: 0.8,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    container: {
        flex: 4,
    },
    auth: {
        height: '5%',
        backgroundColor: 'green',
        alignItems: 'center',
        marginTop: '1%'
    },
})