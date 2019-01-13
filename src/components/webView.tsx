import React from "react";
import { TouchableOpacity, Image, Linking } from "react-native";
import { toDoListStyles } from "../styles";

interface Props {
    
}

const WebView = (props: Props) => {
    return (
        <TouchableOpacity onPress={() => Linking.openURL("https://google.com")}>
            <Image 
                style={toDoListStyles.iconBrowser}
                source={require("../../static/browser-icon.png")}
            >

            </Image>
        </TouchableOpacity>
    );
}

export default WebView;