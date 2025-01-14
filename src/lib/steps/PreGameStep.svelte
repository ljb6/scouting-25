<script lang="ts">
	let tournamentOptions = [
		{ value: 'practice', label: 'Practice' },
		{ value: 'quali', label: 'Quali' },
		{ value: 'playoff', label: 'Playoff' }
	];

	export let formData;

	import RadioGroup from '$lib/components/RadioGroup.svelte';
	import NumberInput from '$lib/components/NumberInput.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
</script>

<section class="">
	<div class="mb-4 flex items-center justify-between">
		<h1 class="text-2xl font-semibold">Pregame</h1>
		<h1 class="text-2xl font-semibold">1/4</h1>
	</div>
	<div class="mt-4">
		<h3>Team:</h3>
		<TextInput placeholder="Team number" bind:value={formData.teamNumber} />
	</div>
	<div class="flex flex-col justify-center gap-2">
		<div class="mt-4 flex flex-col gap-1">
			<h3>Match level:</h3>
			<RadioGroup options={tournamentOptions} bind:selected={formData.matchLevel} />
		</div>
		<div class="mt-4 flex flex-col gap-1">
			<h3 class="justify-center">Match number:</h3>
			<NumberInput max={150} bind:value={formData.matchNumber} />
		</div>
	</div>
</section>
