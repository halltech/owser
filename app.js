const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

app.on('ready', function() {
  win = new BrowserWindow({ 
	width: 800, 
	height: 600, 
	frame: false,
	dev_tools: true
  })

  win.loadURL('file://' + __dirname + '/views/home.html')

  win.on('closed', () => {
	win = null
  })
  win.webContents.openDevTools()
})
