import React, {useState} from "react"
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles/TodoListStyles';
import CheckBox from "@react-native-community/checkbox";

const TodoItem = ({title}) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)  

    return(
        <TouchableOpacity style={styles.list}>
            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue) }
                />
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    ) 
}
export default TodoItem;