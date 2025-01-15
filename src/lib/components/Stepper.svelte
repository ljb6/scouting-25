<script>
	import AutonomousStep from '$lib/steps/AutonomousStep.svelte';
	import TeleopStep from '$lib/steps/TeleopStep.svelte';
	import PreGameStep from '$lib/steps/PreGameStep.svelte';
	import EndGameStep from '$lib/steps/EndGameStep.svelte';
	import StartStep from '$lib/steps/StartStep.svelte';

	let currentStep = $state(0);
	let { email, name } = $props();

	let formData = {
		// pre
		name: name,
		email: email[0].emailAddress,
		teamNumber: '',
		matchNumber: 0,
		matchLevel: 'Quali',

		// auto
		autoL1Corals: 0,
		autoL2Corals: 0,
		autoL3Corals: 0,
		autoL4Corals: 0,
		autoLeft: 'off',
		autoProcessor: 0,

		// tele
		teleL1Corals: 0,
		teleL2Corals: 0,
		teleL3Corals: 0,
		teleL4Corals: 0,
		teleProcessor: 0,
		teleNet: 0,

		// end
		endClimbAttempt: 'off',
		endClimbLevel: 'off',
		endClimbFailed: 'off',
		endDefense: 'off',
		endRobotFailed: 'off',
		endFouls: 0,
		comments: ''
	};

	const steps = [StartStep, PreGameStep, AutonomousStep, TeleopStep, EndGameStep];

	function nextStep() {
		if (currentStep < steps.length - 1) {
			currentStep++;
		} else {
			submit();
		}
	}

	function previousStep() {
		if (currentStep > 0) {
			currentStep--;
		}
	}

	async function submit() {
					
		console.log(formData);

		try {
			const res = await fetch('/processing', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData)
			});

			const responseData = await res.json();

			if (!res.ok) {
				console.error(responseData.message);
				return;
			}
			console.log('Server response:', responseData);
		} catch (err) {
			console.error('Erro ao enviar dados:', err);
		}
	}
</script>

<section class="flex flex-col items-center">
	<!--<svelte:component this={steps[currentStep]} {formData} />-->
	{#key currentStep}
		{#if currentStep === 0}
			<StartStep />
			<h2>Scouter: {formData.name}</h2>
		{:else if currentStep === 1}
			<PreGameStep {formData} />
		{:else if currentStep === 2}
			<AutonomousStep {formData} />
		{:else if currentStep === 3}
			<TeleopStep {formData} />
		{:else if currentStep === 4}
			<EndGameStep {formData} />
		{/if}
	{/key}

	<div class="mt-6 flex w-full justify-between gap-4 sm:w-3/4 md:w-1/2">
		{#if currentStep > 0}
			<button
				onclick={previousStep}
				class="mx-4 flex-1 rounded-full bg-gray-300 px-4 py-2 font-semibold text-black transition hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
			>
				Voltar
			</button>
		{/if}

		<button
			onclick={nextStep}
			class="mx-4 flex-1 rounded-full bg-sky-600 px-4 py-2 font-semibold text-white transition hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
		>
			{#if currentStep == 0}
				Começar
			{:else if currentStep < steps.length - 1}
				Próximo
			{:else}
				Concluir
			{/if}
		</button>
	</div>
</section>
