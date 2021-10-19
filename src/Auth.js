import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import { Network } from './source/Network';
import { styles } from "./styles/AuthStyles"

export default function Auth({ navigation }) {
    // БЛОК НАВИГАЦИИ
    const openNotes = () => { navigation.navigate('Notes') }
    const openRegistration = () => { navigation.navigate('Registration') }
    const openApi = () => { navigation.navigate('ApiRequest') }

    // БЛОК СОСТОЯНИЙ
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    // БЛОК С ПОЛУЧЕНИЕМ ТОКЕНА
    /*const storeToken = async (token) => {
        try{
            await AsyncStorage.setItem('token', token)
        } catch (e) { alert('cant save token') }

    }*/

    const ButtonAccept = (login, password) => {
        if (login && password !== "") {
            try {
                Network("Users/login", "POST", login, password)
                .then( response => {
                    (response.id)
                    ? (Alert.alert("",`Пользователь авторизирован`),
                      openNotes())
                    : Alert.alert("",`Ошибка, возможно пользователь не существует `)})
            } catch(error) {
                console.log("error", error)
            }
        } else Alert.alert("","Заполните все поля") 
        setLogin('')
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
                        value={login}
                        onChangeText={setLogin} 
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
                        onPress={() => ButtonAccept(login, password)}>  
                        <Text style={{fontSize: 18}}>Принять</Text>   
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonEnter} >
                    <TouchableOpacity  
                        onPress={() => openRegistration()}>
                        <Text style={{fontSize: 20}}>Регистрация</Text> 
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonEnter}>
                    <TouchableOpacity  
                        onPress={() => openNotes()}>
                        <Text style={{fontSize: 20}}>Заметки</Text> 
                    </TouchableOpacity>
                </View>
                <Button style={styles.buttonEnter} title="Получение JSON" onPress={() => openApi()} />
            </View>
        </View>
    )
} 

