<script>
  import { slide } from 'svelte/transition';
  let {title, children, isBottom=false, n} = $props();

  let expanded = false;
</script>

<div class="container" class:bottom={isBottom}>
  <button onclick={() => {}}>
    <div class="label">
      <h3>{@html title}</h3>
      <h3 class="plus">{expanded ? "-" : "+"}</h3>
    </div>
  </button>
    {#if expanded}
      <div class="content" transition:slide={{duration: 150}}>   <!-- transition:slide={{duration: 150}} -->
        {@render children()}
      </div>
    {/if}
</div>

<style>
  h3 {
    font-weight: 300;
  }
  button {
    all: unset;
    cursor: pointer;
    width: 100%;
    text-align: left;
  }
  .container{
    border-top: 1px solid var(--colorGrey2);
  }
  .bottom{
    border-bottom: 1px solid var(--colorGrey2);
  }
  .label{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    user-select: none;
    padding: 12px 8px;
    transition: background-color 0.3s ease;
  }
  .content{
    color: var(--colorGrey1);
    padding: 16px 8px 32px 8px;
  }
  .plus{
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>