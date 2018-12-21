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

const deleteTaskInToDoList = (id: string) => {
    return {
        type: actionTypes.DELETE_TASK,
        id: id
    }
}

const setTaskId = (id: string) => {
    return {
        type: actionTypes.SET_ID,
        taskId: id
    }
}

export {
    addTaskInToDoList,
    changeTextInTextInput,
    deleteTaskInToDoList,
    setTaskId
}