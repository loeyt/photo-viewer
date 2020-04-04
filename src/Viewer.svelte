<script context="module">
  if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
  }
</script>

<script>
  import { fade } from "svelte/transition";

  import Image from "./Image.svelte";
  export let dataURL;

  let imageData = (async dataURL => {
    const response = await fetch(dataURL);
    const data = await response.json();

    // Now we know which links to highjack.
    for (const t of document.links) {
      const href = t.getAttribute("href");
      if (href in data) {
        t.addEventListener("click", event => {
          event.preventDefault();
          if (window.location.hash) {
            // Navigation from image to image is not preserved in history.
            history.replaceState({}, "", href);
          } else {
            history.pushState({}, "", href);
          }
          // These history invocations don't trigger hashchange, so we do here.
          selected = window.location.hash;
        });
      }
    }
    return data;
  })(dataURL);

  let selected = window.location.hash;

  function keydown(event) {
    if (event.key == "Escape") {
      if (window.location.hash) {
        history.back();
      }
    }

    // TODO: ArrowLeft + ArrowDown for previous
    // TODO: ArrowRight + ArrowUp for next
  }

  // TODO: click listener for click on background
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

<svelte:window
  on:hashchange={() => {
    selected = window.location.hash;
  }}
  on:keydown={keydown} />

{#if selected}
  {#await imageData then data}
    <div transition:fade>
      <div class="current">
        <Image alt={selected} data={data[selected]} />
      </div>
    </div>
  {/await}
{/if}
