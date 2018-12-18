import React from "react";
import { Component } from "react";
import { Text } from "react-native";

interface DescriptionTaskContainerProps {

}

type DescriptionTaskContainerJoinedProps = DescriptionTaskContainerProps & {
    
};

class DescriptionTaskContainer extends Component<DescriptionTaskContainerJoinedProps> {
    public render() {
        return (
            <Text>description task</Text>
        )
    }
}

export default DescriptionTaskContainer;