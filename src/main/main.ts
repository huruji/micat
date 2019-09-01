import { app, ipcMain } from 'electron';
import { menubar } from 'menubar';
import * as path from 'path';
import { IPC_CHANNel } from '../common/constants';
import menu from './menu';
import * as download from 'download';
import * as os from 'os';
import * as wallpaper from 'wallpaper';

const isEnvSet = 'NODE_ENV' in process.env;

const isDev = isEnvSet ? process.env.NODE_ENV !== 'production' : !app.isPackaged;

const installExtensions = async () => {
    const installer = require('electron-devtools-installer');
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
    const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];

    return Promise.all(
        extensions.map(name => installer.default(installer[name], forceDownload))
    ).catch(console.log);
};

const mb = menubar({
    icon: path.resolve(__dirname, '../micat_tray.png'),
    index: isDev ? 'http://localhost:2003' : `file://${path.resolve(__dirname, './index.html')}`,
    browserWindow: {
        transparent: true,
        alwaysOnTop: true,
        webPreferences: {
            webSecurity: false,
            nodeIntegration: true
        },
        width: 280,
        height: 600,
        resizable: true
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

    const { tray } = mb;

    tray.on('right-click', () => {
        tray.popUpContextMenu(menu);
    });
});

mb.on('after-create-window', () => {
    if (isDev) mb.window!.webContents.openDevTools();
});
