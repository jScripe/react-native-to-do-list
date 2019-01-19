import React from "react";
import { Component } from "react";
import { actions } from "../actions";
import { connect } from 'react-redux';
import { Tasks } from "../models";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { toDoListStyles } from "../styles";
import ImagePicker from "react-native-image-picker";



interface DescriptionTaskContainerProps {
    tasks: Tasks[];
    taskId: string;
    navigation: any;
}

type DescriptionTaskContainerJoinedProps = DescriptionTaskContainerProps & {
    addTaskInToDoList: (text: string) => any;
    changeTitleTask: (text: string) => any;
    addBodyForDescription: (text: string) => any;
    changeFoto: (uri: any) => any;
};

class DescriptionTaskContainer extends Component<DescriptionTaskContainerJoinedProps> {
    
    private textTitle: string = "";
    private textBody: string = "";
    private valueTitle: string = this.showTitleById();
    private valueBody: string = this.showBodyById();
    private pathFoto: any = this.showFotoById();

    componentWillUpdate() {
        this.pathFoto = this.showFotoById();
    }
    
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

                <View style={{position: "absolute", bottom: 60, width: "100%", height: "50%"}}>
                    <Image style={{width: "100%", height: "90%"}} source={this.pathFoto}></Image>
                </View>
                
                <TouchableOpacity 
                    onPress={this.handleTest.bind(this)}
                    style={{position: "absolute", bottom: 30, right: 10}}>
                        <Text>Ulala</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={this.handleClickOnButtonSave.bind(this)} style={toDoListStyles.wrapperButtonSave}>
                    <View style={toDoListStyles.buttonSave}><Text style={toDoListStyles.textButtonSave}>Save</Text></View>
                </TouchableOpacity>
            </View>
        )
    }

    handleTest() {
        ImagePicker.showImagePicker({}, (response: any) => {
            if (!response.didCancel && !response.error) {
                this.props.changeFoto(response.uri);
            } else if (response.error) {
                console.log(response.error);
            }
        })
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

    showFotoById() {
        if(this.props.taskId === "addTask") {
            return require("../../static/full.png");
        }
        const task = this.props.tasks.filter((item) => {
            return item.id === this.props.taskId;
        })
        if(task[0].pathFoto === undefined) {
            return require("../../static/full.png");
        } else {
            return {uri: task[0].pathFoto};
        }
    }
}

function mapStateToProps(state: any) {
    console.log(111111111111111, state);
    return {
        tasks: state.toDoListReducers.tasks,
        taskId: state.toDoListReducers.taskId,
    }
}

export default connect(mapStateToProps, actions)(DescriptionTaskContainer);