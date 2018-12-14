import React from "react";
import { View, Alert } from "react-native";
import { Component } from "react";
import TextInputForTask from "../components/textInputForTask";
import FlatListForTask from "../components/flatListForTask";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toDoListStyles } from "../styles/index";

import addTaskInToDoList from "../actions/addTaskActionCreator";
import changeTextInTextInput from "../actions/changeTextActionCreator";


interface Props {
    tasks: object[];
    text: string;
}

type JoinedProps = Props & {actions: {
        addTaskInToDoList: (task: string) => any;
        changeTextInTextInput: (text: string) => any;
        deleteTaskInToDoList: (index: number) => any;
    }
}

class ToDoListContainer extends Component<JoinedProps> {

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
            this.props.actions.addTaskInToDoList(text);
            this.props.actions.changeTextInTextInput("");
        } else {
            Alert.alert("The input field cannot be empty")
        }
    }

    handleChangeTextInTextInput(text: string) {
        this.props.actions.changeTextInTextInput(text);
    }

    handleDeleteTask(index: number) {
        this.props.actions.deleteTaskInToDoList(index);
    }
}

function mapStateToProps(state: any) {
    return {
        tasks: state.addTask.tasks,
        text: state.changeText.text
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators({
        addTaskInToDoList,
        changeTextInTextInput,
    }, dispatch)
});



export default connect(mapStateToProps, mapDispatchToProps)(ToDoListContainer);