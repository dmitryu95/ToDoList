import React, {useState} from 'react';
import { View, StyleSheet, Text, Button, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import TodoList from './ TodoList';
import AddNote from './AddNote';
import {styles} from "./styles/NotesStyles"

export default function Notes ({navigation}) {
    return (
        <ImageBackground source = {require('./image/backgroundNotes.jpeg')} resizeMode="cover" style={styles.image}>
            <Text style={styles.navbar}>Заметки</Text>
            <View style={styles.container}>
                <TodoList />
            </View>
        </ImageBackground>
    ) 
  }

