<script>
  const {date} = $props();
  const formatted = new Date(date).toLocaleDateString('en-NZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
</script>

<h4>
 Announced on {formatted}
</h4>

<style>
  h4 {
    color: var(--colorGrey2);
    font-family: "Calibri", sans-serif;
    font-weight: 100;
  }
</style>

