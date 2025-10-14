<script>
  const modules = import.meta.glob("/src/lib/posts/*.svelte", {eager: true});
  // get the two most recent posts
  const posts = Object.values(modules).map(mod => ({component: mod.default, metadata: mod.metadata}))
    .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date)).splice(0, 2);
</script>

{#if posts.length}

<section>
  <h2>LATEST NEWS</h2>
  <div>
    {#each posts as {component}}
      {@render component()}
    {/each}
  </div>
</section>

{/if}

<style>
  div {
    display: grid;
    box-sizing: border-box;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
  section {
    margin-top: 32px;
    padding: 24px;
  }

  @media screen and (max-width: 768px){
    div {
      grid-template-columns: 1fr;
    }
  }
</style>