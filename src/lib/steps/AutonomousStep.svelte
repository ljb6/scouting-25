<script lang="ts">
    export let formData;

    import NumberInput from "$lib/components/NumberInput.svelte";
	import Switch from "$lib/components/Switch.svelte";
</script>

<section class="">
    <div class="flex justify-between items-center w-full mb-4">
        <h1 class="text-2xl font-semibold">Auto</h1>
        <h1 class="text-2xl font-semibold">2/4</h1>
    </div>
    <div class="mt-6 mb-6">
        <Switch label="Left zone" bind:value={formData.autoLeft}/>
    </div>
    <div class="flex gap-4">
        <div >
            <h3>L1 🪸</h3>
            <NumberInput max={7} bind:value={formData.autoL1Corals}/>
        </div>
        <div>
            <h3>L2 🪸</h3>
            <NumberInput max={7} bind:value={formData.autoL2Corals}/>
        </div>
    </div>

    <div class="flex gap-4 mt-4">
        <div>
            <h3>L3 🪸</h3>
            <NumberInput max={7} bind:value={formData.autoL3Corals}/>
        </div>
        <div>
            <h3>L4 🪸</h3>
            <NumberInput max={7} bind:value={formData.autoL4Corals}/>
        </div>
    </div>
    <div class="flex gap-4 mt-4">
        <div >
            <h3>Processor 🥅</h3>
            <NumberInput max={7} bind:value={formData.autoProcessor}/>
        </div>
        <div>
            <h3>Net 🥅</h3>
            <NumberInput max={7} bind:value={formData.autoNet}/>
        </div>
    </div>
</section>

