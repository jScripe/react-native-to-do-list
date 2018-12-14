import actionTypes from "./types/actionTypes";

const addTaskInToDoList = (taskText: string) => {
    return {
        type: actionTypes.ADD_TASK,
        task: taskText
    }
}

const changeTextInTextInput = (text: string) => {
    return {
        type: actionTypes.CHANGE_TEXT,
        text: text
    }
}

const deleteTaskInToDoList = (index: number) => {
    return {
        type: actionTypes.DELETE_TASK,
        index: index
    }
}

export {
    addTaskInToDoList,
    changeTextInTextInput,
    deleteTaskInToDoList
}