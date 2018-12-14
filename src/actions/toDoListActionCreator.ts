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

export {
    addTaskInToDoList,
    changeTextInTextInput,
}