<script>
	import { Icon } from "@steeze-ui/svelte-icon";
	import { PaintBrush, ChatBubbleOvalLeft } from "@steeze-ui/heroicons";
</script>

<div class="header">
	<div class="flex flex-row">
		<button class="mr-2">
			<Icon src={PaintBrush} size="24" />
		</button>
		<div class="w-fit">
			<img src="/static/images/Logo.png" alt="Logo" class="w-full" />
		</div>
	</div>
	<div class="flex flex-1" />
	<button>
		<Icon src={ChatBubbleOvalLeft} size="24" />
	</button>
</div>

<style>
	.header {
		@apply flex flex-row items-center px-4 text-lg h-12 border border-b-neutral-300 flex flex-row;
	}

	img {
		@apply h-8;
	}
</style>
