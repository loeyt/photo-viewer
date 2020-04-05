<script>
  export let alt;
  export let data;

  $: sizes = Object.keys(data)
    .map(size => size.split("x").map(v => Number.parseInt(v, 10)))
    .sort((first, second) => first[0] < second[0])
    .map((size, n, sizes) => {
      const [width, height] = size;
      if (n == sizes.length - 1) {
        return `${width}px`;
      }
      return `(min-width: ${width}px) and (min-height: ${height}px) ${width}px`;
    })
    .join(", ");

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
