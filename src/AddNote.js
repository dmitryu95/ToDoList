import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const AddNote = ({ addNewNote }) => {
    const [text, setText] = useState('');

    const getNoteText = (inputText) => {
        setText(inputText);
    }

    return(
        <View style={styles.inputeBlock}>
            <TextInput style={styles.input} onChangeText={getNoteText} placeholder='Введите заметку...'/>
            <TouchableOpacity style={styles.add} onPress={() => addNewNote(text)}>
                <Text style={styles.text}>+</Text>
            </TouchableOpacity>
            <View   />
        </View>
    )}

const styles=StyleSheet.create({
    inputeBlock: {
        flexDirection: 'row',
        margin: 2,
        justifyContent: 'center',
    },
    input: {
        backgroundColor: 'white',
        fontSize: 19,
        width: '75%',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#3949ab',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    add: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '1%',
        width: '13%',
        backgroundColor: '#3949ab',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    text: {
        fontSize: 40,
        color: 'white',
    },
})

export default AddNote;