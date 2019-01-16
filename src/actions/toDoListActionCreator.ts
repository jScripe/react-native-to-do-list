import actionTypes from "./types/actionTypes";

const addTaskInToDoList = (taskText: string) => {
    return {
        type: actionTypes.ADD_TASK,
        title: taskText
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

const setCurrentTaskId = (id: string) => {
    return {
        type: actionTypes.SET_ID,
        currentTaskId: id
    }
}

const changeTitleTask = (changeText: string) => {
    return {
        type: actionTypes.CHANGE_TITLE_TASK,
        title: changeText
    }
}

const addBodyForDescription = (text: string) => {
    return {
        type: actionTypes.ADD_BODY_FOR_DESCRIPTION,
        body: text
    }
}

const changeCheckedFlag = () => {
    return {
        type: actionTypes.CHANGE_CHECKED_fLAG
    }
}

const changeSelectedValue = (selectedValue: string) => {
    return {
        type: actionTypes.CHANGE_SELECTED_VALUE,
        selectedValue: selectedValue
    }
}

const addInfoForWeather = (infoWeather: object) => {
    return {
        type: actionTypes.ADD_INFO_FOR_WEATHER,
        infoWeather: infoWeather
    }
}
const getInfoForWeather = (api: string, lat: string, lng: string) => {
    return (dispatch: any) => {
        let stringUrl = 'https://api.darksky.net/forecast/' + api + '/' + lat + ',' + lng;
        let infoWeather: any = {};

        fetch(stringUrl)
            .then(response => response.json())
            .then((responseJson) => {
                infoWeather.summary = responseJson.currently.summary;
                infoWeather.temp = (Math.round(10 * responseJson.currently.temperature)/10) + '°F';
                infoWeather.icon = responseJson.currently.icon;
                infoWeather.precipChance = Math.round(responseJson.currently.precipProbability * 1000)/10;
                dispatch(addInfoForWeather(infoWeather));
            })
            .catch((error) => {
                console.error(error);
            });
    }
}



export {
    addTaskInToDoList,
    changeTextInTextInput,
    deleteTaskInToDoList,
    setCurrentTaskId,
    changeTitleTask,
    addBodyForDescription,
    changeCheckedFlag,
    changeSelectedValue,
    addInfoForWeather,
    getInfoForWeather,
}