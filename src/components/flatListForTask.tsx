import React from "react";
import { FlatList, Text, View, Button, TouchableOpacity } from "react-native";
import { toDoListStyles } from "../styles";

interface Props {
    tasks: Object[]
    deleteTask: (index: number) => any;
    clickOnTask: () => any;
}

const FlatListForTask = (props: Props) => {

    return (
        <FlatList
            data={props.tasks}
            renderItem={({item, index}) => (
                <View style={toDoListStyles.flatListItem}>
                    <View>
                        <Text>[v]</Text>
                    </View>
                    <TouchableOpacity onPress={props.clickOnTask}>
                        <Text style={toDoListStyles.flatListItemText}>{item.title}</Text>
                    </TouchableOpacity>
                    <View style={toDoListStyles.flatListIconDelete}>
                        <Button title="X" onPress={() => {
                            props.deleteTask(index);
                        }} />
                    </View>
                </View>
            )}
        />
    )
}  

export default FlatListForTask;