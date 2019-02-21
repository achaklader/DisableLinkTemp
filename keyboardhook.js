window.addEventListener("keydown", keyDownListener, false);
window.addEventListener("keyup", keyUpListener, false);

function keyDownListener(ke) {
	if(ke.keyCode == 17 || ke.keyCode == 18){ // alt or ctrl key
		if(ke.altKey && ke.ctrlKey){
			chrome.runtime.sendMessage({event: "keyDown"});
		}
	}
};
function keyUpListener(ke) {
	if(ke.keyCode == 17 || ke.keyCode == 18){
		chrome.runtime.sendMessage({event: "keyUp"});
	}
};