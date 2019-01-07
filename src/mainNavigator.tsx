import React from "react";
import  { Component } from "react";
import ToDoListContainer from "./containers/toDoListContainer";
import DescriptionTaskContainer from "./containers/descriptionTaskContainer";
// @ts-ignore
import { createStackNavigator, createAppContainer } from "react-navigation";

const MainNavigator = createStackNavigator(
    {
        Home: {
            screen: ToDoListContainer,
            navigationOptions: {
                title: "To do",
                headerStyle: {
                    backgroundColor: "#4ab69e"
                },
                headerTintColor: "#fff",
            }
        },
        Description: {
            screen: DescriptionTaskContainer,
            navigationOptions: {
                title: "Description task",
                headerStyle: {
                    backgroundColor: "#4ab69e"
                },
                headerTintColor: "#fff",
            }
        }
    },
    {
        initialRouteName: "Home"
    }
); 

const AppContainer = createAppContainer(MainNavigator);

class App extends Component<{}> {
    render() {
        return <AppContainer />;
    }   
}

export default App;