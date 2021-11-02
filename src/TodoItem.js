import React, {useState} from "react"
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles/TodoListStyles';
import CheckBox from "@react-native-community/checkbox";

const TodoItem = ({item, deleteNote}) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)  

    return(
        <View style={styles.main}>
            <TouchableOpacity style={styles.list}>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue) }
                    />
                <View style={styles.textBlock}>
                    <Text style={styles.text}>{item.title}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonDel}
                onPress={() => deleteNote(item.id)}>
                <Text style={styles.del}>X</Text>
            </TouchableOpacity>   
        </View>
    ) 
}

export default TodoItem;