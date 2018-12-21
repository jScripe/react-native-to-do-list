import React from "react";
import { View, Alert, Button } from "react-native";
import { Component } from "react";
import TextInputForTask from "../components/textInputForTask";
import FlatListForTask from "../components/flatListForTask";
import { connect } from 'react-redux';
import { actions } from "../actions";
import { toDoListStyles } from "../styles/index";


interface ToDoListContainerProps {
    tasks: Object[];
    text: string;
    navigation: any;
}

type ToDoListContainerJoinedProps = ToDoListContainerProps & {
    addTaskInToDoList: (text: string) => any;
    changeTextInTextInput: (text: string) => any;
    deleteTaskInToDoList: (id: string) => any;
    setTaskId: (id: string) => any;
};

class ToDoListContainer extends Component<ToDoListContainerJoinedProps> {

    public render() {
        return (
            <View style={toDoListStyles.toDoWrapper}>
                <FlatListForTask tasks={this.props.tasks} deleteTask={this.handleDeleteTask.bind(this)} clickOnTask={this.handleClickOnTask.bind(this)}/>
                <TextInputForTask
                    addTask={this.handleAddTaskInToDo.bind(this)}
                    changeText={this.handleChangeTextInTextInput.bind(this)}
                    textInInput={this.props.text}
                />
            </View>
        )
    }
    
    handleAddTaskInToDo(text: string) {
        if(this.props.text) {
            this.props.addTaskInToDoList(text);
            this.props.changeTextInTextInput("");
        } else {
            Alert.alert("The input field cannot be empty")
        }
    }

    handleChangeTextInTextInput(text: string) {
        this.props.changeTextInTextInput(text);
    }

    handleDeleteTask(id: string) {
        this.props.deleteTaskInToDoList(id);
    }

    handleClickOnTask(id: string) {
        this.props.navigation.push("Description");
        this.props.setTaskId(id)
    }
}

function mapStateToProps(state: any) {
    return {
        tasks: state.toDoListReducers.tasks,
        text: state.toDoListReducers.text
    }
}

export default connect(mapStateToProps, actions)(ToDoListContainer);