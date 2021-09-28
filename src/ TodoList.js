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

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    marginHorizontal: '1%',
    marginTop: 10,
    justifyContent: 'center',
  },
  list: {
    backgroundColor: 'white',
    fontSize: 19,
    width: '73%',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#3949ab',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  buttonDel: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '12%',
    marginLeft: '1%',
    backgroundColor: 'red',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  buttonEdit: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '12%',
    marginLeft: '1%',
    backgroundColor: 'orange',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  del: {
    fontSize: 30,
    color: 'white',
  },
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
});

export default TodoList;
