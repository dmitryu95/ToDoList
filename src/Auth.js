import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import { Network } from './source/Network';
import { styles } from "./styles/AuthStyles"

export default function Auth({ navigation }) {
    // БЛОК НАВИГАЦИИ
    const openNotes = (response) => ( navigation.navigate('Notes', {idUser: response.id }) )
    const openRegistration = () => { navigation.navigate('Registration') }

    // БЛОК СОСТОЯНИЙ
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const ButtonAccept = (email, password) => {
        if (email && password !== "") {
            try {
                Network("Users/login",'', "POST", {email, password})
                .then( response => {
                    if(response.id) {
                        Alert.alert("",`Пользователь авторизован`)
                        return openNotes(response) 
                    } else  return Alert.alert("",`Ошибка, возможно пользователь не существует `)})
            } catch(error) {
                console.log("error", error)
            }
        } else Alert.alert("","Заполните все поля") 
        setEmail('')
        setPassword('')
    }


    return (
        <View style={styles.main}>
            <Text style={styles.auth}>Авторизация</Text>
            <View>
                <View style={styles.loginPass}>
                    <Text style={styles.text}>Логин:</Text>
                    <TextInput 
                        style={styles.input} 
                        value={email}
                        onChangeText={setEmail} 
                        placeholder='Введите логин...'>
                    </TextInput>
                </View>
                <View style={styles.loginPass}>
                    <Text style={styles.text}>Пароль:</Text>
                    <TextInput 
                        style={styles.input} 
                        value={password}
                        onChangeText={setPassword} 
                        placeholder='Введите пароль...'>
                    </TextInput>                        
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => ButtonAccept(email, password)}>  
                        <Text style={{fontSize: 18}}>Принять</Text>   
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonEnter} >
                    <TouchableOpacity  
                        onPress={() => openRegistration()}>
                        <Text style={{fontSize: 20}}>Регистрация</Text> 
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
} 

