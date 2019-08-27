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
        alwaysOnTop: true
    },
    width: 300,
    height: 500
});

mb.app.on('ready', async () => {
    if (isDev) {
        await installExtensions();
        const unhandled = require('electron-unhandled');
        unhandled();
    }
});

mb.on('after-create-window', () => {
    // if(isDev)  {
    console.log('asfsaf');
    mb.window!.webContents.openDevTools();
    // }
});
