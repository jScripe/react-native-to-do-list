import RNFS from "react-native-fs";
import { ImageURISource } from "react-native";

const APP_IMAGE_FOLDER = `${RNFS.CachesDirectoryPath}/Images/`;

const getUserAvatar = (uri: string, pathFoto: string) => {
    const absolutePathInLibrary: string = `file://${uri}`;
    const nameFoto: string = getNameFoto(uri);
    const absolutePathInApp: string = `file:///data/data/com.todolist/cache/Images/${nameFoto}`
    return RNFS.mkdir(APP_IMAGE_FOLDER)
        .then(() => RNFS.readdir(APP_IMAGE_FOLDER))
        .then((files: string[]) => {
            const oldFileName: string = getNameFoto(pathFoto);
            files.forEach((file) => {
                if(file === oldFileName) {
                    RNFS.unlink(`file:///data/data/com.todolist/cache/Images/${oldFileName}`)
                }
            })
        })
        .then(() => {RNFS.copyFile(absolutePathInLibrary, absolutePathInApp)
                        .catch((error) => {
                            console.log(">>> error copy file", error.message);
                        })
                    })
        .then(() => absolutePathInApp)
        .catch((error) => {console.log(">>> error mkdir", error.message)});
};

const getNameFoto = (uri: string) => {
    if(uri === undefined) {
        return "";
    }
    const arrSubstringsUri = uri.split("/");
    const nameFoto: string = arrSubstringsUri[arrSubstringsUri.length - 1];
    return nameFoto;
} 

export { getUserAvatar, getNameFoto };