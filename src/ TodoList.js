import React, {useState} from 'react';
import { View, TouchableOpacity, Text, FlatList, TextInput} from 'react-native';
import { styles } from './styles/TodoListStyles';
import CheckBox from '@react-native-community/checkbox';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [listOfItems, setListOfItems] = useState([]);
  const [text, setText] = useState('');
  const [completeTask, setCompleteTask] = useState(false)

  /* text - то, что ввел пользователь */
  const addNewNote = text => {
    setListOfItems(list => {
      return [
        { 
          title: text, 
          id: Math.random().toString(36).substr(2), 
        },
        ...list,
      ]
    })
    setText('')
  }

  const renderItem = ({item}) => {
    return(
      <View style={styles.main}> 
        <TodoItem title={item.title}/>
        
  { /*/////// кнопка редактированить  ///////////*/}
        <TouchableOpacity style={styles.buttonEdit}
          onPress={() => editItem()}>
          <Text>Edit</Text>
        </TouchableOpacity>

  { /*/////// кнопка удалить  ///////////*/}
        <TouchableOpacity style={styles.buttonDel}
          onPress={() => deleteNote(item.id)}>
          <Text style={styles.del}>X</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const editItem = () => {
    
  }

  const deleteNote = id => {
    setListOfItems(list => {
      return list.filter(listOfItems => listOfItems.id != id)
    })
  }

  return (
    <View>
      <View style={styles.inputeBlock}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Введите заметку..."/>

        <TouchableOpacity 
          style={styles.add} 
          onPress={() => addNewNote(text)}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={listOfItems}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default TodoList;
