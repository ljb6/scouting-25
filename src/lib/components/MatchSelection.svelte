<script lang="ts">
	import RadioGroup from './RadioGroup.svelte';
	import NumberInput from './NumberInput.svelte';

	let tournamentOptions = [
		{ value: 'practice', label: 'Practice' },
		{ value: 'quali', label: 'Quali' },
		{ value: 'playoff', label: 'Playoff' }
	];

	let tournamentLevel;
</script>

<section class="flex justify-center gap-2">
    <div class="flex flex-col gap-1">
        <h3>Match level:</h3>
        <RadioGroup options={tournamentOptions} bind:selected={tournamentLevel}/>
    </div>
    <div class="flex flex-col gap-1">
        <h3>Match number:</h3>
        <NumberInput max={150} />
    </div>
</section>
