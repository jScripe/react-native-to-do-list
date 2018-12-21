import { handleActions } from "redux-actions";
import { handlerWrapper } from "../utils/reducerUtils";
import actionTypes from "../actions/types/actionTypes";
import { actions } from "../actions";
import { generateId } from "../utils/generateId";
import { string } from "prop-types";

interface ToDoListStore {
    tasks: Object[];
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
    return {
        ...state,
        tasks: state.tasks.concat([{id: generateId(), title: action.task}])
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
    const tasks: Object[] = state.tasks.filter((item) => {
        return !(item.id === action.id)
    });
    return {
        ...state,
        tasks: tasks
    }
}

function handleSetTaskId(
    state: ToDoListStore,
    action: ReturnType<typeof actions.setTaskId>
): ToDoListStore {
    return {
        ...state,
        taskId: action.taskId
    }
}

const toDoListReducers = handleActions<ToDoListStore, any>(
    {
        [actionTypes.ADD_TASK]: handlerWrapper(handleAddTask),
        [actionTypes.CHANGE_TEXT]: handlerWrapper(handleChangeText),
        [actionTypes.DELETE_TASK]: handlerWrapper(handleDeleteTask),
        [actionTypes.SET_ID]: handlerWrapper(handleSetTaskId)
    },
    initialState
)

export { toDoListReducers };