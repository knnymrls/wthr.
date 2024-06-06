export const weatherIcons = {
    1000: { day: "src/assets/weather icons/clear-day.svg", night: "src/assets/weather icons/clear-night.svg" },
    1003: { day: "src/assets/weather icons/partly-cloudy-day.svg", night: "src/assets/weather icons/partly-cloudy-night.svg" },
    1006: { day: "src/assets/weather icons/cloudy.svg", night: "src/assets/weather icons/cloudy.svg" },
    1009: { day: "src/assets/weather icons/overcast-day.svg", night: "src/assets/weather icons/overcast-night.svg" },
    1030: { day: "src/assets/weather icons/fog-day.svg", night: "src/assets/weather icons/fog-night.svg" },
    1063: { day: "src/assets/weather icons/partly-cloudy-day-drizzle.svg", night: "src/assets/weather icons/partly-cloudy-night-drizzle.svg" },
    1066: { day: "src/assets/weather icons/partly-cloudy-day-snow.svg", night: "src/assets/weather icons/partly-cloudy-night-snow.svg" },
    1069: { day: "src/assets/weather icons/partly-cloudy-day-sleet.svg", night: "src/assets/weather icons/partly-cloudy-night-sleet.svg" },
    1072: { day: "src/assets/weather icons/drizzle.svg", night: "src/assets/weather icons/drizzle.svg" },
    1087: { day: "src/assets/weather icons/thunderstorms-day.svg", night: "src/assets/weather icons/thunderstorms-night.svg" },
    1114: { day: "src/assets/weather icons/fog-day.svg", night: "src/assets/weather icons/fog-night.svg" },
    1117: { day: "src/assets/weather icons/blizzard.svg", night: "src/assets/weather icons/blizzard.svg" },
    1135: { day: "src/assets/weather icons/fog-day.svg", night: "src/assets/weather icons/fog-night.svg" },
    1147: { day: "src/assets/weather icons/fog.svg", night: "src/assets/weather icons/fog.svg" },
    1150: { day: "src/assets/weather icons/drizzle.svg", night: "src/assets/weather icons/drizzle.svg" },
    1153: { day: "src/assets/weather icons/drizzle.svg", night: "src/assets/weather icons/drizzle.svg" },
    1168: { day: "src/assets/weather icons/drizzle.svg", night: "src/assets/weather icons/drizzle.svg" },
    1171: { day: "src/assets/weather icons/drizzle.svg", night: "src/assets/weather icons/drizzle.svg" },
    1180: { day: "src/assets/weather icons/partly-cloudy-day-drizzle.svg", night: "src/assets/weather icons/partly-cloudy-night-drizzle.svg" },
    1183: { day: "src/assets/weather icons/drizzle.svg", night: "src/assets/weather icons/drizzle.svg" },
    1186: { day: "src/assets/weather icons/rain.svg", night: "src/assets/weather icons/rain.svg" },
    1189: { day: "src/assets/weather icons/rain.svg", night: "src/assets/weather icons/rain.svg" },
    1192: { day: "src/assets/weather icons/rain.svg", night: "src/assets/weather icons/rain.svg" },
    1195: { day: "src/assets/weather icons/rain.svg", night: "src/assets/weather icons/rain.svg" },
    1198: { day: "src/assets/weather icons/drizzle.svg", night: "src/assets/weather icons/drizzle.svg" },
    1201: { day: "src/assets/weather icons/drizzle.svg", night: "src/assets/weather icons/drizzle.svg" },
    1204: { day: "src/assets/weather icons/sleet.svg", night: "src/assets/weather icons/sleet.svg" },
    1207: { day: "src/assets/weather icons/sleet.svg", night: "src/assets/weather icons/sleet.svg" },
    1210: { day: "src/assets/weather icons/partly-cloudy-day-snow.svg", night: "src/assets/weather icons/partly-cloudy-night-snow.svg" },
    1213: { day: "src/assets/weather icons/snow.svg", night: "src/assets/weather icons/snow.svg" },
    1216: { day: "src/assets/weather icons/snow.svg", night: "src/assets/weather icons/snow.svg" },
    1219: { day: "src/assets/weather icons/snow.svg", night: "src/assets/weather icons/snow.svg" },
    1222: { day: "src/assets/weather icons/snow.svg", night: "src/assets/weather icons/snow.svg" },
    1225: { day: "src/assets/weather icons/snow.svg", night: "src/assets/weather icons/snow.svg" },
    1237: { day: "src/assets/weather icons/hail.svg", night: "src/assets/weather icons/hail.svg" },
    1240: { day: "src/assets/weather icons/partly-cloudy-day-rain.svg", night: "src/assets/weather icons/partly-cloudy-night-rain.svg" },
    1243: { day: "src/assets/weather icons/rain.svg", night: "src/assets/weather icons/rain.svg" },
    1246: { day: "src/assets/weather icons/rain.svg", night: "src/assets/weather icons/rain.svg" },
    1249: { day: "src/assets/weather icons/partly-cloudy-day-sleet.svg", night: "src/assets/weather icons/partly-cloudy-night-sleet.svg" },
    1252: { day: "src/assets/weather icons/sleet.svg", night: "src/assets/weather icons/sleet.svg" },
    1255: { day: "src/assets/weather icons/partly-cloudy-day-snow.svg", night: "src/assets/weather icons/partly-cloudy-night-snow.svg" },
    1258: { day: "src/assets/weather icons/snow.svg", night: "src/assets/weather icons/snow.svg" },
    1261: { day: "src/assets/weather icons/hail.svg", night: "src/assets/weather icons/hail.svg" },
    1264: { day: "src/assets/weather icons/hail.svg", night: "src/assets/weather icons/hail.svg" },
    1273: { day: "src/assets/weather icons/thunderstorms-day-rain.svg", night: "src/assets/weather icons/thunderstorms-night-rain.svg" },
    1276: { day: "src/assets/weather icons/thunderstorms-day-rain.svg", night: "src/assets/weather icons/thunderstorms-night-rain.svg" },
    1279: { day: "src/assets/weather icons/thunderstorms-day-snow.svg", night: "src/assets/weather icons/thunderstorms-night-snow.svg" },
    1282: { day: "src/assets/weather icons/thunderstorms-day-snow.svg", night: "src/assets/weather icons/thunderstorms-night-snow.svg" }
}


/**
 * Function to get the weather icon path based on condition code and time of day
 * @param {number} conditionCode - The weather condition code
 * @param {number} is_day - Whether it is day (1) or night (0)
 * @returns {string} - The path to the corresponding weather icon
 */
export function getWeatherIcon(conditionCode, is_day) {
    const condition = weatherIcons[conditionCode];
    console.log("Condition code:", conditionCode)
    if (!condition) {
        console.log("Condition code not found:", conditionCode);
        return "src/assets/weather icons/clear-day.svg"; // Default icon if condition code is not found
    }
    console.log("Condition:", condition);

    const iconPath = is_day === 1 ? condition.day : condition.night;
    console.log("Icon path:", iconPath);

    return iconPath;
}