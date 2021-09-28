import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';

export default function Registration({ navigation }) {
    const openScreen = () => { navigation.navigate('Notes') }

    const [login, setLogin] = useState([]);
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');

    const ButtonAccept = () => {
        setLogin('')
        setPassword('')  
        setName('')
        setUserName('')
    }

    const FormRegistration = (props) => {
        return(
            <View style={styles.loginPass}>
                <Text style={styles.text}>{props.title}</Text>
                <TextInput style={styles.input} 
                    value={props.stateText}
                    onChangeText={props.stateText} 
                    placeholder={props.holder}></TextInput>
            </View>
        )
    }

    return (
        <View style={styles.main}>
        <Text style={styles.auth}>Регистрация</Text>
            <FormRegistration title={"Введите Email"} stateText={() => setLogin()} holder={'Введите логин...'}  />
            <FormRegistration title={"Введите Пароль"} stateText={() => setPassword()} holder={'Введите пароль...'}  />
            <FormRegistration title={"Введите ваше Имя"} stateText={() => setName()} holder={'Введите ваше имя...'}  />
            <FormRegistration title={"Введите ваш Никнейм"} stateText={() => setUserName()} holder={'Введите ваш никнейм...'}  />
            <TouchableOpacity 
                style={styles.button}
                onPress={() => ButtonAccept(login, password, name, userName)}>  
                <Text style={{fontSize: 18}}>Принять</Text>   
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonEnter}
                onPress={() => openScreen()}>
                <Text style={{fontSize: 20}}>Зарегистрироваться</Text> 
            </TouchableOpacity>
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

