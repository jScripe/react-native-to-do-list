import React from "react";
import { FlatList, Text, View, TouchableOpacity, Image } from "react-native";
import { toDoListStyles } from "../styles";
import { Tasks } from "../models";

interface Props {
    tasks: Tasks[]
    deleteTask: (id: string) => any;
    clickOnTask: (id: string) => any;
    clickOnCheckBox: (id: string) => any;
    selectedValue: string;
}

const FlatListForTask = (props: Props) => {

    return (
        <FlatList
            data={props.tasks.filter((item) => {
                if(props.selectedValue === "done") {
                    return item.checked === true;
                }
                if(props.selectedValue === "open") {
                    return item.checked === false;
                } else {
                    return true;
                }
            })}
            renderItem={({item}) => (
                <View style={toDoListStyles.flatListItem}>
                    <View>
                        <TouchableOpacity onPress={() => {
                            props.clickOnCheckBox(item.id);
                        }}>
                            {item.checked 
                                ? <Image
                                    style={toDoListStyles.iconDone}
                                    source={require("../../static/done-icon.png")}
                                />  
                                : <Image
                                    style={toDoListStyles.iconOpen}
                                    source={require("../../static/open-icon.png")}
                                />  
                            }
                                           
                        </TouchableOpacity>
                    </View>
                    <Text style={toDoListStyles.flatListItemText}>{item.title}</Text>
                    <View style={toDoListStyles.flatListIconWrite}>
                        <TouchableOpacity onPress={() => {
                            props.clickOnTask(item.id);
                        }}>
                            <Image 
                                style={toDoListStyles.iconWrite}
                                source={require("../../static/write-icon.png")}
                            />
                        </TouchableOpacity>
                    </View>
                    
                    <View style={toDoListStyles.flatListIconDelete}>
                        <TouchableOpacity
                            onPress={() => {
                                props.deleteTask(item.id)
                            }}
                        >
                            <Image
                                style={toDoListStyles.iconDelete}
                                source={require("../../static/delete-icon.png")}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        />
    )
}  

export default FlatListForTask;