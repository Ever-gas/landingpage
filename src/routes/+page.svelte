<script>
	import Nav from '$lib/components/Nav.svelte';
	import Accordion from '$lib/components/Accordion.svelte';
	import Card from '$lib/components/Card.svelte';
	import Step from '$lib/components/Steps.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
</script>

<main>
	<section
		class="bg-[url('/images/banner.jpg')] bg-[#0000004D] bg-no-repeat bg-center bg-cover bg-blend-overlay"
	>
		<Nav />

		<section class="relative px-5 md:px-16 py-32">
			<h2
				class="font-satoshi font-bold text-white leading-10 lg:leading-[80px] text-[42px] lg:text-[84px] -tracking-[2.52px] w-full text-center lg:text-start lg:w-[15ch] mb-4"
			>
				A better way to buy cooking gas
			</h2>
			<p
				class="font-satoshi text-xs lg:text-xl text-center lg:text-start w-full leading-4 lg:leading-8 font-medium text-white lg:w-[55ch] mb-12"
			>
				Say goodbye to long waits and tedious processes. With our streamlined online ordering
				system, getting your cooking gas has never been easier.
			</p>
			<div class="flex justify-center w-full gap-x-6 lg:justify-start">
				<a href="https://google.com">
					<img src="/images/play-button.png" alt="" role="presentation" />
				</a>
				<a href="https://apple.com">
					<img src="/images/app-button.png" alt="" role="presentation" />
				</a>
			</div>
			<div
				class="absolute flex left-0 bottom-0 w-full justify-center lg:justify-end pb-4 lg:pb-8 lg:pe-14"
			>
				<div class="flex gap-x-[10px] items-center bg-white p-2 rounded-[10px]">
					<div class="flex">
						<img
							src="/images/img-circle1.png"
							width="30"
							class="rounded-full"
							alt=""
							role="presentation"
						/>
						<img
							src="/images/img-circle2.png"
							width="30"
							class="rounded-full -ms-2"
							alt=""
							role="presentation"
						/>
						<img
							src="/images/img-circle3.png"
							width="30"
							class="rounded-full -ms-2"
							alt=""
							role="presentation"
						/>
					</div>
					<p class="font-satoshi font-medium text-[#161525] text-xs md:text-base">
						Trusted by 21,000+ people
					</p>
				</div>
			</div>
		</section>
	</section>

	<section class="px-5 md:px-16 pt-[141px]">
		<p class="font-satoshi text-hint text-center font-medium lg-[6px] lg:mb-[10px] uppercase">
			Unlock Capital
		</p>
		<h3
			class="font-satoshi font-bold text-heading leading-[30px] lg:leading-[44px] -tracking-[0.6px] text-[20px] lg:text-[54px] text-center mb-[42px] lg:mb-[84px]"
		>
			Some top features we bring to you
		</h3>

		<div class="flex flex-col lg:flex-row gap-x-[18px] gap-y-[18px] mb-[18px]">
			<div class="lg:w-2/3 flex flex-col md:flex-row bg-everdark justify-between rounded-2xl">
				<div class="md:w-[356px] ps-[22px] lg:ps-[44px] py-[33px]">
					<img src="/images/arrow-diagonal-dark.svg" alt="" role="presentation" class="mb-[40px]" />
					<Accordion />
				</div>
				<div class="md:w-[360px]">
					<img
						class="object-cover h-full rounded-2xl md:rounded-tl-none md:rounded-bl-none md:rounded-br-2xl md:rounded-tr-2xl"
						src="/images/brown-lady.jpg"
						alt=""
					/>
				</div>
			</div>
			<div
				class="lg:w-1/3 bg-evergreen-dark ps-[22px] lg:ps-[44px] py-[33px] rounded-2xl flex flex-col justify-between"
			>
				<div class="mb-5 lg:mb-0">
					<img src="/images/arrow-diagonal.svg" alt="" role="presentation" class="mb-[40px]" />
					<p class="font-satoshi font-medium text-[40px] -tracking-[1.2px] text-white">
						Reliable Delivery
					</p>
				</div>
				<div>
					<p
						class="font-satoshi font-medium text-lg tracking-[0.1px] text-white leading-[24.3px] w-[22ch] md:w-[40ch] lg:w-[28ch]"
					>
						We prioritize timely delivery to ensure you never run out of cooking gas when you need
						it the most. Say goodbye to last-minute emergencies.
					</p>
				</div>
			</div>
		</div>

		<div class="flex flex-col lg:flex-row gap-x-[18px] gap-y-[18px]">
			<Card
				title="Easy Online Payments"
				color="bg-everblue"
				content="Secure online payment options make transactions smooth and worry-free.  You can choose your preferred payment method for added convenience."
			/>
			<Card
				title="Gas Refill Reminders"
				color="bg-[#DFE8E5]"
				content="Keeping track of your cooking gas usage can be a hassle. That's why  we've introduced refill reminders to ensure you always have a steady  supply of gas when you need it most."
			/>
			<div class="flex-1">
				<img
					src="/images/man-truck.jpg"
					alt=""
					role="presentation"
					class="rounded-2xl h-full object-cover"
				/>
			</div>
		</div>
	</section>

	<section class="px-5 md:px-16 pt-[141px]">
		<p class="font-satoshi text-hint text-center font-medium lg-[6px] lg:mb-[10px] uppercase">
			let's go
		</p>
		<h3
			class="font-satoshi font-bold text-heading leading-[30px] lg:leading-[44px] -tracking-[0.6px] text-[20px] lg:text-[54px] text-center mb-[55px] lg:mb-[110px]"
		>
			Get started in 3 simple steps
		</h3>
		<div
			class="flex flex-col lg:flex-row gap-x-[54px] bg-[#F5F5F5] p-6 rounded-2xl gap-y-[54px] lg:gap-y-0"
		>
			<div class="flex flex-col gap-y-[26px] w-auto order-2 lg:order-1">
				<Step
					step="1"
					title="Create Account"
					content="Get started by creating an account. It takes less than a minute - seriously"
				/>
				<Step
					step="2"
					title="Find Gas Stations"
					content="Select a gas station, Simply select your preferred gas cylinder size, quantity and delivery method."
				/>
				<Step
					step="3"
					title="Get it Delivered"
					content="Sit back and relax. Our delivery team will ensure your cooking gas is delivered to you on time."
				/>
			</div>
			<div class="lg:w-[48.125rem] order-1 lg:order-2 rounded-xl">
				<img
					class="object-cover h-full rounded-xl"
					src="/images/lady-laptop.jpg"
					alt=""
					role="presentation"
				/>
			</div>
		</div>
	</section>

	<section class="pt-[141px]">
		<p class="font-satoshi text-hint text-center font-medium lg-[6px] lg:mb-[10px] uppercase">
			The gas universe
		</p>
		<h3
			class="font-satoshi font-bold text-heading leading-[30px] lg:leading-[44px] -tracking-[0.6px] text-[20px] lg:text-[54px] text-center mb-[83px] lg:mb-[110px]"
		>
			Connecting the entire value chain
		</h3>
		<Carousel />
	</section>

</main>
