import { handleActions } from "redux-actions";
import { handlerWrapper } from "../utils/reducerUtils";
import actionTypes from "../actions/types/actionTypes";
import { actions } from "../actions";
import { generateId } from "../utils/generateId";
import { Tasks } from "../models";
import { func } from "prop-types";

interface ToDoListStore {
    tasks: Tasks[]
    text: string;
    taskId: string;
}

const initialState: ToDoListStore = {
    tasks: [],
    text: "",
    taskId: ""
}

function handleAddTask(
    state: ToDoListStore, 
    action: ReturnType<typeof actions.addTaskInToDoList>
): ToDoListStore {
    const id: string = generateId();
    return {
        ...state,
        tasks: state.tasks.concat([{id: id, title: action.title}]),
        taskId: id
    }
}

function handleChangeText(
    state: ToDoListStore,
    action: ReturnType<typeof actions.changeTextInTextInput>
): ToDoListStore {
    return {
        ...state,
        text: action.text
    }
}

function handleDeleteTask(
    state: ToDoListStore,
    action: ReturnType<typeof actions.deleteTaskInToDoList>
): ToDoListStore {
    const tasks = state.tasks.filter((item) => {
        return !(item.id === action.id)
    });
    return {
        ...state,
        tasks: tasks
    }
}

function handleSetTaskId(
    state: ToDoListStore,
    action: ReturnType<typeof actions.setCurrentTaskId>
): ToDoListStore {
    return {
        ...state,
        taskId: action.currentTaskId
    }
}

function handleChangeTitleTask(
    state: ToDoListStore,
    action: ReturnType<typeof actions.changeTitleTask>
): ToDoListStore {
    const tasks = [...state.tasks];
    tasks.forEach((item) => {
        if(item.id === state.taskId) {
            item.title = action.title
        }
    });
    return {
        ...state,
        tasks: tasks
    }
}

function handleAddBodyForDescription(
    state: ToDoListStore,
    action: ReturnType<typeof actions.addBodyForDescription>
): ToDoListStore {
    const tasks = [...state.tasks];
    tasks.forEach((item) => {
        if(item.id === state.taskId) {
            item.body = action.body
        }
    });
    return {
        ...state,
        tasks: tasks
    }
}

const toDoListReducers = handleActions<ToDoListStore, any>(
    {
        [actionTypes.ADD_TASK]: handlerWrapper(handleAddTask),
        [actionTypes.CHANGE_TEXT]: handlerWrapper(handleChangeText),
        [actionTypes.DELETE_TASK]: handlerWrapper(handleDeleteTask),
        [actionTypes.SET_ID]: handlerWrapper(handleSetTaskId),
        [actionTypes.CHANGE_TITLE_TASK]: handlerWrapper(handleChangeTitleTask),
        [actionTypes.ADD_BODY_FOR_DESCRIPTION]: handlerWrapper(handleAddBodyForDescription)
    },
    initialState
)

export { toDoListReducers };