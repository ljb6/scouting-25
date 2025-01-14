<script lang="ts">
	let values = $state();

	type Option = {
		value: string | number;
		label: string;
	};

	let { options, selected = $bindable() } = $props();

	function onChange(event: Event) {
		selected = (event.currentTarget as HTMLInputElement).value;
	}
</script>

<div class="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap- justify-center">
	{#each options as { value, label }}
		<label class="flex items-center">
			<input 
				bind:group={selected} 
				type="radio" 
				name="amount" 
				{value} 
				class="appearance-none peer hidden" 
			/>
			<span 
				class="cursor-pointer peer-checked:bg-sky-600 peer-checked:text-white rounded-full px-4 sm:px-5 md:px-6 h-10 sm:h-12 md:h-14 flex items-center justify-center text-sm sm:text-base md:text-lg bg-sky-100 hover:bg-sky-500 hover:text-white transition"
			>
				{label}
			</span>
		</label>
	{/each}
</div>
