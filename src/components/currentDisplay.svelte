<!-- JAVASCRIPT -->
<script>
  import { onMount } from "svelte";
  import SecondaryWeatherDisplay from "./forecastDisplay.svelte";
  import { fetchWeather } from "../util/fetchApi";
  import { getWeatherIcon } from "../util/getWeatherIcon";
  import Logo from "./logo.svelte";
  import { getCurrentLocation } from "../util/getCurrentLocation";
  import ForecastDisplay from "./forecastDisplay.svelte";

  let weatherData = null;
  let isLoading = true;
  let isError = false;
  let cityName = "New York";
  let userLocation = null;

  // Function to save weather data to local storage
  function saveWeatherToLocalStorage(data) {
    localStorage.setItem("weatherData", JSON.stringify(data));
  }

  // Function to load weather data from local storage
  function loadWeatherFromLocalStorage() {
    const data = localStorage.getItem("weatherData");
    return data ? JSON.parse(data) : null;
  }

  // Fetch weather data based on user's current location
  async function loadWeatherByLocation() {
    isLoading = true;
    isError = false;
    try {
      const location = await getCurrentLocation();
      userLocation = location;
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=4430333c9c54480db3550207232712&q=${location.latitude},${location.longitude}`
      );
      weatherData = await response.json();
      cityName = weatherData.location.name;
      saveWeatherToLocalStorage(weatherData); // Save to local storage
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
      saveWeatherToLocalStorage(weatherData); // Save to local storage
      isLoading = false;
    } catch (error) {
      console.error("Fetch error: ", error);
      isError = true;
      isLoading = false;
    }
  }

  // Fetch weather data on mount using the user's location or load from local storage
  onMount(() => {
    const savedData = loadWeatherFromLocalStorage();
    if (savedData) {
      weatherData = savedData;
      cityName = weatherData.location.name;
      isLoading = false;
    } else {
      loadWeatherByLocation();
    }
  });

  $: cityName, loadWeather(cityName);
</script>

<!-- JAVASCRIPT -->

<!-- HTML -->
<main>
  <div class="search">
    <input type="text" bind:value={cityName} placeholder="Enter city name" />
    <button on:click={loadWeatherByLocation}>
      <img src="public\assets\search-globe-svgrepo-com.svg" alt="" />
      <p>Search by Location</p>
    </button>
  </div>

  {#if isLoading}
    <div class="weather-details">
      <h2>Loading</h2>
      <div class="weather-info">
        <img
          class="weather-icon"
          src={getWeatherIcon(1, 1)}
          alt="Weather Icon"
        />
        <div class="current-data wrapper">
          <p class="temp">Loading</p>
          <p>Loading</p>
        </div>
      </div>
    </div>
  {:else if isError}
    <div class="weather-details">
      <h2>N/A</h2>
      <div class="weather-info">
        <img
          class="weather-icon"
          src={getWeatherIcon(1, 1)}
          alt="Weather Icon"
        />
        <div class="current-data wrapper">
          <p class="temp">N/A</p>
          <p>N/A</p>
        </div>
      </div>
    </div>
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

  <ForecastDisplay {cityName} />
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

  .search {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 85%;
  }

  .search img {
    height: 1.25rem;
    width: auto;
  }

  button {
    background: var(--primary-text-color);
    border: none;
    cursor: pointer;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: end;
    gap: 0.5rem;
    border-radius: 10px;
    min-width: 35%;
    max-width: 85%;
    justify-content: center;
  }

  .search p {
    font-family: azo-sans-web, sans-serif;
    font-size: 1rem;
    color: var(--background-color);
  }

  .weather-icon {
    width: 225px;
  }

  @media (max-width: 500px) {
    button {
      min-width: 100%;
    }
    input {
      min-width: 100%;
    }
  }
</style>
