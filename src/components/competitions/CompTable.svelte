<script>
  let width = $state(window.innerWidth);

  let { type, comps } = $props();

  const updateWidth = () => {
    width = window.innerWidth;
  };

  // Listen to window resize
  window.addEventListener('resize', updateWidth);

  // Clean up when component is destroyed
  import { onDestroy } from 'svelte';
  import DesktopCompTable from './DesktopCompTable.svelte';
  import MobileCompTable from './MobileCompTable.svelte';
  onDestroy(() => {
    window.removeEventListener('resize', updateWidth);
  });
</script>

<!-- Render either the desktop version or mobile version  -->
{#if width < 768}
  <MobileCompTable {comps} {type}></MobileCompTable>
{:else}
  <DesktopCompTable {comps} {type}></DesktopCompTable>
{/if}