
// Load BrowserWindow from electron
const {BrowserWindow} = require('electron').remote

// Initialize function
function init() {
	// Minimize window
	document.getElementById('window-action-minimize').addEventListener('click', function(e) {
		var window = BrowserWindow.getFocusedWindow()
		console.log("click")
		window.minimize()
	})

	// Toogle FullSCreen
	document.getElementById('window-action-maximize').addEventListener('click', function(e) {
		var window = BrowserWindow.getFocusedWindow();

		if(window.isMaximized()){
				window.unmaximize();
		} else {
				window.maximize();
		}
	})

	// CLose Window
	document.getElementById('window-action-close').addEventListener('click', function(e) {
		var window = BrowserWindow.getFocusedWindow();
		window.close();
	})
}

// Initialize if window is ready
document.onreadystatechange =  () => {
	if (document.readyState == "complete") {
		init();
	}
};