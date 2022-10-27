<script>
  import { format } from "svelte-i18n";
  export let label;
  export let value;
  export let max;
  export let min;
</script>

<div class="flex justify-center h-12 w-full">
  <div class="left flex flex-row items-center">{$format(label)}</div>
  <div class="right flex flex-row items-center flex-1">
    <input
      class="w-full h-full px-4 outline-none text-right"
      type="number"
      {max}
      {min}
      bind:value
    />
  </div>
</div>

<style>
  .left {
    @apply rounded-l-lg border border-neutral-200 px-6 bg-neutral-100;
  }
  .right {
    @apply rounded-r-lg border-r border-y border-neutral-200 px-2;
  }
</style>
