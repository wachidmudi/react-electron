const electron = require('electron');
const ipcMain = electron.ipcMain;
// const path = require('path');
// const url = require('url');

// Add serve.js
const startServer = require('./serve');

// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let configsWindow;

function createWindow() {
  // Initialize our webpack server
  startServer();

  // Create the browser window.
  mainWindow = new BrowserWindow({
    titleBarStyle: 'hidden',
    width: 800,
    height: 600,
    frame: false,
    webPreferences: {
      experimentalFeatures: true,
      nodeIntegration: true,
      webSecurity: false // required to open local images in browser
    }
  });

  configsWindow = new BrowserWindow({
    titleBarStyle: 'hidden',
    frame: false,
    parent: mainWindow,
    modal: true,
    show: false
  });

  mainWindow.setMenu(null);
  configsWindow.setMenu(null);

  // and load the index.html of the app.
  mainWindow.loadURL('http://localhost:8080?index');
  configsWindow.loadURL('http://localhost:8080?configs');
  /*
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true
    })
  );*/

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
  //configsWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  configsWindow.on('close', function(e) {
    e.preventDefault();
    configsWindow.hide();
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipcMain.on('toggle-configs', (event, arg) => {
  // Get the position of mainWindow
  let position = mainWindow.getPosition();
  // Set configsWindow x and y position
  configsWindow.setPosition(position[0], position[1]);
  // Show it
  configsWindow.show();
});
