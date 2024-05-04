

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DldiAPD1.js","_app/immutable/chunks/scheduler.jEyW7Z-7.js","_app/immutable/chunks/index.L8_zcjNJ.js","_app/immutable/chunks/index.CdMVU0V4.js"];
export const stylesheets = [];
export const fonts = [];
