<script>
  const {href, children} = $props();
</script>

<a href={href} aria-label="link from post" target="_blank">
  {@render children()}
</a>

<style>
  a {
    color: var(--colorBlue1);
  }
</style>
