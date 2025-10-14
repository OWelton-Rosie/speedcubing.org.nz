<script>
  const {children} = $props();
</script>

<div>
  {@render children()}
</div>

<style>
  div {
    padding: 16px 0px;
  }
</style>