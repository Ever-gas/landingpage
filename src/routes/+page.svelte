<script>
	import Nav from '$lib/components/Nav.svelte';
	import Accordion from '$lib/components/Accordion.svelte';
	import Card from '$lib/components/Card.svelte';
	import Step from '$lib/components/Steps.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import FaqItem from '$lib/components/FaqItem.svelte';
</script>

<main>
	<section
		class="bg-[url('/images/banner.jpg')] bg-[#0000004D] bg-no-repeat bg-center bg-cover bg-blend-overlay"
	>
		<Nav />

		<section class="relative px-5 md:px-16 py-32">
			<h2
				class="font-satoshi font-bold text-white leading-10 lg:leading-[80px] text-[42px] lg:text-[84px] -tracking-[2.52px] w-full text-center lg:text-start lg:w-[15ch] mt-10 lg:mt-0 mb-4"
			>
				A better way to buy cooking gas
			</h2>
			<p
				class="font-satoshi text-xs lg:text-xl text-center lg:text-start w-full leading-4 lg:leading-8 font-medium text-white lg:w-[55ch] mb-28 lg:mb-12"
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

	<section class="pt-[141px] mb-[75px]">
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

	<section class="px-5 md:px-16 mb-[78px]">
		<div class="py-[64px] px-[30px] md:px-[60px] bg-evergrey rounded-3xl">
			<div class="flex items-center gap-x-[10px] mb-[56px] pb-5 border-b border-evergreen-soft justify-center md:justify-start">
				<img src="/images/dot.svg" alt="" role="presentation" />
				<p class="font-satoshi font-medium text-title -tracking-[0.056px] text-sm uppercase">faq</p>
			</div>

			<div
				class="flex justify-between items-stretch gap-x-[96px] gap-y-14 lg:gap-y-0 flex-col lg:flex-row"
			>
				<div class="flex flex-col justify-between gap-y-10 lg:gap-0">
					<h3
						class="font-satoshi font-bold text-[31px] md:text-[62px] leading-[34px] md:leading-[68px] -tracking-[1.86px] text-title text-center md:text-start"
					>
						Answers to the frequently asked questions.
					</h3>
					<div class="text-center md:text-start">
						<div class="flex justify-center md:justify-start mb-8">
							<img src="/images/quote.svg" alt="" role="presentation" />
						</div>
						<h4 class="font-satoshi text-[20px] text-title font-bold -tracking-[0.2px] mb-4">
							Still have questions?
						</h4>
						<p
							class="font-satoshi font-normal text-paragraph -tracking-[0.18px] text-base md:text-lg leading-6 mb-[50px] md:w-[38ch]"
						>
							For assistance, please send a mail visit our <span class="text-title">Contact Us</span
							>
							page or call our customer support hotline at
							<span class="text-title">(671) 555-0110</span>. Our dedicated team is ready to help
							you on any matter.
						</p>
						<a
							href="https://wa.me/+2348102828226"
							class="inline-flex gap-x-2 justify-between items-center font-medium text-lg text-title font-satoshi leading-6 -tracking-[0.072px] border border-evergreen-dark rounded-[10px] py-4 px-6"
							>Contact us <img src="/images/arrow-right.svg" alt="" role="presentation" /></a
						>
					</div>
				</div>
				<div class="flex flex-col gap-y-14">
					<FaqItem
						question="How do I place an order for gas?"
						answer="You can easily place an order for gas through our app. Simply log in to  your account, select your preferred gas cylinder size and quantity,  choose a delivery time slot, and proceed to checkout."
					/>
					<FaqItem
						question="Can I schedule recurring gas deliveries?"
						answer="Yes, you can schedule recurring gas deliveries based on your preferred  frequency, such as weekly, bi-weekly, or monthly. Our app allows you to  set up refill reminders and automate your gas orders."
					/>
					<FaqItem
						question="How soon can I expect my gas delivery?"
						answer="Delivery times may vary depending on your location and delivery  schedule. Typically, you can expect your gas delivery within a specified  time window chosen during checkout."
					/>
					<FaqItem
						question="Can I track my gas delivery in real time?"
						answer="Yes, you can track your gas delivery in real time through our app. We  provide updates on the status of your order, including when it's out for  delivery and when it's been successfully delivered."
					/>
					<FaqItem
						question="Are there any additional charges or fees for gas delivery?"
						answer="Our gas delivery services may include a nominal delivery fee based on  your location and the size of your gas order. Any additional charges or  fees will be clearly displayed before you confirm your order."
					/>
					<FaqItem
						question="How do you ensure the safety of gas delivery?"
						answer="We partner with certified gas suppliers and adhere to strict safety  protocols during delivery. Our delivery personnel are trained to handle  gas cylinders safely and securely."
					/>
				</div>
			</div>
		</div>
	</section>
</main>
