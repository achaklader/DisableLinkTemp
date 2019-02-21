chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.event == "keyDown"){
		chrome.tabs.insertCSS({code: "a { pointer-events: none } "});
	}
	else if(request.event == "keyUp"){
		chrome.tabs.insertCSS({code: "a { pointer-events: all } "});
	}
  });