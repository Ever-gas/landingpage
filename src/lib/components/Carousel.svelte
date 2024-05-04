<script>
	import CarouselCard from '$lib/components/CarouselCard.svelte';
</script>

<div
	class="grid grid-cols-[394px_394px_394px_394px] ps-5 md:ps-16 h-[450px] md:gap-x-[18px] overflow-x-scroll grid-rows-1"
	role="presentation"
>
	<CarouselCard
		img="bg-[url(/images/gas-station.jpg)]"
		color="bg-evergreen-soft"
		title="Gas Stations"
		subtitle="Gas Stations"
		content="Get onboard Evergas and easily sell gas to a wider range of users. Easily update prices, notify users of gas availability and get real time statistics of sales"
		button="Onboard on Evergas"
	/>
	<CarouselCard
		img="bg-[url(/images/delivery-man.jpg)] bg-[#00000052]"
		color="bg-evergreen-light"
		title="Riders and Logistics"
		subtitle="Riders and Logistics"
		content="You are the engine of our platform. Deliver gas to users and also ship cooking gas related equipment to users. No side fees, no hidden charges and get paid instantly"
		button="Deliver on Evergas"
	/>
	<CarouselCard
		img="bg-[url(/images/gas-cylinder.jpg)] bg-[#00000052]"
		color="bg-everblue"
		title="Vendors"
		subtitle="Vendors"
		content="Need gas equipment or accessories? Our platform connects you with  reputable vendors offering a variety of products such as regulators, hoses, valves, and more. Shop conveniently within the app."
		button="Sell on Evergas"
	/>
	<CarouselCard
		img="bg-[url(/images/man-vendor.jpg)] bg-[#00000052]"
		color="bg-everpeach"
		title="Handymen"
		subtitle="Handymen Services"
		content="From installations to repairs and maintenance, our network of  experienced handymen specializes in gas-related services. Easily find  and hire professionals for all your gas needs."
		button="Onboard on Evergas"
	/>
</div>
