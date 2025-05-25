<script>
  import { eventOrder, dateToShort, getRegDate } from "$lib/comp_table_helpers";

  const { comps, type } = $props();
</script>

<table>
  <tbody class:upcoming={type==="upcoming"} class:current={type==="current"} class:recent={type==="recent"}>
{#each comps as comp}
      <tr>
        <td>
          <!-- Comp name and events -->
          <div class="col1">
            <!-- Comp name -->
            <a 
              href="https://www.worldcubeassociation.org/competitions/{comp.id}"
              target="blank"
              class="comp_name"
            >
              {comp.name}
            </a>
          </div>
          <!-- End comp name and events -->

          <!-- City and venue -->
          <div class="col2">
            <span class="city_name">{comp.city}</span>
            <a
              href="https://www.google.com/maps?q={comp.venue.coordinates
                .latitude},{comp.venue.coordinates.longitude}"
              target="_blank"
              class="venue_name"
            >
              <i>{comp.venue.name}</i>
            </a>
          </div>
          <!-- End city and venue -->

          <!-- Date and reg -->
          <div class="col3">
            <span class="comp_date">
              {dateToShort(comp.date.from)}{comp.date.from === comp.date.till
              ? ""
              : `-${dateToShort(comp.date.till)}`}
            </span>
            {#if type != "recent"}
              <a href={comp.externalWebsite || `https://www.worldcubeassociation.org/competitions/${comp.id}/register`}
                target="_blank" class="reg_date">
                <i>{getRegDate(comp)}</i>
              </a>
            {/if}
          </div>
          <!-- End date and reg -->

          <!-- Event icons -->
          <div class="col4">
            <span class="event_icons_row">
              <p>
                {#each comp.events.sort((a, b) => eventOrder.indexOf(a) - eventOrder.indexOf(b)) as event}
                  <span class="cubing-icon event-{event}"></span>
                {/each}
              </p>
            </span>
          </div>
          <!-- End event icons -->
        </td>
      </tr>
{/each}
  </tbody>
</table>

<style>
  table{
    width: 100%;
    table-layout: fixed;
    max-width: 900px;
    border-collapse: collapse;
  }
  td{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  tr{
    border: 1px solid var(--colorBlack1);
  }
  tbody tr {
    background-color: var(--colorCompTable1);
  }
  tbody tr:nth-child(even) {
    background-color: var(--colorCompTable2);
  }
  .col1, .col2, .col3, .col4 {
    display: flex;
    flex-direction: column;
    padding: 2px 8px;
    box-sizing: border-box;
    justify-content: center;
  }
  .col1 {
    width: 40%;
  }
  .col2, .col3 {
    width: 30%;
  }
  .col4{
    width: 100%;
  }

  .comp_name{
    font-size: clamp(1rem, 1.2vw, 1.3rem);
    font-weight: 500;
    color: white;
  }

  .city_name, .comp_date{
    font-size: clamp(0.8rem, 1.05vw, 1.1rem);
    color: white;
  }

  .venue_name, .reg_date, .cubing-icon {
    font-size: clamp(0.7rem, 0.9vw, 0.9rem);
  }
  .venue_name, .cubing-icon{
    color: var(--colorGrey1);
  }
  .reg_date{
    color: var(--colorGreen1);
  }
  .cubing-icon{
    padding: 2px;
  }
  .upcoming td{
    border-left: 4px solid var(--colorGreen1);
  }
  .recent td{
    border-left: 4px solid var(--colorRed1);
  }
  .current td{
    border-left: 4px solid var(--colorBlue2);
  }
</style>