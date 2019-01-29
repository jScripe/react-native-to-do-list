import actionTypes from "./types/actionTypes";
import { getUserAvatar, getNameFoto } from "../utils/images";

const addTaskInToDoList = (taskText: string , bodyText: string = "", pathFoto: string = "") => {
    return {
        type: actionTypes.ADD_TASK,
        title: taskText,
        body: bodyText,
        pathFoto: pathFoto
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

const changeTitleTask = (changeText: string, id: string) => {
    return {
        type: actionTypes.CHANGE_TITLE_TASK,
        title: changeText,
        currentId: id,
    }
}

const addBodyForDescription = (text: string, id: string) => {
    return {
        type: actionTypes.ADD_BODY_FOR_DESCRIPTION,
        body: text,
        currentId: id,
    }
}

const changeCheckedFlag = (id: string) => {
    return {
        type: actionTypes.CHANGE_CHECKED_fLAG,
        currentId: id
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

const setPhoto = (uri: any, id: string) => {
    return {
        type: actionTypes.CHANGE_FOTO,
        pathFoto: uri,
        currentId: id,
    }
}

const changeFoto = (uri: any, id: string, pathFoto: string) => {
    return (dispatch: any) => {
        getUserAvatar(uri, pathFoto)
            .then((pathFoto) => {
                console.log(">>> 0", pathFoto);
                dispatch(setPhoto(pathFoto, id))
            })
    }
}

const addPathFoto = (uri: any) => {
    return {
        type: actionTypes.ADD_PATH_FOTO,
        pathFoto: `file:///data/data/com.todolist/cache/Images/${getNameFoto(uri)}`,
    }
}



export {
    addTaskInToDoList,
    changeTextInTextInput,
    deleteTaskInToDoList,
    changeTitleTask,
    addBodyForDescription,
    changeCheckedFlag,
    changeSelectedValue,
    addInfoForWeather,
    getInfoForWeather,
    changeFoto,
    setPhoto,
    addPathFoto
}