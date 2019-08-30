import { app, ipcMain } from 'electron';
import { menubar } from 'menubar';
import * as path from 'path';
import { IPC_CHANNel } from '../common/constants';
import * as download from 'download';
import * as os from 'os';
import * as wallpaper from 'wallpaper';

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
            webSecurity: false,
            nodeIntegration: true
        },
        width: 280,
        height: 600,
        resizable: false
    }
});

mb.app.on('ready', async () => {
    if (isDev) {
        await installExtensions();
        const unhandled = require('electron-unhandled');
        unhandled();
    }

    ipcMain.on(IPC_CHANNel.SET_WALLPAPER_START, async (e: any, img: string) => {
        const home = os.homedir();
        const arr = img.split('/');
        const filename = arr[arr.length - 1];
        const micatPath = path.resolve(home, 'Documents/micat');
        const buffer = await download(img, micatPath, {
            filename
        });
        // const type = imageType(buffer)
        const dist = path.resolve(micatPath, filename);
        // console.log(type)
        console.log(filename);
        console.log(dist);
        wallpaper.set(dist);
    });
});

mb.on('after-create-window', () => {
    mb.window!.webContents.openDevTools();
});
