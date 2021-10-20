import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, View } from "react-native";

const Network = async (url, method, body) => {
  console.log(url, method, body);

  let token = "";
  await AsyncStorage.getItem("token").then((value) => { token = value })

  const response = await fetch(`http://10.102.132.128:300/api/${url}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      access_token: token,
    },
    body: JSON.stringify( body )
  })
  return response.json();
};

export {Network};






// export const Network = async (url, method, login, password, navigation) => {
//   console.log(url, method, login, password);
//   const [postId, setPostId] = useState(null);

//   let token = "";
//   await AsyncStorage.getItem("token").then((value) => {
//     token = value;
//   });

//   return fetch(`http://10.102.132.128:300/api/${url}`, {
//     method: method,
//     headers: {
//       "Content-Type": "application/json",
//       access_token: token,
//     },
//     body: JSON.stringify({
//       email: login,
//       password: password,
//     })
//   }).then(response => response.json())
//     .then(res => setPostId(res.id))
//     .then(() => console.log("твой номере", postId))
//   };
