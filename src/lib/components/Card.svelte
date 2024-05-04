<script>
    export let title;
    export let content;
    export let color;
</script>

<div class={`${color} px-[22px] lg:px-[26px] py-[33px] rounded-2xl flex flex-col justify-between gap-y-[93px]`}>
    <div>
        <img src="/images/arrow-diagonal-black.svg" alt="" role="presentation" class="mb-8" />
        <p class="font-satoshi font-medium text-3xl md:text-[32px] -tracking-[1.2px] text-heading">
            {title}
        </p>
    </div>
    <div>
        <p class="font-satoshi font-medium text-lg tracking-[0.1px] text-[#373943] leading-[24.3px] w-[24ch] md:w-[40ch] lg:w-[28ch]">
           {content}
        </p>
    </div>
</div>