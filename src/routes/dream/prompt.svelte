<script>
  import { format } from "svelte-i18n";
  import _ from "lodash";

  export let default_prompt = "input.prompt.placeholder";
  export let value;

  let invalid = "";
  let max_size = 1024;

  export const validator = {
    validate() {
      invalid = "";
      if (_.isEmpty(value)) {
        invalid = $format("invalid.empty");
        return false;
      }

      if (_.size(value) > max_size) {
        invalid = $format("invalid.chars.gt.size", {
          values: { value: max_size },
        });
        return false;
      }

      return true;
    },

    reset() {
      invalid = "";
    },
  };
</script>

<div class="container">
  <textarea placeholder={$format(default_prompt)} bind:value />
</div>
{#if invalid !== ""}
  <span class="text-sm text-red-500 px-1" style="margin-top:0px"
    >{$format(invalid)}</span
  >
{/if}

<style>
  .container {
    @apply rounded-lg border border-neutral-200 p-1 h-1/3;
  }
  textarea {
    @apply w-full h-full outline-none resize-none px-1 text-lg;
  }
</style>
