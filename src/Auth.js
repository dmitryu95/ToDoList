import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';
import { navigation } from "../navigate"

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

    const ButtonAccept = () => {
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
                        onPress={() => openNotes()}>
                        <Text style={{fontSize: 20}}>Войти</Text> 
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonEnter} >
                    <TouchableOpacity  
                        onPress={() => openRegistration()}>
                        <Text style={{fontSize: 20}}>Регистрация</Text> 
                    </TouchableOpacity>
                </View>
                <Button style={styles.buttonEnter} title="Получение JSON" onPress={() => openApi()} />
            </View>
        </View>
    )
} 

const styles=StyleSheet.create({
    main: {
        flex:1,
        backgroundColor: 'silver',
    },
    auth: {
        height: 50,
        marginBottom: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 28,
        backgroundColor: '#5583EE',
        opacity: 0.8,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    loginPass: {
        paddingHorizontal: '5%',
        padding: 5,
    },
    input: {
        borderStyle: 'solid',
        borderWidth: 2,
        height: 50,
        backgroundColor: 'white',
        borderColor: '#3949ab',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        fontSize: 19,
    },
    text: {
        paddingBottom: '2%',
        fontSize: 20,
        paddingLeft: 5,
    },
    button: {
        borderStyle: 'solid',
        borderWidth: 2,
        height: 35,
        backgroundColor: '#5583EE',
        borderColor: '#5583EE',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignItems: 'center',
        marginTop: '5%',
        marginBottom: 50,
    },
    buttonEnter: {
        borderStyle: 'solid',
        borderWidth: 2,
        height: 35,
        backgroundColor: 'green',
        borderColor: 'green',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignItems: 'center',
        marginTop: '1%',
    },
    image: {
        flex:1, 
        justifyContent: 'center'
    }
})

