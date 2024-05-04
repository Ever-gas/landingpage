<script>
    export let step;
    export let title;
    export let content;
</script>

<div class="flex flex-col hover:bg-white px-[29px] py-[19px] hover:rounded-xl cursor-pointer border-l-2 border-[#DDDEE3] hover:border-0">
    <h3 class="font-satoshi font-bold text-[40px] text-[#38C076] mb-[4px]">{step}</h3>
    <h4 class="font-satoshi font-bold text-lg text-evergreen-dark mb-3">{title}</h4>
    <p class="font-satoshi font-medium text-lg text-[#65697B] tracking-[0.1px] leading-6 lg:w-[32ch]">{content}</p>
</div>