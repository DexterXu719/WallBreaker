console.log("Background is worked!");

// window.chrome.runtime.onMessage.addListener(paywallFound);

// function paywallFound(request,sender,sendResponse){
//  	if(request.incognito == true){
//  		openIcognito = chrome.windows.create({"url": request.url, "incognito": request.incognito});
//  		sendResponse({msg: "Enjoy the article"});
//  	}
// }
/*function redirect(details){
	details.requestHeaders = details.requestHeaders.filter(function(header)){
	console.log(header.name);
		if(header.name === "Referer"){
			return false;
		}
		else{
			return true;
		}
	}
	
	details.requestHeaders.push({
		"name" : "Referer",
		"value" : "https://t.co"
	})
	
	console.log("Successfully changed out header value to Twitter");
	return{requestHeader: details.requestHeaders};
}

chrome.webRequest.onBeforeSendHeaders.addListener(redirect,{
	urls: ["<all_urls>"]
	types: ["main_frame"], ],
	["requestHeaders", "blocking", "extraHeaders"]
);
*/
/*function googlePretend(details){
	var google_adbot_UA = "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) Chrome/W.X.Y.Z‡ Safari/537.36";

	details.request Headers = details.requestHeaders.filter(function(header){
		if (header.name === "User-Agent" || header.name === "X-Forwarded-For"){
			return false;
		} 
		return true;
	});
	
	details.requestHeaders.push({
		"name": "User-Agent",
		"value": google_adbot_UA
	});
	details.requestHeaders.push({
		"name": "X-Forwarded-For",
		"value": "66.249.66.1"
	});
		
	console.log("Modified ourself to be a robot");
		
	return{requestHeaders: details.requestHeaders};
		
	}
		
chrome.webRequest.onBeforeSendHeaders.addListener(googlePretend, {
	urls: ["<all_urls>"],
	types: ["main_frame"], },
	["requestHeaders", "blocking", "extraHeaders"]	
); */



console.log("Background Script running on Extension start up");

slider2Bool = false;
slider3Bool = false;
slider4Bool = false;

function updateSliders(){
	chrome.storage.local.get(["slider1"], function (result){
		slider1Bool = result.slider1;
		console.log("Checked to see if slider 1 is desired: " + slider1Bool);
	});
	chrome.storage.local.get(["slider2"], function (result){
		slider2Bool = result.slider2;
		console.log("Checked to see if slider 2 is desired: " + slider2Bool);
	});

	chrome.storage.local.get(["slider3"], function (result){
		slider3Bool = result.slider3;
		console.log("Checked to see if slider 3 is desired: " + slider3Bool);
	});
	chrome.storage.local.get(["slider4"], function (result){
		slider4Bool = result.slider4;
		console.log("Checked to see if slider 4 is desired: " + slider4Bool);
	});
}

if(slider2Bool){
	console.log("Running slider 2");
}
if(slider3Bool){
	console.log("Running slider 2");
}
if(slider4Bool){
	console.log("Running slider 2");
}

if(slider2Bool){
	window.onload = checkForPayWall();
}
if(slider3Bool){
	window.onload = checkForPayWall();
}
if(slider4Bool){
	window.onload = checkForPayWall();
}

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
	if(message.txt === "sliders updated"){
		updateSliders();
	}
}

updateSliders();
