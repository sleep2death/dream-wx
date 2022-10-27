<script>
  import "../app.css";
  import TabBar from "../lib/components/tabbar.svelte";
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
