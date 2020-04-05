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
            history.replaceState({ back: true }, "", href);
          } else {
            history.pushState({ back: true }, "", href);
          }
          t.blur();
          // These history invocations don't trigger hashchange, so we do here.
          hashchange();
        });
      }
    }
    return data;
  })(dataURL);

  let selected;

  function escape() {
    if (window.location.hash) {
      let hash = window.location.hash;
      if (history.state && history.state.back) {
        history.back();
      } else {
        history.replaceState({ back: true }, "", window.location.pathname);
        hashchange();
      }
      let t = document.querySelector(`a[href="${hash}"]`);
      if (t) {
        t.focus();
      }
    }
  }

  function keydown(event) {
    if (event.key == "Escape") {
      escape();
    }

    // TODO: ArrowLeft + ArrowDown for previous
    // TODO: ArrowRight + ArrowUp for next
  }

  let background;

  function click(event) {
    if (event.target === background) {
      escape();
    }
  }

  function hashchange() {
    selected = window.location.hash;

    if (window.location.hash) {
      document.body.classList.add("photo-viewer");
      let t = document.querySelector(`a[href="${window.location.hash}"]`);
      if (t) {
        t.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        });
      }
    } else {
      document.body.classList.remove("photo-viewer");
    }
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

  :global(body.photo-viewer) {
    overflow: hidden;
  }
</style>

<svelte:window
  on:load={hashchange}
  on:hashchange={hashchange}
  on:keydown={keydown} />

{#if selected}
  {#await imageData then data}
    <div bind:this={background} on:click={click} transition:fade>
      <Image alt={selected} data={data[selected]} />
    </div>
  {/await}
{/if}
