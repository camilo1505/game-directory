const { app, BrowserWindow } = require('electron');
const path = require('path');

const isDev = process.env.NODE_ENV !== 'production';
const width = 800;
const height = 600;

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        title: 'Game-Directory',
        width: isDev ? width + 300 : width,
        height: height
    });
    
    mainWindow.loadFile(path.join(__dirname, './render/index.html'));
};

app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});