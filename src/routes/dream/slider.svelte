<script>
  import { format } from "svelte-i18n";
  import _ from "lodash";

  export let label;
  export let value;

  export let max;
  export let min;

  let invalid = "";
  export const validator = {
    validate() {
      invalid = "";
      if (!_.isInteger(value)) {
        invalid = $format("invalid.not.int");
        return false;
      }

      if (value > max) {
        invalid = $format("invalid.gt.max", { values: { value: max } });
        return false;
      }

      if (value < min) {
        invalid = $format("invalid.lt.min", { values: { value: min } });
        return false;
      }
      return true;
    },
    reset() {},
  };
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
{#if invalid !== ""}
  <span class="text-sm text-red-500 px-1" style="margin-top:0px;"
    >{invalid}</span
  >
{/if}

<style>
  .left {
    @apply rounded-l-lg border border-neutral-200 px-6 bg-neutral-100;
  }
  .right {
    @apply rounded-r-lg border-r border-y border-neutral-200 px-2;
  }
</style>
