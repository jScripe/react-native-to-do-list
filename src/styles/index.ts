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
        marginRight: 105
    },
    flatListIconDelete: {
        // marginLeft: "auto"
    },
    flatListIconWrite: {
        marginLeft: "auto",
        marginRight: 10
    },
    descriptionTitle: {
        borderBottomWidth: 3,
        borderBottomColor: "#defff6",
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    descriptionBody: {
        height: "84%",
        backgroundColor: "#f1fffb",
        borderWidth: 3,
        borderColor: "#defff6",
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
    iconOpen: {
        width: 32,
        height: 32,
        marginRight: 10
    },
    iconDone: {
        width: 36,
        height: 36,
        marginRight: 6,
        marginTop: -4
    },
    iconWrite: {
        width: 32,
        height: 32,
    },
    iconBrowser: {
        width: 32,
        height: 32,
        marginLeft: 10,
        marginRight: 10,
    }
})

export {
    toDoListStyles
}

