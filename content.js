console.log("Content Script running on page start up")

var makeIncognito = false;

chrome.storage.local.get(["slider1"], function(result){
	makeIncognito = result.slider1;
	console.log("Checked to see if Incognito is desired: " + makeIncognito);
});

if(makeIncognito){
	window.onload = checkForPayWall();
}

function checkForPayWall(){
	var paywallId = "paywall";	
		var content	 = document.getElementById(paywallId);
			if(content != null){
					chrome.runtime.sendMessage({
					incognito: true,
					url: window.locationhref
				},
				function(response){
					console.log("Opening page in incognito mode!",response);
				}	
			);
		}
}
