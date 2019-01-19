import RNFS from "react-native-fs";
import { Platform, ImageURISource } from "react-native";

// const APP_IMAGE_FOLDER = `${Platform.select({
//     ios: RNFS.DocumentDirectoryPath,
//     android: RNFS.CachesDirectoryPath,
// })}/Images/`;

const APP_IMAGE_FOLDER = `${RNFS.DocumentDirectoryPath}/Images/`;

const copyImage = (uri: string) => {
    return RNFS.copyFile(uri, APP_IMAGE_FOLDER);
};

export { copyImage }