const initialState: {text: string} = {
    text: ""
}

export default function changeText(state = initialState, action: {type: string, text: string}) {
    switch(action.type) {
        case 'CHANGE_TEXT':
            return {
                ...state,
                text: action.text
            }
        default: 
            return state;
    }
}
