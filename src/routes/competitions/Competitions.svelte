<!-- Component containing all of the tables for competition statuses -->

<script>
  import { getRegStatus, getCompStatus } from "./comp_table_helpers.js"
  import comps from "$lib/data/competitions.json";
  import Table from "./Table.svelte";

  const today = new Date(Date.now())
    .toLocaleDateString("en-NZ", {
      timeZone: "Pacific/Auckland",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .split("/")
    .reverse()
    .join("-");

  // "soon" and "upcoming" both go in upcoming
  const buckets = {
    current: [], upcoming: [], recent: []
  }

  // for each comp, set regText and status
  for(const comp of comps){
    comp.reg_status = getRegStatus(comp); // "open" | "closed" | "ots" | "full" | "future"
    comp.status = getCompStatus(comp); // "current" | "soon" | "upcoming" | "recent"

    // add to arrays depending on status. End bit is so that "soon" gets added to upcoming
    buckets[comp.status] ? buckets[comp.status].push(comp) : buckets.upcoming.push(comp);
  }

  buckets.upcoming.reverse();
</script>

<section class="container">
  {#if buckets.current.length}
    <!-- current competitions table -->
    <h2>CURRENT COMPETITIONS</h2>
    <Table comps={buckets.current}></Table>
  {/if}

  {#if buckets.upcoming.length}
    <!-- upcoming competitions table -->
    <h2>UPCOMING COMPETITIONS</h2>
    <Table comps={buckets.upcoming}></Table>
  {/if}

  {#if buckets.recent.length}
    <!-- recent competitions table -->
    <h2>RECENT COMPETITIONS</h2>
    <Table comps={buckets.recent}></Table>
  {/if}
</section>

<style>
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 24px 0px;
  }
</style>