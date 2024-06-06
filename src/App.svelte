<script>
  import MainWeatherDisplay from "./components/mainWeatherDisplay.svelte";
  let isDarkMode = false;

  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
  }

  // Reactive statement to update the root element's class
  $: {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark-mode");
    } else {
      root.classList.remove("dark-mode");
    }
  }
</script>

<main>
  <div class="quick container">
    <MainWeatherDisplay />
  </div>
  <div class="main wrapper">
    <div class="stat container"></div>
    <div class="extra wrapper">
      <div class="trend container"></div>
      <div class="settings container">
        <button on:click={toggleDarkMode}>Toggle Dark Mode</button>
      </div>
    </div>
  </div>
</main>

<style>
  :global(:root) {
    --background-color: #e6e6e6;
    --container-background: white;
    --logo-color: #494747;
    --primary-text-color: #494747;
  }

  :global(.dark-mode) {
    --background-color: #212121;
    --container-background: #2e2e2e;
    --logo-color: #e6e6e6;
    --primary-text-color: #e6e6e6;
  }

  :global(body) {
    margin: 0;
    font-family: azo-sans-web, sans-serif;
    transition:
      background-color 0.3s,
      color 0.3s;
  }

  main {
    display: grid;
    grid-template-columns: 2fr 5fr;
    background-color: var(--background-color);
    gap: 2rem;
    height: 100vh;
    width: 100vw;
    padding: 4rem;
    box-sizing: border-box;
  }

  .container {
    border-radius: 1rem;
    background-color: var(--container-background);
    box-shadow:
      rgba(14, 63, 126, 0.06) 0px 0px 0px 1px,
      rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px,
      rgba(42, 51, 70, 0.04) 0px 2px 2px -1px,
      rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px,
      rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px,
      rgba(42, 51, 70, 0.03) 0px 10px 10px -5px,
      rgba(42, 51, 70, 0.03) 0px 24px 24px -8px;
    transition:
      background-color 0.3s,
      color 0.3s;
  }

  .quick.container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 3rem;
    justify-content: space-between;
  }

  .main.wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .stat.container {
    padding: 1rem;
  }

  .extra.wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .trend.container {
    padding: 1rem;
  }

  .settings.container {
    padding: 1rem;
  }

  button {
    background-color: var(--button-background);
    color: var(--button-color);
    transition:
      background-color 0.3s,
      color 0.3s;
  }

  @media (max-width: 1200px) {
    main {
      grid-template-columns: 1fr;
    }
  }
</style>
