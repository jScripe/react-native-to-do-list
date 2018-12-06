import actionTypes from "./types/actionTypes";

const updateTaskInToDoList = (updateText: string) => {
    return {
        type: actionTypes.UPDATE_TASK,
        task: updateText
    }
}

export default updateTaskInToDoList;