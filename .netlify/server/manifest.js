export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/satoshi/FFL.txt","fonts/satoshi/Satoshi-Black.woff2","fonts/satoshi/Satoshi-Bold.woff2","fonts/satoshi/Satoshi-Light.woff2","fonts/satoshi/Satoshi-Medium.woff2","fonts/satoshi/Satoshi-Regular.woff2","images/app-button.png","images/app-home.png","images/arrow-diagonal-black.svg","images/arrow-diagonal-dark.svg","images/arrow-diagonal.svg","images/banner.jpg","images/brown-lady.jpg","images/delivery-man.jpg","images/facebook.svg","images/gas-cylinder.jpg","images/gas-station.jpg","images/gas-summary.png","images/img-circle1.png","images/img-circle2.png","images/img-circle3.png","images/instagram.svg","images/lady-laptop.jpg","images/location-pin.svg","images/man-truck.jpg","images/man-vendor.jpg","images/play-button.png","images/quote.svg","images/snapchat.svg","images/whatsapp.svg"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".woff2":"font/woff2",".svg":"image/svg+xml",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.DAPtf_vU.js","app":"_app/immutable/entry/app.DC6JuTgf.js","imports":["_app/immutable/entry/start.DAPtf_vU.js","_app/immutable/chunks/entry.Co9kP0GW.js","_app/immutable/chunks/scheduler.jEyW7Z-7.js","_app/immutable/chunks/index.CdMVU0V4.js","_app/immutable/entry/app.DC6JuTgf.js","_app/immutable/chunks/scheduler.jEyW7Z-7.js","_app/immutable/chunks/index.L8_zcjNJ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
