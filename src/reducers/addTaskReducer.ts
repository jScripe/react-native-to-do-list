const initialState: {tasks: object[]} = {
    tasks: []
}

export default function addTask(state = initialState, action: {type: string, task: string}) {
    switch(action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: state.tasks.concat([{title: action.task}])
            }
        default: 
            return state;
    }
}
