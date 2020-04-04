<script>
  import { fade } from "svelte/transition";

  import Image from "./Image.svelte";
  export let dataURL;

  let imageData = fetch(dataURL).then(response => response.json());

  let selected = window.location.hash;

  let current;

  function keydown(event) {
    if (event.key == "Escape") {
      window.location.hash = "";
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
    position: absolute;
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
    <div transition:fade>
      <div class="current">
        <Image alt={selected} data={data[selected]} />
      </div>
    </div>
  {/await}
{/if}
