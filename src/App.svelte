<script>
  import CurrentDisplay from "./components/currentDisplay.svelte";
</script>

<main>
  <div class="quick container">
    <CurrentDisplay />
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
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--background-color);
    gap: 2rem;
    height: 100svh;
    width: 100svw;
  }

  .container {
    border-radius: 1rem;
    background-color: var(--container-background);
    width: 30vw;
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
    width: 50vw;
    height: 90%;
    justify-content: space-between;
  }

  @media (max-width: 850px) {
    .quick.container {
      width: 100%;
      height: 100%;
    }
    main {
      height: 100svh;
      padding: 3rem;
    }
  }

  @media (max-width: 500px) {
    .quick.container {
      width: 100%;
      height: 100%;
    }
    main {
      height: auto;
      padding: 1rem;
    }
  }
</style>
