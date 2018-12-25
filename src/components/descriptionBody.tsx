import React from "react";
import { TextInput } from "react-native";
import { toDoListStyles } from "../styles";

interface Props {
    addBody: (text: string) => any;
    body: string;
}

const DescriptionBody = (props: Props) => {
    let textInput: string = "";

    return (
        <TextInput
            style={toDoListStyles.descriptionBody}
            onChangeText={(text) => {
                textInput = text;
            }}
            onSubmitEditing={() => {
                if(textInput === "") {
                    textInput = props.body;
                }
                props.addBody(textInput);
                textInput = "";
            }}
        >{props.body}</TextInput>
    );
}

export default DescriptionBody;