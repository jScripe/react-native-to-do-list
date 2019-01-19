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
        height: "30%",
        backgroundColor: "#f1fffb",
        borderTopWidth: 3,
        borderColor: "#defff6",
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
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
    },
    container: {
        flex: -1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        position: 'relative',
        borderTopWidth: 1,
        borderTopColor: '#8294a0',
        borderBottomWidth: 1,
        borderBottomColor: '#8294a0',
    },
        titleContainer:{
        flex: 1,
        borderRightWidth: 1,
        borderRightColor: '#8294a0'
    },
        title:{
        marginTop: 12,
        marginBottom: 5,
        marginRight: 5,
        color: 'black',
        fontWeight: '500',
        textAlign: 'right'
    },
        summaryContainer: {
        flex: 1.5,
        flexDirection: 'row',
        marginTop: 12
    },
        summary: {
        marginLeft: 20,
        marginRight: 10
    },
        icon: {
        marginTop: -6
    },
        tempContainer: {
        flex: .5,
        flexDirection: 'column',
        marginTop: 3,
        marginRight: 15,
        alignItems: 'flex-end'
    },
        precipImage: {
        marginTop: 3
    },
        spinner: {
        flex: -1,
        marginTop: 12,
        marginBottom: 12
    },
    wrapperButtonSave: {
        marginTop: "auto", 
        marginBottom: 10, 
        height: 50, 
        width: 320, 
        alignSelf: "center"
    },
    buttonSave: {
        flex: 1, 
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "center", 
        backgroundColor: "#4ab69e", 
        borderRadius: 30
    },
    textButtonSave: {
        fontSize: 18, 
        color: "#fff"
    }
})

export {
    toDoListStyles
}

