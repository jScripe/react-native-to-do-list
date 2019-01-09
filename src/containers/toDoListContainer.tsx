import React from "react";
import { View, TouchableOpacity, Image, Button } from "react-native";
import { Component } from "react";
import FlatListForTask from "../components/flatListForTask";
import { connect } from 'react-redux';
import { actions } from "../actions";
import { toDoListStyles } from "../styles/index";
import { Tasks } from "../models";


interface ToDoListContainerProps {
    tasks: Tasks[]
    text: string;
    navigation: any;
    selectedValue: string;
}

type ToDoListContainerJoinedProps = ToDoListContainerProps & {
    deleteTaskInToDoList: (id: string) => any;
    setCurrentTaskId: (id: string) => any;
    changeCheckedFlag: () => any;
    changeSelectedValue: (selectedValue: string) => {};
};

class ToDoListContainer extends Component<ToDoListContainerJoinedProps> {

    componentDidMount() {
        this.props.navigation.setParams({
            currentSelectedValue: this.getCurrentSelectedValue.bind(this),
            changeSelectedValue: this.props.changeSelectedValue
        })
    }

    public render() {
        return (
                <View style={toDoListStyles.toDoWrapper}>
                    <FlatListForTask 
                        tasks={this.props.tasks} 
                        deleteTask={this.handleDeleteTask.bind(this)} 
                        clickOnTask={this.handleClickOnTask.bind(this)} 
                        clickOnCheckBox={this.handleClickOnCheckBox.bind(this)}
                        selectedValue={this.props.selectedValue}
                    />
                    <TouchableOpacity
                        style={toDoListStyles.touchableIconAdd}
                        onPress={this.handleClickOnIconAdd.bind(this)}
                    >
                        <Image
                            style={toDoListStyles.iconAdd}
                            source={require('../../static/circle-add-icon.png')}
                        />
                    </TouchableOpacity>
                </View>   
        )
    }

    handleDeleteTask(id: string) {
        this.props.deleteTaskInToDoList(id);
    }

    handleClickOnTask(id: string) {
        this.props.navigation.push("Description");
        this.props.setCurrentTaskId(id);
    }

    handleClickOnIconAdd() {
        this.props.navigation.push("Description");
        this.props.setCurrentTaskId("addTask");
    }

    handleClickOnCheckBox(id: string) {
        this.props.setCurrentTaskId(id);
        this.props.changeCheckedFlag();
    }

    getCurrentSelectedValue() {
        return this.props.selectedValue;
    }
}

function mapStateToProps(state: any) {
    return {
        tasks: state.toDoListReducers.tasks,
        text: state.toDoListReducers.text,
        selectedValue: state.toDoListReducers.selectedValue
    }
}

export default connect(mapStateToProps, actions)(ToDoListContainer);