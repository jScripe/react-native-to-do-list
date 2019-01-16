import React from "react";
import { Component } from "react";
import { actions } from "../actions";
import { connect } from 'react-redux';
import { Tasks } from "../models";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { toDoListStyles } from "../styles";


interface DescriptionTaskContainerProps {
    tasks: Tasks[];
    taskId: string;
    navigation: any;
}

type DescriptionTaskContainerJoinedProps = DescriptionTaskContainerProps & {
    addTaskInToDoList: (text: string) => any;
    changeTitleTask: (text: string) => any;
    addBodyForDescription: (text: string) => any;
};

class DescriptionTaskContainer extends Component<DescriptionTaskContainerJoinedProps> {

    private textTitle: string = "";
    private textBody: string = "";
    private valueTitle: string = this.showTitleById();
    private valueBody: string = this.showBodyById();
    
    public render() {
        return (
            <View style={{flex: 1, justifyContent: "space-between"}}>
                <TextInput
                    style={toDoListStyles.descriptionTitle}
                    onChangeText={(text) => {
                        this.textTitle = text;
                    }}
                >
                {this.valueTitle}</TextInput>

                <TextInput
                    style={toDoListStyles.descriptionBody}
                    onChangeText={(text) => {
                        this.textBody = text;
                    }}
                    multiline
                >{this.valueBody}</TextInput>

                <TouchableOpacity onPress={this.handleClickOnButtonSave.bind(this)} style={{marginTop: "auto", marginBottom: 10, height: 50, width: 320, alignSelf: "center"}}>
                    <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#4ab69e", borderRadius: 30 }}><Text style={{fontSize: 18, color: "#fff"}}>Save</Text></View>
                </TouchableOpacity>
            </View>
           
            
        )
    }

    handleClickOnButtonSave() {
        if(this.textTitle === "") {
            this.textTitle = this.showTitleById();
        }
        if(this.props.taskId === "addTask") {
            this.handleAddTaskInToDo(this.textTitle);
        }
        if(this.textBody === "") {
            this.textBody = this.showBodyById();
        }
        this.handleChangeTitleTask(this.textTitle);
        this.handleAddBodyForDescription(this.textBody);
        this.textTitle = "";
        this.textBody = "";
        this.props.navigation.push("Home");
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