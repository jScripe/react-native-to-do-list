import React from "react";
import { Image, View, Text } from "react-native";
import { toDoListStyles } from "../styles";

interface Props {
    location: string,
    summary: string,
    icon: string,
    temp: string,
    precipChance: number,
}

const WeatherView = (props: Props) => {
    const icons: any = {
        "partly-cloudy-day": require("../../static/partly-cloudy-day.png"),
        "partly-cloudy-night": require("../../static/partly-cloudy-night.png"),
        "clear-day": require("../../static/clear-day.png"),
        "clear-night": require("../../static/clear-night.png"),
        "rain": require("../../static/rain.png"),
        "snow": require("../../static/snow.png"),
        "sleet": require("../../static/sleet.png"),
        "wind": require("../../static/wind.png"),
        "fog": require("../../static/fog.png"),
        "cloudy": require("../../static/cloudy.png"),
        "hail": require("../../static/hail.png"),
        "thunderstorm": require("../../static/thunderstorm.png"),
        "tornado": require("../../static/tornado.png"),
        "meteor-shower": require("../../static/meteor-shower.png"),
        "default": require("../../static/default.png")
    }

    function getIcon(icon: string){
        return icons[icon];
    }

    return (
        <View style={toDoListStyles.container}>
            <View style={toDoListStyles.titleContainer}>
                <Text style={toDoListStyles.title}>{props.location}</Text>
            </View>
            <View style={toDoListStyles.summaryContainer}>
                <Text style={toDoListStyles.summary}>{props.summary}</Text>
                <Image style={toDoListStyles.icon} source={ getIcon(props.icon) } />
            </View>
            <View style={toDoListStyles.tempContainer}>
                <Text>{props.temp}</Text>
                <View style={{flexDirection: "row"}}>
                <Text>
                    {props.precipChance}%
                </Text>
                <Image style={toDoListStyles.precipImage} source={require("../../static/precip.png")} />
                </View>
            </View>
        </View>
    )
}


export default WeatherView;