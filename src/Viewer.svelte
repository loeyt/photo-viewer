<script context="module">
  if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
  }
</script>

<script>
  import { fade } from "svelte/transition";

  import Image from "./Image.svelte";
  export let dataURL;

  let links = [];

  let imageData = (async dataURL => {
    const response = await fetch(dataURL);
    const data = await response.json();

    // Now we know which links to highjack.
    links = Array.from(document.links).flatMap(t => {
      const href = t.getAttribute("href");
      if (href in data) {
        t.addEventListener("click", event => {
          event.preventDefault();
          navigate(href);
          t.blur();
        });
        return href;
      }
    });
    return data;
  })(dataURL);

  let selected;

  function navigate(url) {
    if (selected) {
      history.replaceState(history.state, "", url);
    } else {
      history.pushState({ back: true }, "", url);
    }
    hashchange();
  }

  function escape() {
    if (selected) {
      let hash = selected;
      if (history.state && history.state.back) {
        history.back();
      } else {
        navigate(window.location.pathname);
      }
      let t = document.querySelector(`a[href="${hash}"]`);
      if (t) {
        t.focus();
      }
    }
  }

  function prev() {
    const current = links.indexOf(selected);
    if (current < 1) {
      escape();
    } else {
      navigate(links[current - 1]);
    }
  }

  function next() {
    const current = links.indexOf(selected);
    if (current >= links.length - 1) {
      escape();
    } else {
      navigate(links[current + 1]);
    }
  }

  function keydown(event) {
    if (selected) {
      switch (event.key) {
        case "Escape":
          escape();
          break;
        case "ArrowLeft":
        case "PageUp":
          prev();
          break;
        case "ArrowRight":
        case "PageDown":
          next();
          break;
      }
    }
  }

  let background;

  function click(event) {
    if (event.target === background) {
      escape();
    }
  }

  function hashchange() {
    selected = window.location.hash;

    if (selected) {
      document.body.classList.add("photo-viewer");
      let t = document.querySelector(`a[href="${selected}"]`);
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
