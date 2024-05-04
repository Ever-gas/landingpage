<script>
	export let question;
	export let answer;
</script>

<div class="flex flex-col justify-between gap-y-4 text-center md:text-start">
	<h4 class="font-satoshi font-bold text-lg md:text-[22px] leading-[27px] -tracking-[0.088px] text-title">
		{question}
	</h4>
	<p class="font-satoshi font-normal text-paragraph -tracking-[0.072px] text-base md:text-lg leading-5 md:leading-7">
		{answer}
	</p>
</div>
