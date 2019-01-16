import { string } from "prop-types";

interface Tasks {
    id: string,
    title: string,
    body?: string,
    checked: boolean
}

interface InfoWeather {
    summary?: string,
    temp?: string,
    icon?: string,
    precipChance?: number
}

export {
    Tasks,
    InfoWeather
}