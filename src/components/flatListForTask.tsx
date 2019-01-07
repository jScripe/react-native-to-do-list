import React from "react";
import { FlatList, Text, View, Button, TouchableOpacity, Image } from "react-native";
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
                    <TouchableOpacity>
                            <Image
                                style={toDoListStyles.iconDone}
                                source={require('../../static/done-icon.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => {
                        props.clickOnTask(item.id);
                    }}>
                        <Text style={toDoListStyles.flatListItemText}>{item.title}</Text>
                    </TouchableOpacity>
                    <View style={toDoListStyles.flatListIconDelete}>
                        <TouchableOpacity
                            onPress={() => {
                                props.deleteTask(item.id)
                            }}
                        >
                            <Image
                                style={toDoListStyles.iconDelete}
                                source={require('../../static/delete-icon.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        />
    )
}  

export default FlatListForTask;