import React from "react";
import { Component } from "react";
import { View } from "react-native";

interface DescriptionTaskContainerProps {

}

type DescriptionTaskContainerJoinedProps = DescriptionTaskContainerProps & {
    
};

class DescriptionTaskContainer extends Component<DescriptionTaskContainerJoinedProps> {
    public render() {
        return (
            <View>description task</View>
        )
    }
}

export default DescriptionTaskContainer;