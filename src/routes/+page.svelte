<script lang="ts">
	import Stepper from '$lib/components/Stepper.svelte';
	import UserButton from 'clerk-sveltekit/client/UserButton.svelte';
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte';

	let tournamentLevels = [
		{ value: 'Practice', label: 'Practice' },
		{ value: 'Quali', label: 'Quali' },
		{ value: 'Play-off', label: 'Play-off' }
	];
</script>

<SignedIn let:user>
	<div class="ml-4 mt-4">
		<UserButton afterSignOutUrl="/" />
	</div>
	<section class="mt-10 flex flex-col justify-center">
		<!-- {typeof(JSON.stringify(user?.emailAddresses))} -->
		<Stepper name={user?.fullName} email={user?.emailAddresses} />
	</section>
</SignedIn>
<SignedOut>
	<a href="/sign-in">Sign in</a> <span>|</span> <a href="/sign-up">Sign up</a>
	<!-- You could also use <SignInButton mode="modal" /> and <SignUpButton mode="modal" /> here -->
</SignedOut>
