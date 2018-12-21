import { StyleSheet } from "react-native";


const toDoListStyles = StyleSheet.create({
    toDoWrapper: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#E0E0E0"
    },
    textInput: {
        height: 60,
        paddingRight: 10,
        paddingLeft: 10,
        borderColor: "#8D8D8D",
        borderTopWidth: 2,
        width: "100%",
        marginTop: "auto",
        backgroundColor: "#EEEEEE",
        fontSize: 24
    },
    flatListItem: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        margin: 6,
        paddingBottom: 5,
        borderBottomColor: "#8D8D8D",
        borderBottomWidth: 1
    },
    flatListItemText: {
        fontSize: 24,
        paddingLeft: 10,
        paddingRight: 5,
        marginRight: 40
    },
    flatListIconDelete: {
        marginLeft: "auto"
    }
})

export {
    toDoListStyles
}

