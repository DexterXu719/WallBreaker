/*
function getTime(){
  document.getElementById('result').innerHTML = Date()

  func1();
  func2();
  func3();
}
function func1(){
  if (document.getElementById('switch1').checked){
    document.getElementById('result1').innerHTML = "Function 1 is on!";
  }
  else{
    document.getElementById('result1').innerHTML = "";
  }
}

function func2(){
  if (document.getElementById('switch2').checked){
    document.getElementById('result2').innerHTML = "Function 2 is on!";
  }
  else{
    document.getElementById('result2').innerHTML = "";
  }
}

function func3(){
  if (document.getElementById('switch3').checked){
    document.getElementById('result3').innerHTML = "Function 3 is on!";
  }
  else{
    document.getElementById('result3').innerHTML = "";
  }
}
*/

chrome.runtime.sendMessage({txt: "sliders updated"}, function(response){
	console.log("Message successfully sent");
});

// Updating our sliders with the saved value
chrome.storage.local.get(["slider1"], function(result){
	document.getElementById("switch1").checked = result.slider1;
	console.log("Successfully retrieved Slider 1!" + result.slider1);
});

chrome.storage.local.get(["slider2"], function(result){
	document.getElementById("switch2").checked = result.slider2;
	console.log("Successfully retrieved Slider 2!" + result.slider2);
});
	
chrome.storage.local.get(["slider3"], function(result){
	document.getElementById("switch3").checked = result.slider3;
	console.log("Successfully retrieved Slider 3!" + result.slider3);
});

chrome.storage.local.get(["slider4"], function(result){
	document.getElementById("switch4").checked = result.slider4;
	console.log("Successfully retrieved Slider 4!" + result.slider4);
});
	
	
var switch1 = document.querySelector("input[id=switch1]")
switch1.addEventListener('change',function(){
	if(this.checked){
		console.log("Slider 1 is now on!")
		chrome.storage.local.set({"slider1": true}, function(){
			console.log("Successfully stored value Slider 1 as true");
		})
	}else{
		console.log("Slider 1 has been turned off...")
		chrome.storage.local.set({"slider1": false}, function(){
			console.log("Successfully stored value Slider 1 as false");
		})
	}
	chrome.runtime.sendMessage({txt: "sliders updated"}, function(response){
	console.log("Message successfully sent");
});
})

var switch2 = document.querySelector("input[id=switch2]")
switch2.addEventListener('change',function(){
	if(this.checked){
		console.log("Slider 2 is now on!")
		chrome.storage.local.set({"slider2": true}, function(){
			console.log("Successfully stored value Slider 2 as true");
		})
	}else{
		console.log("Slider 2 has been turned off...")
		chrome.storage.local.set({"slider2": false}, function(){
			console.log("Successfully stored value Slider 2 as false");
		})
	}
	chrome.runtime.sendMessage({txt: "sliders updated"}, function(response){
	console.log("Message successfully sent");
});
})

var switch3 = document.querySelector("input[id=switch3]")
switch3.addEventListener('change',function(){
	if(this.checked){
		console.log("Slider 3 is now on!")
		chrome.storage.local.set({"slider3": true}, function(){
			console.log("Successfully stored value Slider 3 as true");
		})
	}else{
		console.log("Slider 3 has been turned off...")
		chrome.storage.local.set({"slider3": false}, function(){
			console.log("Successfully stored value Slider 3 as false");
		})
	}
	chrome.runtime.sendMessage({txt: "sliders updated"}, function(response){
	console.log("Message successfully sent");
});
})

var switch4 = document.querySelector("input[id=switch4]")
switch4.addEventListener('change',function(){
	if(this.checked){
		console.log("Slider 4 is now on!")
		chrome.storage.local.set({"slider4": true}, function(){
			console.log("Successfully stored value Slider 4 as true");
		})
	}else{
		console.log("Slider 4 has been turned off...")
		chrome.storage.local.set({"slider4": false}, function(){
			console.log("Successfully stored value Slider 4 as false");
		})
	}
	chrome.runtime.sendMessage({txt: "sliders updated"}, function(response){
	console.log("Message successfully sent");
});
})