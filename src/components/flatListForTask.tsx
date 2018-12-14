import React from "react";
import { FlatList, Text, View, Button } from "react-native";
import { toDoListStyles } from "../styles";

interface Props {
    tasks: object[]
    deleteTask: (index: number) => any;
}

const FlatListForTask = (props: Props) => {

    return (
        <FlatList
            data={props.tasks}
            renderItem={({item, index}) => (
                <View style={toDoListStyles.flatListItem}>
                    <Text style={toDoListStyles.flatListItemText}>{item.title}</Text>
                    <Button title="X" onPress={() => {}} />
                </View>
                
            )}
        />
    )
}  

export default FlatListForTask;