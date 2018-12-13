import React from "react";
import { FlatList, Text, View, Button } from "react-native";
import { toDoListStyles } from "../styles";

interface Props {
    tasks: object[]
}

const FlatListForTask = (props: Props) => {

    return (
        <FlatList
            data={props.tasks}
            renderItem={({item}) => (
                <View style={toDoListStyles.flatListItem}>
                    <Text style={toDoListStyles.flatListItemText}>{item.title}</Text>
                    <Button title="X" onPress={() => {}} />
                </View>
                
            )}
        />
    )
}  

export default FlatListForTask;