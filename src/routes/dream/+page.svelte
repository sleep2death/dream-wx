<script>
  import Prompt from "./prompt.svelte";
  import { format } from "svelte-i18n";
  import Slider from "./slider.svelte";
  import { DreamSettings } from "../../lib/store.js";
</script>

<div class="flex flex-row justify-center h-full">
  <div class="flex flex-col p-4 w-full space-y-4">
    <Prompt />
    <Slider
      label="dream.steps"
      bind:value={$DreamSettings.steps}
      max={75}
      min={25}
    />
    <Slider
      label="dream.scale"
      bind:value={$DreamSettings.scale}
      max={15}
      min={1}
    />
    <Slider
      label="dream.seed"
      bind:value={$DreamSettings.seed}
      max={99999}
      min={0}
    />
    <div class="border-t border-neutral-200" />
    <button class="btn-gen">
      <div class="btn-inner">{$format("btn.generate")}</div>
    </button>
  </div>
</div>

<style>
  .btn-gen {
    @apply rounded-lg w-full flex flex-row justify-center h-12 bg-green-500 text-white;
  }
  .btn-inner {
    @apply h-full flex flex-col justify-center text-2xl;
  }
</style>
