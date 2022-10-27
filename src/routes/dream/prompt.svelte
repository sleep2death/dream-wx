<script>
  import { format } from "svelte-i18n";
  export let default_prompt = "input.prompt.placeholder";
</script>

<div class="container">
  <textarea placeholder={$format(default_prompt)} />
</div>

<style>
  .container {
    @apply rounded-lg border border-neutral-200 p-1 h-1/3;
  }
  textarea {
    @apply w-full h-full outline-none resize-none px-1 text-lg;
  }
</style>
