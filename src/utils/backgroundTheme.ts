import {  ThemesStrings,type TimerSettings } from "@/types/pomodoros"


export function backGroundTheme(key: keyof TimerSettings) {
    return ThemesStrings[key]
}   