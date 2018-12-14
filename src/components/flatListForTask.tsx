import React from "react";
import { FlatList, Text, View, Button } from "react-native";
import { toDoListStyles } from "../styles";

interface Props {
    tasks: Object[]
    deleteTask: (index: number) => any;
}

const FlatListForTask = (props: Props) => {

    return (
        <FlatList
            data={props.tasks}
            renderItem={({item, index}) => (
                <View style={toDoListStyles.flatListItem}>
                    <Text style={toDoListStyles.flatListItemText}>{item.title}</Text>
                    <Button title="X" onPress={() => {
                        console.log(1111111111111111111, index);
                        props.deleteTask(index);
                    }} />
                </View>
                
            )}
        />
    )
}  

export default FlatListForTask;