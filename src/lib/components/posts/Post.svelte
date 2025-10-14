<script>
  const {children} = $props();
</script>

<section>
  {@render children()}
</section>

<style>
  section {
    padding: 16px;
    background-color: var(--colorBlack1);
    border-radius: 6px;
  }
</style>