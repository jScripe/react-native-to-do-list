import React from "react";
import { Picker, View } from "react-native";
import  { Component } from "react";
import ToDoListContainer from "./containers/toDoListContainer";
import DescriptionTaskContainer from "./containers/descriptionTaskContainer";
import WebView from "./components/webView";
// @ts-ignore
import { createStackNavigator, createAppContainer } from "react-navigation";

const MainNavigator = createStackNavigator(
    {
        Home: {
            screen: ToDoListContainer,
            navigationOptions: (options: any) => {
                return {       
                    title: "To do",
                    headerStyle: {
                        backgroundColor: "#4ab69e"
                    },
                    headerLeft: null,
                    headerTintColor: "#fff",
                    headerRight: (
                        <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
                            <Picker
                                selectedValue={() => {
                                    if(options.navigation.state.params.currentSelectedValue === undefined) {
                                        return "";
                                    }
                                    console.log(1111111111111111, options.navigation.state.params.currentSelectedValue());
                                    options.navigation.state.params.currentSelectedValue()
                                }}
                                style={{ height: 50, width: 120 }}
                                mode="dropdown"
                                onValueChange={(itemValue) => {
                                    options.navigation.state.params.changeSelectedValue(itemValue);
                                }}>
                                <Picker.Item label="sort" value="sort" color="#2b2b2b"/>
                                <Picker.Item label="all" value="all" color="#2b2b2b"/>
                                <Picker.Item label="open" value="open" color="#2b2b2b"/>
                                <Picker.Item label="done" value="done" color="#2b2b2b"/>
                            </Picker>
                            <WebView></WebView>
                        </View>
                        
                    )
                }
            } 
        },
        Description: {
            screen: DescriptionTaskContainer,
            navigationOptions: (options: any) => {
                return {
                    title: "Description task",
                    headerStyle: {
                        backgroundColor: "#4ab69e"
                    },
                    headerTintColor: "#fff",
                    headerRight: (
                        <View>
                            <WebView></WebView>
                        </View>
                    ) 
                }
                
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