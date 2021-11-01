import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles/AddNotesStyles';

const AddNote = ({ addNewNote }) => {
    const [text, setText] = useState('');
    
    return(
        <View style={styles.inputeBlock}>
            <TextInput 
                style={styles.input} 
                onChangeText={setText} 
                value={text}
                placeholder='Введите заметку...'/>
            <TouchableOpacity 
                style={styles.add} 
                onPress={() => {( addNewNote(text), setText('') )}} >
            <Text style={styles.text}>+</Text>
            </TouchableOpacity>
        </View>
    )}

export default AddNote;