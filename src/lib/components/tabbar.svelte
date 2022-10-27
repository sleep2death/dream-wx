<script>
	import { Icon } from "@steeze-ui/svelte-icon";
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";

	import {
		Home,
		PaintBrush,
		MagnifyingGlass,
		Heart,
		User,
	} from "@steeze-ui/heroicons";

	let selected = 1;
	let arr = ["/", "/search", "/dream", "/activity", "/account"];

	let size = "28";

	$: selected = arr.indexOf($page.url.pathname);
	$: console.log($page.url.pathname);
</script>

<div class="tabbar">
	<button
		on:click={() => {
			goto("/");
		}}
	>
		<Icon src={Home} {size} theme={selected === 0 ? "solid" : "outline"} />
	</button>
	<button
		on:click={() => {
			goto("/search");
		}}
	>
		<Icon
			src={MagnifyingGlass}
			{size}
			theme={selected === 1 ? "solid" : "outline"}
		/>
	</button>
	<button
		on:click={() => {
			goto("/dream");
		}}
	>
		<Icon
			src={PaintBrush}
			{size}
			theme={selected === 2 ? "solid" : "outline"}
		/>
	</button>
	<button>
		<Icon src={Heart} {size} theme={selected === 3 ? "solid" : "outline"} />
	</button>
	<button>
		<Icon src={User} {size} theme={selected === 4 ? "solid" : "outline"} />
	</button>
</div>

<style>
	.tabbar {
		@apply flex flex-row items-center px-6 text-lg h-12 border-t border-t-neutral-400 justify-between fixed bottom-0 w-full mb-4;
	}
</style>
