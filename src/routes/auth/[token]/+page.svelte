<script>
  export let data;
</script>

{#if data.error}
  <div>{data.error}</div>
{:else}
  <div>OK</div>
{/if}
