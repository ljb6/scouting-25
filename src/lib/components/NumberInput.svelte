<script>
	import '../../app.css';
	let { min = 0, max = 20, value = $bindable() } = $props();

	function handleIncrease() {
		if (value < max) value++;
	}

	function handleDecrease() {
		if (value > min) value--;
	}
	
</script>

<section class="flex items-center justify-center">
	<button
		onclick={handleDecrease}
		type="button"
		class="h-10 w-10 rounded-l-full border border-black bg-sky-600 text-lg transition hover:bg-sky-500 sm:h-12 sm:w-12 sm:text-xl md:h-14 md:w-14 md:text-2xl"
	>
		-
	</button>
	<input
		bind:value={value}
		class="h-10 w-16 border-b border-t border-black text-center text-lg sm:h-12 sm:w-20 sm:text-xl md:h-14 md:w-24 md:text-2xl"
	/>
	<button
		onclick={handleIncrease}
		type="button"
		class="h-10 w-10 rounded-r-full border border-black bg-sky-600 text-lg transition hover:bg-sky-500 sm:h-12 sm:w-12 sm:text-xl md:h-14 md:w-14 md:text-2xl"
	>
		+
	</button>
</section>
