<script>
    export let title;
    export let content;
    export let color;
    export let button;
    export let img;
</script>

<div class="rounded-2xl group relative h-full cursor-pointer w-[85%] md:w-full">
    <div class="h-full w-full rounded-2xl group-hover:opacity-0 opacity-100 group-hover:z-0 z-50 transition-all duration-700 absolute top-0 left-0 {img} bg-cover bg-no-repeat bg-center">
        <!-- <img class="object-cover h-full w-full" src="{img}" alt="" role="presentation" /> -->
    </div>
    <div class={`${color} px-[22px] lg:px-[26px] py-[32px] rounded-2xl flex flex-col justify-between h-full w-full z-0 group-hover:z-50 absolute`}>
        <div class="mb-[60px]">
            <img src="/images/arrow-diagonal-black.svg" alt="" role="presentation" class="mb-8" />
            <p class="font-satoshi font-medium text-3xl md:text-[32px] -tracking-[1.2px] text-heading">
                {title}
            </p>
        </div>
        <div class="mb-[40px]">
            <p class="font-satoshi font-medium text-lg tracking-[0.1px] text-[#373943] leading-[24.3px] w-[25ch] md:w-[30ch] lg:w-[28ch]">
               {content}
            </p>
        </div>
        <div>
            <a href="https://google.com" class="rounded-[30px] bg-[#09090B] p-4 text-[13px] text-[#FAFAFC] font-satoshi font-medium">{button}</a>
        </div>
    </div>
</div>

