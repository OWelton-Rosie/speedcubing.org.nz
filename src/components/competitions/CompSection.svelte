<script>
  import CompTable from "./CompTable.svelte";
  import { loadCompetitions } from "$lib/load_competitions";
  import { onMount } from "svelte";

  let data;

  onMount(async () => {
    data = await loadCompetitions();
  })
</script>

<section class="container">
  {#if !data}
    <div class="loading">Loading Competitions...</div>
  {:else}
    <section>
      {#if data.current.length}
      <section class="current">
          <h2>CURRENT COMPETITIONS</h2>
          <CompTable tableType="blue" comps={data.current}></CompTable>
      </section>
      {/if}
      <section class="upcoming">
        <h2 class="title">UPCOMING COMPETITIONS</h2>
        <CompTable tableType="green" comps={data.upcoming}></CompTable>
      </section>
      <section class="recent">
        <h2 class="title">RECENT COMPETITIONS</h2>
        <CompTable tableType="red" comps={data.recent}></CompTable>
      </section>
      <p>
        To see all past competitions, click <a
          class="blueLink"
          href="https://www.worldcubeassociation.org/competitions?region=NZ&state=past"
          target="_blank">here</a
        >.
      </p>
    </section>
  {/if}
</section>

<style>
  .loading {
    height: 500px;
    text-align: center;
    background-color: var(--colorBlack2);
    color: var(--colorWhite);
  }

  section{
    background-color: var(--colorBlack2);
  }

  p{
    text-align: center;
  }

  .container{
    padding-bottom: 24px;
  }

  .upcoming,
  .current,
  .recent {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    max-width: 800px;
    margin: auto;
    padding: 16px;
  }
</style>
