import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="border-b-[0.4px] border-[#ded9d9] px-5 md:px-16 py-[30px]" data-svelte-h="svelte-4nyehx"><nav><div class="flex lg:hidden justify-center"><p class="font-bold text-xs text-white text-center">A gas delivery company based in Port Harcourt, Nigeria.</p></div> <ul class="flex justify-between items-center gap-x-5"><li><h1 class="font-satoshi font-black text-[32px] text-white">ever<span class="text-evergreen-medium">gas</span></h1></li> <li class="hidden lg:flex justify-between text-center"><img src="/images/location-pin.svg" alt="" role="presentation"> <p class="font-bold text-lg text-white">A gas delivery company based in Port Harcourt, Nigeria.</p></li> <li class="flex justify-between items-center gap-x-5"><img src="/images/snapchat.svg" alt="snapchat"> <img src="/images/facebook.svg" alt="facebook"> <img src="/images/whatsapp.svg" alt="whatsapp"> <img src="/images/instagram.svg" alt="instagram"></li></ul></nav></header>`;
});
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<div><label class="mb-5"><input class="hidden" name="first" ${val.first ? "checked" : ""} type="checkbox"> <p${add_attribute("class", `cursor-pointer ${val.first ? "text-white" : "text-[#929C9A]"} font-satoshi font-medium text-[24px] md:text-[32px] lg:text-[40px] mb-4 -tracking-[1.2px]`, 0)}>Buy equipment</p></label> ${val.first ? `<div data-svelte-h="svelte-oak9pj"><div class="h-[2px] bg-[#D9DEDD] mb-[14px] w-[250px] lg:w-auto"><div class="h-full bg-evergreen-light w-[100px] lg:w-[194px]"></div></div> <p class="font-satoshi text-[#D2D3DA] text-base lg:text-lg leading-[24.3px] tracking-[0.1px] w-[26ch] lg:w-[28ch]">Browse and purchase a wide range of cooking gas equipment, including regulators, hoses,
				valves, and more. Our products are of high quality and sourced from trusted manufacturers.</p></div>` : ``}</div> <div><label class="mb-5"><input class="hidden" name="second" ${val.second ? "checked" : ""} type="checkbox"> <p${add_attribute("class", `cursor-pointer ${val.second ? "text-white" : "text-[#929C9A]"} font-satoshi font-medium text-[24px] md:text-[32px] lg:text-[40px] mb-4 -tracking-[1.2px]`, 0)}>Quickly order gas</p></label> ${val.second ? `<div data-svelte-h="svelte-14pdgt3"><div class="h-[2px] bg-[#D9DEDD] mb-[14px] w-[250px] lg:w-auto"><div class="h-full bg-evergreen-light w-[100px] lg:w-[194px]"></div></div> <p class="font-satoshi text-[#D2D3DA] text-base lg:text-lg leading-[24.3px] tracking-[0.1px] w-[26ch] lg:w-[28ch]">Our platform is designed for quick and hassle-free ordering. No more waiting in line or
				making phone calls – order from the comfort of your home or on the go.</p></div>` : ``}</div> <div><label class="mb-5"><input class="hidden" name="third" ${val.third ? "checked" : ""} type="checkbox"> <p${add_attribute("class", `cursor-pointer ${val.third ? "text-white" : "text-[#929C9A]"} font-satoshi font-medium text-[24px] md:text-[32px] lg:text-[40px] mb-4 -tracking-[1.2px]`, 0)} aria-describedby="third">Find handymen</p></label> ${val.third ? `<div${add_attribute("aria-expanded", val.third, 0)}><div class="h-[2px] bg-[#D9DEDD] mb-[14px] w-[250px] lg:w-auto" data-svelte-h="svelte-1tkntbw"><div class="h-full bg-evergreen-light w-[100px] lg:w-[194px]"></div></div> <p class="font-satoshi text-[#D2D3DA] text-base lg:text-lg leading-[24.3px] tracking-[0.1px] w-[26ch] lg:w-[28ch]" id="third" data-svelte-h="svelte-18exeze">Need professional help with gas installations, repairs, or maintenance? Use our app to
				connect with experienced and well vetted handymen who specialize in gas-related services.</p></div>` : ``}</div> <div><label class="mb-5"><input class="hidden" name="fourth" ${val.fourth ? "checked" : ""} type="checkbox"> <p${add_attribute("class", `cursor-pointer ${val.fourth ? "text-white" : "text-[#929C9A]"} font-satoshi font-medium text-[24px] md:text-[32px] lg:text-[40px] mb-4 -tracking-[1.2px]`, 0)}>24/7 support</p></label> ${val.fourth ? `<div data-svelte-h="svelte-jqv2e6"><div class="h-[2px] bg-[#D9DEDD] mb-[14px] w-[250px] lg:w-auto"><div class="h-full bg-evergreen-light w-[100px] lg:w-[194px]"></div></div> <p class="font-satoshi text-[#D2D3DA] text-base lg:text-lg leading-[24.3px] tracking-[0.1px] w-[26ch] lg:w-[28ch]">We take pride in providing exceptional service and ensuring customer satisfaction. Our team
				is here to assist you every step of the way, from ordering to delivery.</p></div>` : ``}</div>`;
});
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { content } = $$props;
  let { color } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `<div${add_attribute("class", `${color} px-[22px] lg:px-[26px] py-[33px] rounded-2xl flex flex-col justify-between gap-y-[93px]`, 0)}><div><img src="/images/arrow-diagonal-black.svg" alt="" role="presentation" class="mb-8"> <p class="font-satoshi font-medium text-3xl md:text-[32px] -tracking-[1.2px] text-heading">${escape(title)}</p></div> <div><p class="font-satoshi font-medium text-lg tracking-[0.1px] text-[#373943] leading-[24.3px] w-[24ch] md:w-[40ch] lg:w-[28ch]">${escape(content)}</p></div></div>`;
});
const Steps = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { step } = $$props;
  let { title } = $$props;
  let { content } = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  return `<div class="flex flex-col hover:bg-white px-[29px] py-[19px] hover:rounded-xl cursor-pointer border-l-2 border-[#DDDEE3] hover:border-0"><h3 class="font-satoshi font-bold text-[40px] text-[#38C076] mb-[23px] leading-[13.2px]">${escape(step)}</h3> <h4 class="font-satoshi font-bold text-lg text-evergreen-dark mb-3">${escape(title)}</h4> <p class="font-satoshi font-medium text-lg text-[#65697B] tracking-[0.1px] leading-6 lg:w-[32ch]">${escape(content)}</p></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main><section class="bg-[url('/images/banner.jpg')] bg-[#0000004D] bg-no-repeat bg-center bg-cover bg-blend-overlay">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})} <section class="relative px-5 md:px-16 py-32" data-svelte-h="svelte-403ejc"><h2 class="font-satoshi font-bold text-white leading-10 lg:leading-[80px] text-[42px] lg:text-[84px] -tracking-[2.52px] w-full text-center lg:text-start lg:w-[15ch] mb-4">A better way to buy cooking gas</h2> <p class="font-satoshi text-xs lg:text-xl text-center lg:text-start w-full leading-4 lg:leading-8 font-medium text-white lg:w-[55ch] mb-12">Say goodbye to long waits and tedious processes. With our streamlined online ordering
				system, getting your cooking gas has never been easier.</p> <div class="flex justify-center w-full gap-x-6 lg:justify-start"><a href="https://google.com"><img src="/images/play-button.png" alt="" role="presentation"></a> <a href="https://apple.com"><img src="/images/app-button.png" alt="" role="presentation"></a></div> <div class="absolute flex left-0 bottom-0 w-full justify-center lg:justify-end pb-4 lg:pb-8 lg:pe-14"><div class="flex gap-x-[10px] items-center bg-white p-2 rounded-[10px]"><div class="flex"><img src="/images/img-circle1.png" width="30" class="rounded-full" alt="" role="presentation"> <img src="/images/img-circle2.png" width="30" class="rounded-full -ms-2" alt="" role="presentation"> <img src="/images/img-circle3.png" width="30" class="rounded-full -ms-2" alt="" role="presentation"></div> <p class="font-satoshi font-medium text-[#161525] text-xs md:text-base">Trusted by 21,000+ people</p></div></div></section></section> <section class="px-5 md:px-16 pt-[141px]"><p class="font-satoshi text-hint text-center font-medium lg-[6px] lg:mb-[10px] uppercase" data-svelte-h="svelte-nr45uy">Unlock Capital</p> <h3 class="font-satoshi font-bold text-heading leading-[30px] lg:leading-[44px] -tracking-[0.6px] text-[20px] lg:text-[54px] text-center mb-[42px] lg:mb-[84px]" data-svelte-h="svelte-1lc5ax2">Some top features we bring to you</h3> <div class="flex flex-col lg:flex-row gap-x-[18px] gap-y-[18px] mb-[18px]"><div class="lg:w-2/3 flex flex-col md:flex-row bg-everdark justify-between rounded-2xl"><div class="md:w-[356px] ps-[22px] lg:ps-[44px] py-[33px]"><img src="/images/arrow-diagonal-dark.svg" alt="" role="presentation" class="mb-[40px]"> ${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {})}</div> <div class="md:w-[360px]" data-svelte-h="svelte-cl9ppy"><img class="object-cover h-full rounded-2xl md:rounded-tl-none md:rounded-bl-none md:rounded-br-2xl md:rounded-tr-2xl" src="/images/brown-lady.jpg" alt=""></div></div> <div class="lg:w-1/3 bg-evergreen-dark ps-[22px] lg:ps-[44px] py-[33px] rounded-2xl flex flex-col justify-between" data-svelte-h="svelte-3p6hn5"><div class="mb-5 lg:mb-0"><img src="/images/arrow-diagonal.svg" alt="" role="presentation" class="mb-[40px]"> <p class="font-satoshi font-medium text-[40px] -tracking-[1.2px] text-white">Reliable Delivery</p></div> <div><p class="font-satoshi font-medium text-lg tracking-[0.1px] text-white leading-[24.3px] w-[22ch] md:w-[40ch] lg:w-[28ch]">We prioritize timely delivery to ensure you never run out of cooking gas when you need
						it the most. Say goodbye to last-minute emergencies.</p></div></div></div> <div class="flex flex-col lg:flex-row gap-x-[18px] gap-y-[18px]">${validate_component(Card, "Card").$$render(
    $$result,
    {
      title: "Easy Online Payments",
      color: "bg-everblue",
      content: "Secure online payment options make transactions smooth and worry-free.  You can choose your preferred payment method for added convenience."
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render(
    $$result,
    {
      title: "Gas Refill Reminders",
      color: "bg-[#DFE8E5]",
      content: "Keeping track of your cooking gas usage can be a hassle. That's why  we've introduced refill reminders to ensure you always have a steady  supply of gas when you need it most."
    },
    {},
    {}
  )} <div class="flex-1" data-svelte-h="svelte-1ciiwgw"><img src="/images/man-truck.jpg" alt="" role="presentation" class="rounded-2xl h-full object-cover"></div></div></section> <section class="px-5 md:px-16 pt-[141px]"><p class="font-satoshi text-hint text-center font-medium lg-[6px] lg:mb-[10px] uppercase" data-svelte-h="svelte-savspl">let&#39;s go</p> <h3 class="font-satoshi font-bold text-heading leading-[30px] lg:leading-[44px] -tracking-[0.6px] text-[20px] lg:text-[54px] text-center mb-[55px] lg:mb-[110px]" data-svelte-h="svelte-f8husz">Get started in 3 simple steps</h3> <div class="flex flex-col lg:flex-row gap-x-[54px] bg-[#F5F5F5] p-6 rounded-2xl gap-y-[54px] lg:gap-y-0"><div class="flex flex-col gap-y-[26px] w-auto order-2 lg:order-1">${validate_component(Steps, "Step").$$render(
    $$result,
    {
      step: "1",
      title: "Create Account",
      content: "Get started by creating an account. It takes less than a minute - seriously"
    },
    {},
    {}
  )} ${validate_component(Steps, "Step").$$render(
    $$result,
    {
      step: "2",
      title: "Find Gas Stations",
      content: "Select a gas station, Simply select your preferred gas cylinder size, quantity and delivery method."
    },
    {},
    {}
  )} ${validate_component(Steps, "Step").$$render(
    $$result,
    {
      step: "3",
      title: "Get it Delivered",
      content: "Sit back and relax. Our delivery team will ensure your cooking gas is delivered to you on time."
    },
    {},
    {}
  )}</div> <div class="lg:w-[48.125rem] order-1 lg:order-2 rounded-xl" data-svelte-h="svelte-1jclgmy"><img class="object-cover h-full rounded-xl" src="/images/lady-laptop.jpg" alt="" role="presentation"></div></div></section></main>`;
});
export {
  Page as default
};
