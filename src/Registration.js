import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";
import { Network } from "./source/Network";

export default function Registration({ navigation }) {

  const openAuth = () => {
    navigation.navigate("Auth");
  };
  const openNotes = () => {
    navigation.navigate("Notes");
  };

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const ButtonAccept = async (login, password) => {
    try {
        (login == "") 
            ? Alert.alert("","Заполните все поля") 
            : Network("Users", "POST", login, password)
    } catch (error) {
      console.log("error", error);
    }
    setLogin("");
    setPassword("");
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
        <TouchableOpacity style={styles.buttonReg} onPress={() => openAuth()}>
          <Text style={{ fontSize: 20 }}>Авторизация</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "silver",
  },
  auth: {
    height: 50,
    marginBottom: 50,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 28,
    backgroundColor: "#5583EE",
    opacity: 0.8,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  loginPass: {
    paddingHorizontal: "5%",
    padding: 5,
  },
  input: {
    borderStyle: "solid",
    borderWidth: 2,
    height: 50,
    backgroundColor: "white",
    borderColor: "#3949ab",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    fontSize: 19,
  },
  text: {
    paddingBottom: "2%",
    fontSize: 20,
    paddingLeft: 5,
  },
  button: {
    borderStyle: "solid",
    borderWidth: 2,
    height: 35,
    backgroundColor: "#5583EE",
    borderColor: "#5583EE",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
    marginTop: "5%",
    marginBottom: 50,
  },
  buttonReg: {
    borderStyle: "solid",
    borderWidth: 2,
    height: 35,
    backgroundColor: "green",
    borderColor: "green",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
    marginTop: "1%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
