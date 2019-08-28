import { app } from 'electron';
import { menubar } from 'menubar';
import * as path from 'path';

const isDev = app.isPackaged;

const installExtensions = async () => {
    const installer = require('electron-devtools-installer');
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
    const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];

    return Promise.all(
        extensions.map(name => installer.default(installer[name], forceDownload))
    ).catch(console.log);
};

const mb = menubar({
    icon: path.resolve(__dirname, '../tray.png'),
    index: 'http://localhost:2003',
    browserWindow: {
        transparent: true,
        alwaysOnTop: true,
        webPreferences: {
            webSecurity: false
        },
        width: 280,
        height: 600
    }
});

mb.app.on('ready', async () => {
    if (isDev) {
        await installExtensions();
        const unhandled = require('electron-unhandled');
        unhandled();
    }
});

mb.on('after-create-window', () => {
    mb.window!.webContents.openDevTools();
});
