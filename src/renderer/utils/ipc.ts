import { ipcRenderer } from 'electron';
import { IPC_CHANNel } from '../../common/constants';
import useAppStore from '../store';

export const startSetWallpaper = (src: string) =>
    ipcRenderer.send(IPC_CHANNel.SET_WALLPAPER_START, src);

export const setWallpaperEnd = () => {
    ipcRenderer.on(IPC_CHANNel.SET_WALLPAPER_END, () => {
        const { currentWallpaper, setCurrentWallpaper } = useAppStore();
        setCurrentWallpaper({
            ...currentWallpaper,
            ...{ isSetting: false }
        });
        debugger;
    });
};
