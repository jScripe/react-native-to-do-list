import React from "react";
import { TextInput } from "react-native";
import { toDoListStyles } from "../styles";

interface Props {
    changeTitle: (text: string) => any;
    addTask: (text: string) => any;
    title: string;
    taskId: string;
}

const DescriptionTitle = (props: Props) => {
    let textInput: string = "";

    return (
        <TextInput
            style={toDoListStyles.descriptionTitle}
            onChangeText={(text) => {
                textInput = text;
            }}
            onSubmitEditing={() => {
                if(textInput === "") {
                    textInput = props.title;
                }
                if(props.taskId === "addTask") {
                    props.addTask(textInput);
                }
                props.changeTitle(textInput);
                textInput = "";
            }}
        >{props.title}</TextInput>
    );
}

export default DescriptionTitle;