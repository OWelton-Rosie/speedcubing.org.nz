<script>
  import { slide } from 'svelte/transition';
  let {title, children, isBottom=false} = $props();
  let expanded = $state(false);
</script>

<div class="container" class:bottom={isBottom}>
  <button onclick={() => expanded =! expanded}>
    <div class="label">
      <h3>{@html title}</h3>
      <p>{expanded ? "-" : "+"}</p>
    </div>
  </button>
    {#if expanded}
      <div class="content" transition:slide={{duration: 150}}>
        {@render children()}
      </div>
    {/if}
</div>

<style>
  h3 {
    font-weight: 400;
  }
  button {
    all: unset;
    cursor: pointer;
    width: 100%;
    text-align: left;
  }
  .container{
    border-top: 1px solid var(--colorGrey2);
    background-color: var(--colorCompTable2);
  }
  .bottom{
    border-bottom: 1px solid var(--colorGrey2);
  }
  .label{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    user-select: none;
    padding: 8px;
  }
  .content{
    color: var(--colorGrey1);
    padding: 8px 0px;
    padding: 8px;
    background-color: var(--colorBlack2);
  }
</style>