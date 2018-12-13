import actionTypes from "./types/actionTypes";

const changeTextInTextInput = (text: string) => {
    return {
        type: actionTypes.CHANGE_TEXT,
        text: text
    }
}

export default changeTextInTextInput;