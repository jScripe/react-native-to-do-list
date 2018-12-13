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
        borderColor: "#303030",
        borderTopWidth: 2,
        width: "100%",
        marginTop: "auto",
        backgroundColor: "#EEEEEE",
        fontSize: 24
    },
    flatListItem: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 6
    },
    flatListItemText: {
        fontSize: 24
    }
})

export {
    toDoListStyles
}
