console.log("Medium paywall good to go.");
var paywallId = "paywall-background-color";
window.onload = function(){
	var content = document.getElementById('root');
	console.log("Content with the paywall-background-color: " + content);
	if(content != null){
		chrome.runtime.sendMessage({
		incognito: true,
		url: window.location.href
		},
		function(response){
				console.log("Opening page in incognito mode!", response);
			}	
		);
	}
}
