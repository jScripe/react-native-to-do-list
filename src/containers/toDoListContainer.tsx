import React from "react";
import { View, TouchableOpacity, Image, Button } from "react-native";
import { Component } from "react";
import FlatListForTask from "../components/flatListForTask";
import { connect } from 'react-redux';
import { actions } from "../actions";
import { toDoListStyles } from "../styles/index";
import { Tasks, InfoWeather } from "../models";
import WeatherView from '../components/weatherView';



interface ToDoListContainerProps {
    tasks: Tasks[]
    navigation: any;
    selectedValue: string;
    infoWeather: InfoWeather;
}

type ToDoListContainerJoinedProps = ToDoListContainerProps & {
    deleteTaskInToDoList: (id: string) => any;
    changeCheckedFlag: (id: string) => any;
    changeSelectedValue: (selectedValue: string) => {};
    getInfoForWeather: (api: string, lat: string, lng: string) => any;
};

class ToDoListContainer extends Component<ToDoListContainerJoinedProps> {

    componentDidMount() {
        this.props.navigation.setParams({
            currentSelectedValue: this.getCurrentSelectedValue.bind(this),
            changeSelectedValue: this.props.changeSelectedValue
        });
        this.props.getInfoForWeather("7ceed1a3246229e2382e445760321ca4", "56.84976", "53.20448");
    }

    componentWillMount() {
        console.disableYellowBox = true;
    }

    public render() {
        return (
                <View style={toDoListStyles.toDoWrapper}>
                    <WeatherView 
                        location="Izhevsk"
                        summary={this.props.infoWeather.summary}
                        icon={this.props.infoWeather.icon}
                        temp={this.props.infoWeather.temp}
                        precipChance={this.props.infoWeather.precipChance}
                    ></WeatherView>
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
        this.props.navigation.push("Description", { currentId: id });
    }

    handleClickOnIconAdd() {
        this.props.navigation.push("Description", { currentId: null });
    }

    handleClickOnCheckBox(id: string) {
        this.props.changeCheckedFlag(id);
    }

    getCurrentSelectedValue() {
        return this.props.selectedValue;
    }
}

function mapStateToProps(state: any) {
    return {
        tasks: state.toDoListReducers.tasks,
        selectedValue: state.toDoListReducers.selectedValue,
        infoWeather: state.toDoListReducers.infoWeather,
    }
}

export default connect(mapStateToProps, actions)(ToDoListContainer);