import React from "react";
import { Component } from "react";
import { actions } from "../actions";
import { connect } from 'react-redux';
import { Tasks } from "../models";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { toDoListStyles } from "../styles";
import ImagePicker from "react-native-image-picker";
import { getCurrentTask } from "../selectors/toDoListSelectors";
// @ts-ignore
import { CachedImage } from 'react-native-cached-image';


interface DescriptionTaskContainerProps {
    task: Tasks;
    navigation: any;
    pathFoto: string;
}

type DescriptionTaskContainerJoinedProps = DescriptionTaskContainerProps & {
    addTaskInToDoList: (title: string, body: string) => any;
    changeTitleTask: (text: string, id: string) => any;
    addBodyForDescription: (text: string, id: string) => any;
    changeFoto: (uri: any, id: string, pathFoto: string) => any;
    addPathFoto: (uri: any) => any;
};

class DescriptionTaskContainer extends Component<DescriptionTaskContainerJoinedProps> {
    
    private textTitle: string = "";
    private textBody: string = "";
    private title: string = this.props.task.title || "";
    private body: string = this.props.task.body || "";

    public render() {
        return (
            <View style={{flex: 1, justifyContent: "space-between"}}>
                <TextInput
                    style={toDoListStyles.descriptionTitle}
                    onChangeText={(text) => {
                        this.textTitle = text;
                    }}
                >
                {this.title}</TextInput>

                <TextInput
                    style={toDoListStyles.descriptionBody}
                    onChangeText={(text) => {
                        this.textBody = text;
                    }}
                    multiline
                >{this.body}</TextInput>

                <View style={{position: "relative", bottom: 10, width: "100%", height: "50%"}}>
                    <CachedImage style={{width: "100%", height: "90%"}} source={ this.showFoto() }></CachedImage>
                </View>
                
                <TouchableOpacity 
                    onPress={this.handleOpenSourceDialog.bind(this)}
                    style={{position: "absolute", bottom: 95, right: 10, backgroundColor: "#fff",  borderColor: "#4ab69e", borderRadius: 20, borderWidth: 2 }}
                >
                        <Text style={{padding: 5}}>Add Foto</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={this.handleClickOnButtonSave.bind(this)} style={toDoListStyles.wrapperButtonSave}>
                    <View style={toDoListStyles.buttonSave}><Text style={toDoListStyles.textButtonSave}>Save</Text></View>
                </TouchableOpacity>
            </View>
        )

    }

    handleOpenSourceDialog() {
        ImagePicker.showImagePicker({}, (response: any) => {
            if (!response.didCancel && !response.error) {
                this.props.addPathFoto(response.path);
                this.props.changeFoto(response.path, this.props.navigation.state.params.currentId, this.props.task.pathFoto);
            } else if (response.error) {
                console.log(response.error);
            }
        })
    }

    handleClickOnButtonSave() {
        if(this.textTitle === "") {
            this.textTitle = this.props.task.title;
        }
        if(this.textBody === "") {
            this.textBody = this.props.task.body;
        }
        if(this.props.navigation.state.params.currentId === null) {
            this.handleAddTaskInToDo(this.textTitle, this.textBody);
        }
        this.props.changeTitleTask(this.textTitle, this.props.navigation.state.params.currentId);
        this.props.addBodyForDescription(this.textBody, this.props.navigation.state.params.currentId);
        this.textTitle = "";
        this.textBody = "";
        this.props.navigation.replace("Home");
    }

    handleAddTaskInToDo(title: string, body: string) {
        this.props.addTaskInToDoList(title, body);
    }

    showFoto() {
        return this.props.task.pathFoto ? {uri: this.props.task.pathFoto} : require("../../static/full.png");
    }

}

function mapStateToProps(state: any, props: any) {
    return {
        task: getCurrentTask(state, props),
    }
}

export default connect(mapStateToProps, actions)(DescriptionTaskContainer);