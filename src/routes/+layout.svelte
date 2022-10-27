<script>
  import "../app.css";
  import TabBar from "../lib/components/tabbar.svelte";
  import { i18nInit } from "../i18n.js";

  i18nInit();
</script>

<div class="container">
  <slot />
</div>
<div>
  <TabBar />
</div>

<style>
  .container {
    @apply h-screen;
  }
</style>
