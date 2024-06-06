
const apiKey = "4430333c9c54480db3550207232712";

export async function fetchForecast(city) {
    const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`
    );

    if (!response.ok) {
        throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.forecast.forecastday;
}

export async function fetchWeather(city) {
    const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
    );

    if (!response.ok) {
        throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
}
