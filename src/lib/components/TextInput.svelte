<script>
	let { size = 'small', placeholder, value = $bindable() } = $props();
</script>

<section>
	{#if size == 'small'}
		<input
			type="text"
			{placeholder}
			class="
				mx-auto block
				w-full rounded-full border
				border-black px-4 py-2
				text-sm placeholder-gray-400 transition focus:outline-none
				focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 sm:w-3/4 sm:text-base
				md:w-1/2 md:text-lg 
			"
			bind:value={value}
		/>
	{:else if size == 'medium'}
		<textarea
			{placeholder}
			class="
				mx-auto block 
				w-[300px] resize-none rounded-xl
				border border-black px-4 py-2
				text-sm placeholder-gray-400 transition focus:outline-none
				focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 sm:w-3/4 sm:text-base
				md:w-1/2 md:text-lg
			"
			bind:value={value}
		></textarea>
	{/if}
</section>
