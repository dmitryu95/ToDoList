import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
  map,
  TextInput
} from 'react-native';
import { styles } from './styles/TodoListStyles';

const TodoList = () => {
  const [listOfItems, setListOfItems] = useState([]);
  const [text, setText] = useState('');

  /* text - то, что ввел пользователь */
  const addNewNote = text => {
    setListOfItems(list => {
      return [
        {title: text, key: Math.random().toString(36).substr(2)},
        ...list, //новый элемент + Добавить весь текущий список
      ]
    })
    setText('')
  }

  const deleteNote = key => {
    setListOfItems(list => {
      return list.filter(listOfItems => listOfItems.key != key)
    })
  }

  return (
    <View>
      <View style={styles.inputeBlock}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Введите заметку..."
        />
        <TouchableOpacity 
          style={styles.add} 
          onPress={() => addNewNote(text)}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        <View />
      </View>
      <FlatList
        data={listOfItems}
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <View style={styles.main}>
            <TouchableOpacity style={styles.list}>
              <Text>{item.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonEdit}>
              <Text>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => deleteNote(item.key)}
              style={styles.buttonDel}>
              <Text style={styles.del}>X</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default TodoList;
