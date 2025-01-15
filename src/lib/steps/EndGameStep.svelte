<script lang="ts">
	export let formData;

	import TextInput from '$lib/components/TextInput.svelte';
	import Switch from '$lib/components/Switch.svelte';
	import RadioGroup from '$lib/components/RadioGroup.svelte';
	import NumberInput from '$lib/components/NumberInput.svelte';

	let climbOptions = [
		{ value: 'shallow', label: 'Shallow' },
		{ value: 'deep', label: 'Deep' }
	];
</script>

<section class="flex flex-col">
	<div>
		<div class="mb-4 flex w-full items-center justify-between">
			<h1 class="text-2xl font-semibold">End</h1>
			<h1 class="text-2x l font-semibold">4/4</h1>
		</div>
		<div class="mb-6 mt-6">
			<Switch label="Attempted to climb?" bind:value={formData.endClimbAttempt} />
		</div>

		{#if formData.endClimbAttempt == 'on'}
			<div>
				<RadioGroup options={climbOptions} bind:selected={formData.endClimbLevel}/>
				{formData.climbLevel}

				<div class="mb-6 mt-6">
					<Switch label="Climb failed?" bind:value={formData.endClimbFailed} />
				</div>
			</div>
		{/if}

		<div class="mb-6 mt-6">
			<Switch label="Played as defense?" bind:value={formData.endDefense} />
		</div>
		<div class="mb-6 mt-6">
			<Switch label="Robot failed?" bind:value={formData.endRobotFailed} />
		</div>
	</div>

	<div>
		<TextInput size="medium" placeholder="Comments" bind:value={formData.comments} />
	</div>

	<div class="flex flex-col mt-4">
		<h3>Fouls: </h3>
		<NumberInput bind:value={formData.endFouls}/>
	</div>
</section>
