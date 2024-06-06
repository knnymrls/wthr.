<!-- JAVASCRIPT -->
<script>
  import { onMount } from "svelte";
  import SecondaryWeatherDisplay from "./secondaryWeatherDisplay.svelte";
  import { fetchWeather } from "../util/fetchApi";
  import { getWeatherIcon } from "../util/getWeatherIcon";
  import Logo from "./logo.svelte";
  import { getCurrentLocation } from "../util/getCurrentLocation";

  let weatherData = null;
  let isLoading = true;
  let isError = false;
  let cityName = "New York";
  let userLocation = null;

  // Fetch weather data based on user's current location
  async function loadWeatherByLocation() {
    try {
      const location = await getCurrentLocation();
      userLocation = location;
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=4430333c9c54480db3550207232712&q=${location.latitude},${location.longitude}`
      );
      weatherData = await response.json();
      cityName = weatherData.location.name;
      isLoading = false;
    } catch (error) {
      console.error("Error fetching weather data: ", error);
      isError = true;
      isLoading = false;
    }
  }

  // Function to fetch weather data
  async function loadWeather(city) {
    isLoading = true;
    isError = false;
    try {
      weatherData = await fetchWeather(city);
      isLoading = false;
    } catch (error) {
      console.error("Fetch error: ", error);
      isError = true;
      isLoading = false;
    }
  }

  // Fetch weather data on mount using the user's location
  onMount(() => {
    loadWeatherByLocation();
  });

  $: cityName, loadWeather(cityName);
</script>

<!-- JAVASCRIPT -->

<!-- HTML -->
<main>
  <input type="text" bind:value={cityName} placeholder="Enter city name" />

  {#if isLoading}
    <p>Loading...</p>
  {:else if isError}
    <p>Error fetching weather data. Please try again.</p>
  {:else if weatherData}
    <div class="weather-details">
      <h2>{weatherData.location.name}</h2>
      <div class="weather-info">
        <img
          class="weather-icon"
          src={getWeatherIcon(
            weatherData.current.condition.code,
            weatherData.current.is_day
          )}
          alt="Weather Icon"
        />
        <div class="current-data wrapper">
          <p class="temp">{Math.round(weatherData.current.temp_f)}</p>
          <p>{weatherData.current.condition.text}</p>
        </div>
      </div>
    </div>
  {/if}

  <SecondaryWeatherDisplay {cityName} />
  <Logo />
</main>

<!-- CSS -->

<!-- HTML -->

<!-- CSS -->
<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    gap: 3rem;
    text-align: center;
    color: var(--primary-text-color);
  }

  .weather-details {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .current-data.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  input {
    text-align: center;
    font-size: 1.25rem;
    padding: 0.5rem;
    border-top: none;
    border-left: none;
    border-right: none;
    box-shadow: none;
    border-bottom: 2px solid var(--background-color);
    width: 85%;
    box-sizing: border-box;
    background-color: var(--container-background);
    color: var(--primary-text-color);
    font-family: azo-sans-web, sans-serif;
  }

  .temp {
    font-size: 3rem;
    font-weight: 600;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 500;
  }

  .weather-icon {
    width: 225px;
  }
</style>
