import React from "react";
import { Component } from "react";
import ToDoListContainer from "./toDoListContainer";
import DescriptionTaskContainer from "./descriptionTaskContainer";
import { createStackNavigator } from "react-navigation";

interface AppContainerProps {

}

class AppContainer extends Component<AppContainerProps> {

    public render() {
        return (
            <ToDoListContainer/>
        )
    }
}



export default AppContainer;