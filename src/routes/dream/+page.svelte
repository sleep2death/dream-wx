<script>
  import Prompt from "./prompt.svelte";
  import { format } from "svelte-i18n";
  import Slider from "./slider.svelte";
  import { DreamSettings } from "../../lib/store.js";

  const url = "/api/dream/new";

  let promptV;
  let stepsV;
  let scaleV;
  let seedV;

  async function validate() {
    if (!promptV.validate()) {
      return;
    }
    if (!stepsV.validate()) {
      return;
    }
    console.log("validate");
    if (!scaleV.validate()) {
      return;
    }
    if (!seedV.validate()) {
      return;
    }

    // create new dream task
    try {
      const f = await fetch("/api/dream/new", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify($DreamSettings),
      });

      if (!f.ok) {
        throw new Error(f.statusText, "can't fetch data from:", url);
      }

      const res = await f.json();
      if (!res.ok) {
        throw new Error("invalid response:", err.msg);
      }
    } catch (e) {
      console.error(e);
    }
    // TODO: check errors
  }

  function generate() {
    validate();
  }
</script>

<div class="flex flex-row justify-center h-full">
  <div class="flex flex-col p-4 w-full space-y-4">
    <Prompt bind:value={$DreamSettings.prompt} bind:validator={promptV} />
    <Slider
      bind:validator={stepsV}
      label="dream.steps"
      bind:value={$DreamSettings.steps}
      max={75}
      min={25}
    />
    <Slider
      bind:validator={scaleV}
      label="dream.scale"
      bind:value={$DreamSettings.scale}
      max={15}
      min={1}
    />
    <Slider
      bind:validator={seedV}
      label="dream.seed"
      bind:value={$DreamSettings.seed}
      max={999999}
      min={0}
    />
    <div class="border-t border-neutral-200" />
    <button class="btn-gen" on:click={generate}>
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
