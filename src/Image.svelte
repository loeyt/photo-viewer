<script>
  export let alt;
  export let data;

  $: sizes =
    Object.keys(data)
      .sort((first, second) => {
        const fw = Number.parseInt(first.split("x")[0], 10);
        const sw = Number.parseInt(second.split("x")[0], 10);
        return fw < sw;
      })
      .map(size => {
        const [width, height] = size
          .split("x")
          .map(x => Number.parseInt(x, 10));
        return `(min-width: ${width}px) and (min-height: ${height}px) ${width}px`;
      })
      .join(", ") + ", 600px";

  $: srcset = Object.entries(data)
    .map(([size, src]) => {
      const [width] = size.split("x");
      return `${src} ${width}w`;
    })
    .join(", ");
</script>

<style>
  img {
    max-height: 100%;
  }
</style>

<img {alt} {sizes} {srcset} />
