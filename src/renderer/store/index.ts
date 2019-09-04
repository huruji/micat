import constate from 'constate';
import { useState } from 'react';

interface IWallpaper {
    isSetting: boolean;
    src: string;
}

function useAppStore() {
    const [listId, setListId] = useState<number>(26);
    const [currentWallpaper, setCurrentWallpaper] = useState<IWallpaper>({
        isSetting: false,
        src: ''
    });

    return {
        listId,
        setListId,
        currentWallpaper,
        setCurrentWallpaper
    };
}

export default constate(useAppStore);
