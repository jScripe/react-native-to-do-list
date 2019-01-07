import { StyleSheet } from "react-native";


const toDoListStyles = StyleSheet.create({
    toDoWrapper: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#E0E0E0"
    },
    flatListItem: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        margin: 6,
        paddingBottom: 10,
    },
    flatListItemText: {
        fontSize: 24,
        paddingLeft: 10,
        paddingRight: 5,
        marginRight: 40
    },
    flatListIconDelete: {
        marginLeft: "auto"
    },
    descriptionTitle: {
        backgroundColor: "#f1fffb",
        borderBottomWidth: 3,
        borderBottomColor: "#defff6",
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    descriptionBody: {
        height: "100%",
        backgroundColor: "#f1fffb",
        paddingLeft: 10,
        paddingRight: 10,
        textAlignVertical: "top",
    },
    touchableIconAdd: {
        position: "absolute",
        width: 80,
        height: 80,
        right: 10,
        bottom: 10
    },
    iconAdd: {
        width: 80, 
        height: 80,
    },
    iconDelete: {
        width: 32,
        height: 32,
    },
    iconDone: {
        width: 32,
        height: 32,
        marginRight: 10
    }
})

export {
    toDoListStyles
}

