import { ipcRenderer } from 'electron';
import { IPC_CHANNel } from '../../common/constants';

export const startSetWallpaper = (src: string) =>
    ipcRenderer.send(IPC_CHANNel.SET_WALLPAPER_START, src);
