import React from "react";
import { Component } from "react";
import ToDoListContainer from "./toDoListContainer";

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