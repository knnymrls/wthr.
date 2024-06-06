<script>
  import { onMount } from "svelte";
  import { formatDate } from "../util/formatDate";
  import { fetchForecast } from "../util/fetchApi";
  import { getWeatherIcon } from "../util/getWeatherIcon";
  export let cityName;

  let forecastData = null;
  let isLoading = true;
  let isError = false;

  // Function to fetch forecast data
  async function loadForecast(city) {
    isLoading = true;
    isError = false;
    try {
      forecastData = await fetchForecast(city);
      console.log(forecastData);
      isLoading = false;
    } catch (error) {
      console.error("Fetch error: ", error);
    }
  }

  // Fetch forecast data on mount
  onMount(() => {
    loadForecast(cityName);
  });
  // Update forecast data when city changes
  $: cityName, loadForecast(cityName);
</script>

<div class="forecast-container">
  {#if isLoading}
    <div class="forecast-details">
      <div class="forecast-day">
        <h3>...</h3>
        <img
          class="weather-icon"
          src={getWeatherIcon(1, 1)}
          alt="Weather Icon"
        />
        <p>...</p>
      </div>
      <div class="forecast-day">
        <h3>...</h3>
        <img
          class="weather-icon"
          src={getWeatherIcon(1, 1)}
          alt="Weather Icon"
        />
        <p>...</p>
      </div>
      <div class="forecast-day">
        <h3>...</h3>
        <img
          class="weather-icon"
          src={getWeatherIcon(1, 1)}
          alt="Weather Icon"
        />
        <p>...</p>
      </div>
    </div>
  {:else if isError}
    <div class="forecast-details">
      <div class="forecast-day">
        <h3>N/A</h3>
        <img
          class="weather-icon"
          src={getWeatherIcon(1, 1)}
          alt="Weather Icon"
        />
        <p>N/A</p>
      </div>
      <div class="forecast-day">
        <h3>N/A</h3>
        <img
          class="weather-icon"
          src={getWeatherIcon(1, 1)}
          alt="Weather Icon"
        />
        <p>N/A</p>
      </div>
      <div class="forecast-day">
        <h3>N/A</h3>
        <img
          class="weather-icon"
          src={getWeatherIcon(1, 1)}
          alt="Weather Icon"
        />
        <p>N/A</p>
      </div>
    </div>
  {:else if forecastData}
    <div class="forecast-details">
      {#each forecastData as day}
        <div class="forecast-day">
          <h3>{formatDate(day.date)}</h3>
          <img
            class="weather-icon"
            src={getWeatherIcon(day.day.condition.code, 1)}
            alt="Weather Icon"
          />
          <p>{Math.round(day.day.maxtemp_f)}</p>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .forecast-container {
    text-align: center;
    border-radius: 1rem;
    width: 100%;
  }

  .forecast-details {
    display: flex;
    justify-content: center;
    gap: 3rem;
  }
  .forecast-day {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  h3 {
    font-weight: 400;
    font-size: 1.5rem;
  }

  p {
    font-size: 1.25rem;
    font-weight: 400;
  }

  img {
    width: 75px;
    height: auto;
  }
</style>
