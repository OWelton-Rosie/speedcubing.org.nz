<script>
  import CompTable from "./CompTable.svelte";
  import { loadCompetitions } from "$lib/load_competitions";
  let { comps } = $props();
  let data = loadCompetitions();
</script>

{#await data}
  <div class="loading">Loading Competitions...</div>
{:then { current, upcoming, recent }}
  <section class="compSection">
    <section class="current">
      {#if current.length}
        <h1>CURRENT COMPETITIONS</h1>
        <CompTable tableType="blue" comps={current}></CompTable>
      {/if}
    </section>
    <section class="upcoming">
      <h1>UPCOMING COMPETITIONS</h1>
      <CompTable tableType="green" comps={upcoming}></CompTable>
    </section>
    <section class="recent">
      <h1>RECENT COMPETITIONS</h1>
      <CompTable tableType="red" comps={recent}></CompTable>
    </section>
    <h4>
      To see all past competitions, click <a
        class="link"
        href="https://www.worldcubeassociation.org/competitions?region=NZ&state=past"
        target="_blank">here</a
      >.
    </h4>
  </section>
{/await}

<style>
  .compSection,
  .loading {
    background-color: #1a1a1b;
    color: white;
  }

  .loading {
    height: 500px;
    padding-top: 32px;
    text-align: center;
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
  }
  h1 {
    font-size: 2.2rem;
    font-weight: 500;
  }
  h4 {
    margin: 0;
    text-align: center;
    font-weight: 100;
  }
  .link {
    color: #1e90ff;
    text-decoration: underline;
  }
</style>
