import React from "react";
import { ImageBackground } from "react-native";
import { toDoListStyles } from "../styles";
// @ts-ignore
import RNRnMyView from "rn-my-view";

interface Props {
    
}

const WebView = (props: Props) => {
    return (
        <ImageBackground source={require("../../static/browser-icon.png")} style={{height: 32, width: 32, marginRight: 10}}>
            <RNRnMyView style={{width: 32, height: 32}} openBrowserWithUrl="http://google.com"></RNRnMyView>
        </ImageBackground>
    )
}

export default WebView;