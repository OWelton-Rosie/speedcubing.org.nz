<script>
  import ButtonSpan from "./ButtonSpan.svelte";
  import RegSpan from "./RegSpan.svelte";
  const eventOrder = [
    "333",
    "222",
    "444",
    "555",
    "666",
    "777",
    "333bf",
    "333fm",
    "333oh",
    "clock",
    "minx",
    "pyram",
    "skewb",
    "sq1",
    "444bf",
    "555bf",
    "333mbf",
  ];
  let { tableType, comps } = $props();
  
  function dateToShort(dateString) {
  // param: yyyy-mm-dd
  return new Date(dateString).toLocaleDateString("en-US", {
    timeZone: "Pacific/Auckland",
    day: "numeric",
    month: "short", // Abbreviated month (e.g., "Feb")
  });
}
</script>

<table>
  <thead class={tableType}>
    <tr>
      <th>Date</th>
      <th>Competition</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody>
    {#each comps as comp}
      <tr>
        <td>
          <span class="compDate">
            {dateToShort(comp.date.from)}{comp.date.from === comp.date.till
              ? ""
              : `-${dateToShort(comp.date.till)}`}
          </span>
        </td>
        <td>
          <a
            href="https://www.worldcubeassociation.org/competitions/{comp.id}"
            target="blank"
            class="compName"
            >{comp.name}
          </a>
          <span class="eventIconsRow">
            {#each comp.events.sort((a, b) => eventOrder.indexOf(a) - eventOrder.indexOf(b)) as event}
              <span class="cubing-icon event-{event}"></span>
            {/each}
          </span>
          {#if tableType === "green"}
            <RegSpan {comp}></RegSpan>
          {/if}
          {#if tableType === "blue"}
            <ButtonSpan compId={comp.id} groups={true} liveResults={true}
            ></ButtonSpan>
          {/if}
        </td>
        <td>
          <a
            href="https://www.google.com/maps?q={comp.venue.coordinates
              .latitude},{comp.venue.coordinates.longitude}"
            class="venueName"
          >
            {comp.venue.name}
          </a>
          <br />
          <span class="cityName"><i>{comp.city}</i></span>
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 32px;
  }
  th {
    padding: 10px;
    text-align: left;
    font-weight: bold;
    border: 1px solid var(--colorBlack1);
    color: #fff;
  }
  td {
    padding: 10px;
    text-align: left;
    border: 1px solid var(--colorBlack1);
  }
  .green {
    background-color: var(--colorGreen1);
  }
  .red {
    background-color: var(--colorRed1);
  }
  .blue {
    background-color: var(--colorBlue2);
  }
  tbody tr {
    background-color: var(--colorCompTable1);
  }
  tbody tr:nth-child(even) {
    background-color: var(--colorCompTable2);
  }
  .cityName {
    font-weight: 200;
    font-size: 0.8em;
    color: var(--colorGrey1);
  }
  .venueName,
  .compName,
  .compDate {
    font-weight: 400;
    text-decoration: none;
  }
  .cubing-icon {
    padding: 2px;
  }
  .eventIconsRow {
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0px;
  }

  .eventIconsRow, .compDate, .compName, .venueName{
    color: var(--colorGrey1);
  }
</style>
