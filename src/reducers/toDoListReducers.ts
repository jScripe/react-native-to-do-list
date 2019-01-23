import { handleActions } from "redux-actions";
import { handlerWrapper } from "../utils/reducerUtils";
import actionTypes from "../actions/types/actionTypes";
import { actions } from "../actions";
import { generateId } from "../utils/generateId";
import { Tasks, InfoWeather } from "../models";
import { func } from "prop-types";

interface ToDoListStore {
    tasks: Tasks[]
    text: string;
    selectedValue: string;
    infoWeather: InfoWeather
}

const initialState: ToDoListStore = {
    tasks: [],
    text: "",
    selectedValue: "sort",
    infoWeather: {}
}

function handleAddTask(
    state: ToDoListStore, 
    action: ReturnType<typeof actions.addTaskInToDoList>
): ToDoListStore {
    const id: string = generateId();
    return {
        ...state,
        tasks: state.tasks.concat([{id: id, title: action.title, checked: false, body: action.body}]),
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


function handleChangeSelectedValue(
    state: ToDoListStore,
    action: ReturnType<typeof actions.changeSelectedValue>
    ): ToDoListStore {
        return {
            ...state,
            selectedValue: action.selectedValue
        }
    }

function handleAddInfoForWeather(
    state: ToDoListStore,
    action: ReturnType<typeof actions.addInfoForWeather>
    ): ToDoListStore {
        return {
            ...state,
            infoWeather: action.infoWeather
        }
    }
        
function handleChangeTitleTask(
    state: ToDoListStore,
    action: ReturnType<typeof actions.changeTitleTask>
): ToDoListStore {
    const tasks = [...state.tasks];
    tasks.forEach((item) => {
        if(item.id === action.currentId) {
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
        if(item.id === action.currentId) {
            item.body = action.body
        }
    });
    return {
        ...state,
        tasks: tasks
    }
}

function handleChangeCheckedFlag(
    state: ToDoListStore,
    action: ReturnType<typeof actions.changeCheckedFlag>
): ToDoListStore {
    const tasks = [...state.tasks];
    tasks.forEach((item) => {
        if(item.id === action.currentId) {
            item.checked = !item.checked;
        }
    })
    return {
        ...state,
        tasks: tasks
    }
}

function handleChangeFoto(
    state: ToDoListStore,
    action: ReturnType<typeof actions.changeFoto>
): ToDoListStore {
    const tasks = [...state.tasks];
    tasks.forEach((item) => {
        if(item.id === action.currentId) {
            item.pathFoto = action.pathFoto;
        }
    })
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
        [actionTypes.CHANGE_TITLE_TASK]: handlerWrapper(handleChangeTitleTask),
        [actionTypes.ADD_BODY_FOR_DESCRIPTION]: handlerWrapper(handleAddBodyForDescription),
        [actionTypes.CHANGE_CHECKED_fLAG]: handlerWrapper(handleChangeCheckedFlag),
        [actionTypes.CHANGE_SELECTED_VALUE]: handlerWrapper(handleChangeSelectedValue),
        [actionTypes.ADD_INFO_FOR_WEATHER]: handlerWrapper(handleAddInfoForWeather),
        [actionTypes.CHANGE_FOTO]: handlerWrapper(handleChangeFoto),
    },
    initialState
)

export { toDoListReducers };