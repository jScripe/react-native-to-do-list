import { handleActions } from "redux-actions";
import { handlerWrapper } from "../utils/reducerUtils";
import actionTypes from "../actions/types/actionTypes";
import { actions } from "../actions";

interface ToDoListStore {
    tasks: Object[];
    text: string;
}

const initialState: ToDoListStore = {
    tasks: [],
    text: ""
}

function handleAddTask(
    state: ToDoListStore, 
    action: ReturnType<typeof actions.addTaskInToDoList>
): ToDoListStore {
    return {
        ...state,
        tasks: state.tasks.concat([{title: action.task}])
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
    const tasks: Object[] = [...state.tasks];
    tasks.splice(action.index, 1);
    return {
        ...state,
        tasks: tasks
    }
}

const toDoListReducers = handleActions<ToDoListStore, any>(
    {
        [actionTypes.ADD_TASK]: handlerWrapper(handleAddTask),
        [actionTypes.CHANGE_TEXT]: handlerWrapper(handleChangeText),
        [actionTypes.DELETE_TASK]: handlerWrapper(handleDeleteTask)
    },
    initialState
)

export { toDoListReducers };