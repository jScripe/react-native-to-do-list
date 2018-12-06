import actionTypes from "./types/actionTypes";

const addTaskInToDoList = (taskText: string) => {
    return {
        type: actionTypes.ADD_TASK,
        task: taskText
    }
}

export default addTaskInToDoList;