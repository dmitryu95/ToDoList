import React, {useState} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import AddNote from './AddNote';
  
const TodoList = () => {
    const [listOfItems, setListOfItems] = useState([]);

    /* text - то, что ввел пользователь */
    const addNewNote = (input) => {
        setListOfItems((list) => {
            return [
                { title: input, key: Math.random().toString(36).substr(2), complete: false },
                ...list                     //новый элемент + Добавить весь текущий список 
            ]
        })
    }

    const deleteNote = (key) => {
        setListOfItems((list) => {
            return(
                list.filter(listOfItems => listOfItems.key !=key)
            )
        })
    };

    /*const completeNote = (key) => {
        setListOfItems((list) => {
            return(

            )
        })
    }*/

    return (
        <View>
        <AddNote addNewNote={addNewNote} />
        <FlatList data={listOfItems} keyExtractor={item => item.key} renderItem={({item}) => (
                <View style={styles.main}>
                    <TouchableOpacity style={styles.list}>
                        <Text>{item.title}</Text>
                    </TouchableOpacity>
        
                    <TouchableOpacity style={styles.buttonEdit}>
                        <Text>Edit</Text>    
                    </TouchableOpacity>
        
                    <TouchableOpacity onPress={() => deleteNote(item.key)} style={styles.buttonDel}>
                        <Text style={styles.del}>X</Text>
                    </TouchableOpacity>
                </View>
            )} 
        />
        </View>
    )  
}

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
    }
})

export default TodoList;
