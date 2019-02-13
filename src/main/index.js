const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const url = require('url')

let win

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = true

const isDevelopment = process.env.NODE_ENV !== 'production'

const loadUrl = isDevelopment
  ? `http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`
  : url.format({
    pathname: path.join(__dirname, '..', 'index.html'),
    protocol: 'file:',
    slashes: true
  })

function createWindow () {
  win = new BrowserWindow({
    title: 'Passhub',
    icon: '',
    width: 800,
    height: 480,
    minWidth: 600,
    minHeight: 400,
    frame: false,
    autoHideMenuBar: true
  })

  win.loadURL(loadUrl)

  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

ipcMain.on('master-close', () => {
  app.quit()
})

ipcMain.on('master-minimize', () => {
  win.minimize()
})
