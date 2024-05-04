<script>
	import { slide } from 'svelte/transition';
	import { writable } from 'svelte/store';

	const states = writable({
		first: true,
		second: false,
		third: false,
		fourth: false
	});

	let val;

	states.subscribe((value) => {
		val = value;
	});

	function handleAccordion(e) {
		states.update((value) => {
			return {
				first: false,
				second: false,
				third: false,
				fourth: false,
				[e.target.name]: !value[e.target.name]
			};
		});
	}
</script>

<div>
	<label class="mb-5">
		<input
			class="hidden"
			name="first"
			checked={val.first}
			type="checkbox"
			on:click={handleAccordion}
		/>
		<p
			class={`cursor-pointer ${val.first ? 'text-white' : 'text-[#929C9A]'} font-satoshi font-medium text-[24px] md:text-[32px] lg:text-[40px] mb-4 -tracking-[1.2px]`}
		>
			Buy equipment
		</p>
	</label>
	{#if val.first}
		<div in:slide={{ duration: 500 }} out:slide={{ duration: 500 }}>
			<div class="h-[2px] bg-[#D9DEDD] mb-[14px] w-[250px] lg:w-auto">
				<div class="h-full bg-evergreen-light w-[100px] lg:w-[194px]"></div>
			</div>
			<p
				class="font-satoshi text-[#D2D3DA] text-base lg:text-lg leading-[24.3px] tracking-[0.1px] w-[26ch] lg:w-[28ch]"
			>
				Browse and purchase a wide range of cooking gas equipment, including regulators, hoses,
				valves, and more. Our products are of high quality and sourced from trusted manufacturers.
			</p>
		</div>
	{/if}
</div>

<div>
	<label class="mb-5">
		<input
			class="hidden"
			name="second"
			checked={val.second}
			type="checkbox"
			on:click={handleAccordion}
		/>
		<p
			class={`cursor-pointer ${val.second ? 'text-white' : 'text-[#929C9A]'} font-satoshi font-medium text-[24px] md:text-[32px] lg:text-[40px] mb-4 -tracking-[1.2px]`}
		>
			Quickly order gas
		</p>
	</label>
	{#if val.second}
		<div in:slide={{ duration: 500 }} out:slide={{ duration: 500 }}>
			<div class="h-[2px] bg-[#D9DEDD] mb-[14px] w-[250px] lg:w-auto">
				<div class="h-full bg-evergreen-light w-[100px] lg:w-[194px]"></div>
			</div>
			<p class="font-satoshi text-[#D2D3DA] text-base lg:text-lg leading-[24.3px] tracking-[0.1px] w-[26ch] lg:w-[28ch]">
				Our platform is designed for quick and hassle-free ordering. No more waiting in line or
				making phone calls – order from the comfort of your home or on the go.
			</p>
		</div>
	{/if}
</div>

<div>
	<label class="mb-5">
		<input
			class="hidden"
			name="third"
			checked={val.third}
			type="checkbox"
			on:click={handleAccordion}
		/>
		<p
			class={`cursor-pointer ${val.third ? 'text-white' : 'text-[#929C9A]'} font-satoshi font-medium text-[24px] md:text-[32px] lg:text-[40px] mb-4 -tracking-[1.2px]`} aria-describedby="third"
		>
			Find handymen
		</p>
	</label>
	{#if val.third}
		<div in:slide={{ duration: 500 }} out:slide={{ duration: 500 }} aria-expanded="{val.third}">
			<div class="h-[2px] bg-[#D9DEDD] mb-[14px] w-[250px] lg:w-auto">
				<div class="h-full bg-evergreen-light w-[100px] lg:w-[194px]"></div>
			</div>
			<p class="font-satoshi text-[#D2D3DA] text-base lg:text-lg leading-[24.3px] tracking-[0.1px] w-[26ch] lg:w-[28ch]" id="third">
				Need professional help with gas installations, repairs, or maintenance? Use our app to
				connect with experienced and well vetted handymen who specialize in gas-related services.
			</p>
		</div>
	{/if}
</div>

<div>
	<label class="mb-5">
		<input
			class="hidden"
			name="fourth"
			checked={val.fourth}
			type="checkbox"
			on:click={handleAccordion}
		/>
		<p
			class={`cursor-pointer ${val.fourth ? 'text-white' : 'text-[#929C9A]'} font-satoshi font-medium text-[24px] md:text-[32px] lg:text-[40px] mb-4 -tracking-[1.2px]`}
		>
			24/7 support
		</p>
	</label>
	{#if val.fourth}
		<div in:slide={{ duration: 500 }} out:slide={{ duration: 500 }}>
			<div class="h-[2px] bg-[#D9DEDD] mb-[14px] w-[250px] lg:w-auto">
				<div class="h-full bg-evergreen-light w-[100px] lg:w-[194px]"></div>
			</div>
			<p class="font-satoshi text-[#D2D3DA] text-base lg:text-lg leading-[24.3px] tracking-[0.1px] w-[26ch] lg:w-[28ch]">
				We take pride in providing exceptional service and ensuring customer satisfaction. Our team
				is here to assist you every step of the way, from ordering to delivery.
			</p>
		</div>
	{/if}
</div>
