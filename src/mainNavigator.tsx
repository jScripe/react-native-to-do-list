import ToDoListContainer from "./containers/toDoListContainer";
import DescriptionTaskContainer from "./containers/descriptionTaskContainer";
// @ts-ignore
import { createStackNavigator, createAppContainer } from "react-navigation";

const MainNavigator = createStackNavigator({
    ToDoList: {
        screen: ToDoListContainer,
        navigationOptions: () => ({
            title: "TO DO LIST",
            headerStyle: {
                backgroundColor: "blue"
            }
        })
    },
    DescriptionTask: {
        screen: DescriptionTaskContainer,
        navigationOptions: () => ({
            title: "DESCRIPTION TASK",
            headerStyle: {
                backgroundColor: "blue" 
            }
        })
    }
}); 

export default createAppContainer(MainNavigator);