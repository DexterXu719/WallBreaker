console.log("My Chrome Extension works! Huzzah!!");


chrome.runtime.onMessage.addListener(gotMessage);

var num = 0
function gotMessage(message, sender, sendResponse) {
	console.log(message.txt);
	console.log(num % 2 == 0);
	if (num % 2 == 0){
		console.log("if");
		let paragraphs = document.getElementsByTagName("p");
		for (element of paragraphs){
			element.style['background-color'] = '#7EC8EC'
		}
	}
	else{
		console.log("else");
		let paragraphs = document.getElementsByTagName("p");
		for (element of paragraphs){
			element.style['background-color'] = '#FF0000'
		}
	}
	
	num = num + 1;
	let msg = {
		text: "Message recieved, background. Report back from the content script!!"
	}
	
	chrome.runtime.sendMessage(msg);
}
