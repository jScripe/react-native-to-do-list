import React from "react";
import { Component } from "react";
import { actions } from "../actions";
import { connect } from 'react-redux';
import DescriptionTitle from "../components/descriptionTitle";
import DescriptionBody from "../components/descriptionBody";
import { Tasks } from "../models";
import { View } from "react-native";

interface DescriptionTaskContainerProps {
    tasks: Tasks[]
    taskId: string
}

type DescriptionTaskContainerJoinedProps = DescriptionTaskContainerProps & {
    addTaskInToDoList: (text: string) => any;
    changeTitleTask: (text: string) => any;
    addBodyForDescription: (text: string) => any;
};

class DescriptionTaskContainer extends Component<DescriptionTaskContainerJoinedProps> {

    private text: string;
    
    public render() {
        return (
            <View>
                <DescriptionTitle
                    changeTitle={this.handleChangeTitleTask.bind(this)}
                    title={this.showTitleById()}
                    taskId={this.props.taskId}
                    addTask={this.handleAddTaskInToDo.bind(this)}
                />
                <DescriptionBody addBody={this.handleAddBodyForDescription.bind(this)} body={this.showBodyById()}/>
            </View>
           
            
        )
    }

    handleAddTaskInToDo(text: string) {
        this.props.addTaskInToDoList(text);
    }

    handleChangeTitleTask(text: string) {
        this.props.changeTitleTask(text);
    }

    handleAddBodyForDescription(text: string) {
        this.props.addBodyForDescription(text);
    }

    showTitleById() {
        if(this.props.taskId === "addTask") {
            return "";
        }
        const task = this.props.tasks.filter((item) => {
            return item.id === this.props.taskId;
        });
        return task[0].title;
    }

    showBodyById() {
        if(this.props.taskId === "addTask") {
            return "";
        }
        const task = this.props.tasks.filter((item) => {
            return item.id === this.props.taskId;
        })
        return task[0].body;
    }
}

function mapStateToProps(state: any) {
    return {
        tasks: state.toDoListReducers.tasks,
        taskId: state.toDoListReducers.taskId,
    }
}

export default connect(mapStateToProps, actions)(DescriptionTaskContainer);