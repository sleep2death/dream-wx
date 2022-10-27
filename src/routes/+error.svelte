<script>
  import { page } from "$app/stores";
</script>

<div class="flex flex-col justify-center">
  <div class="flex flex-row justify-center items-center">
    <div class="border rounded-md w-full mx-8 my-40 p-4 bg-neutral-200">
      <div class="font-semibold flex justify-center">{$page.error.message}</div>
    </div>
  </div>
</div>
