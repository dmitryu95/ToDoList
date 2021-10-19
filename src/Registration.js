import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";
import { Network } from "./source/Network";
import { styles } from "./styles/AuthStyles"

export default function Registration({ navigation }) {

  const openAuth = () => {
    navigation.navigate("Auth");
  };

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const ButtonAccept = async (login, password) => {
    if (login && password !== "") {
      try {
          Network("Users", "POST", login, password)
          .then(response => {
            console.log(response)
            console.log("id ",response.id)
        })
      } catch(error) {
          console.log("error", error)
      }
  } else Alert.alert("","Заполните все поля") 
  setLogin('')
  setPassword('')
  };

  return (
    <View style={styles.main}>
      <Text style={styles.auth}>Регистрация</Text>
      <View style={styles.loginPass}>
        <Text style={styles.text}>Придумайте логин(Email)</Text>
        <TextInput
          style={styles.input}
          value={login}
          onChangeText={(text) => setLogin(text)}
          placeholder="Введите ваш Email"
        />
      </View>
      <View style={styles.loginPass}>
        <Text style={styles.text}>Придумайте пароль</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Введите ваш пароль"
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => ButtonAccept(login, password)}
      >
        <Text style={{ fontSize: 18 }}>Принять</Text>
      </TouchableOpacity>
      <View style={{ position: "absolute", bottom: 2, left: 0, width: "100%" }}>
        <TouchableOpacity style={styles.buttonEnter} onPress={() => openAuth()}>
          <Text style={{ fontSize: 20 }}>Авторизация</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


