import React from "react";
import { View, Alert } from "react-native";
import { Component } from "react";
import TextInputForTask from "../components/textInputForTask";
import FlatListForTask from "../components/flatListForTask";
import { connect } from 'react-redux';
import { actions } from "../actions";
import { toDoListStyles } from "../styles/index";


interface ToDoListContainerProps {
    tasks: object[];
    text: string;
}

type ToDoListContainerPropsJoinedProps = ToDoListContainerProps & {
    addTaskInToDoList: (text: string) => any;
    changeTextInTextInput: (text: string) => any;
};

class ToDoListContainer extends Component<ToDoListContainerPropsJoinedProps> {

    public render() {
        return (
            <View style={toDoListStyles.toDoWrapper}>
                <FlatListForTask tasks={this.props.tasks} deleteTask={this.handleDeleteTask.bind(this)}/>
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

    handleDeleteTask(index: number) {
        // this.props.deleteTaskInToDoList(index);
    }
}

function mapStateToProps(state: any) {
    return {
        tasks: state.toDoListReducers.tasks,
        text: state.toDoListReducers.text
    }
}

export default connect(mapStateToProps, actions)(ToDoListContainer);