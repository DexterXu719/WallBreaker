console.log("background is working!");

chrome.browserAction.onClicked.addListener(buttonClicked);
chrome.runtime.onMessage.addListener(feedback);



function buttonClicked(tab) {
		//console.log("button clicked!");
		let msg = {
			txt: "Hello from the background!!!"
	}
	chrome.tabs.sendMessage(tab.id, msg);
	
}
	

	
function feedback(message, sender, sendResponse){	
	console.log(message.text);
	
}