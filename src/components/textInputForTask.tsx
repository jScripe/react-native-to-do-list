import React from "react";
import { TextInput } from "react-native";
import { toDoListStyles } from "../styles";

interface Props {
    addTask: (text: string) => any;
    changeText: (text: string) => any;
    textInInput: string;
}

const TextInputForTask = (props: Props) => {
    let textInput: any;

    return (
        <TextInput
            style={toDoListStyles.textInput}
            placeholder="Add Task"
            onChangeText={(text) => {
                props.changeText(text);
            }}
            onSubmitEditing={() => {
                props.addTask(props.textInInput);
                textInput.clear()
            }}
            ref={input => { textInput = input }}
        />
    );
}

export default TextInputForTask;