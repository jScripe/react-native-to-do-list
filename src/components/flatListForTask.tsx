import React from "react";
import { FlatList, Text, View, Button, TouchableOpacity } from "react-native";
import { toDoListStyles } from "../styles";
import { Tasks } from "../models";

interface Props {
    tasks: Tasks[]
    deleteTask: (id: string) => any;
    clickOnTask: (id: string) => any;
}

const FlatListForTask = (props: Props) => {

    return (
        <FlatList
            data={props.tasks}
            renderItem={({item}) => (
                <View style={toDoListStyles.flatListItem}>
                    <View>
                        <Text>[v]</Text>
                    </View>
                    <TouchableOpacity onPress={() => {
                        props.clickOnTask(item.id);
                    }}>
                        <Text style={toDoListStyles.flatListItemText}>{item.title}</Text>
                    </TouchableOpacity>
                    <View style={toDoListStyles.flatListIconDelete}>
                        <Button title="X" onPress={() => {
                            props.deleteTask(item.id);
                        }} />
                    </View>
                </View>
            )}
        />
    )
}  

export default FlatListForTask;