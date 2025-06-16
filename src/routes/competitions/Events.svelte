<!-- Events icons component for a competition in a table -->

<script>
  const { events } = $props();
</script>

<div class="events">
  {#each events as e}
    <img src="/icons/events/{e}.svg" class="icon" alt="WCA Icon">
  {/each}
</div>

<style>
  .events {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 4px;
    padding: 4px 0px;
  }
  .icon {
    /* Same as h4 text size */
    width:  clamp(0.8rem, 0.8vw, 1rem);
    height:  clamp(0.8rem, 0.8vw, 1rem);
    display: inline-block;
    filter: invert(80%);
  }
 
</style>