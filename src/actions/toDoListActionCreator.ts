import actionTypes from "./types/actionTypes";

const addTaskInToDoList = (taskText: string) => {
    return {
        type: actionTypes.ADD_TASK,
        title: taskText
    }
}

const changeTextInTextInput = (text: string) => {
    return {
        type: actionTypes.CHANGE_TEXT,
        text: text
    }
}

const deleteTaskInToDoList = (id: string) => {
    return {
        type: actionTypes.DELETE_TASK,
        id: id
    }
}

const setCurrentTaskId = (id: string) => {
    return {
        type: actionTypes.SET_ID,
        currentTaskId: id
    }
}

const changeTitleTask = (changeText: string) => {
    return {
        type: actionTypes.CHANGE_TITLE_TASK,
        title: changeText
    }
}

const addBodyForDescription = (text: string) => {
    return {
        type: actionTypes.ADD_BODY_FOR_DESCRIPTION,
        body: text
    }
}



export {
    addTaskInToDoList,
    changeTextInTextInput,
    deleteTaskInToDoList,
    setCurrentTaskId,
    changeTitleTask,
    addBodyForDescription
}