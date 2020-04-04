<script>
  import { fade } from "svelte/transition";

  import Image from "./Image.svelte";
  export let dataURL;

  let imageData = fetch(dataURL).then(response => response.json());

  let selected = window.location.hash;

  function keydown(event) {
    if (event.key == "Escape") {
      history.replaceState({}, "", window.location.pathname);
      hashchange();
    }

    // TODO: ArrowLeft + ArrowDown for previous
    // TODO: ArrowRight + ArrowUp for next
  }

  // TODO: click listener for click on background

  function hashchange(event) {
    selected = window.location.hash;
  }
</script>

<style>
  div {
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(255, 255, 255, 0.5);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
  }
</style>

<svelte:window on:hashchange={hashchange} on:keydown={keydown} />

{#if selected}
  {#await imageData then data}
    {#if data[selected]}
      <div transition:fade>
        <div class="current">
          <Image alt={selected} data={data[selected]} />
        </div>
      </div>
    {/if}
  {/await}
{/if}
