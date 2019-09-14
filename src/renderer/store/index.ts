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

    const [autoChange, setAutoChange] = useState<Boolean>(false);

    return {
        listId,
        setListId,
        currentWallpaper,
        setCurrentWallpaper,
        autoChange,
        setAutoChange
    };
}

export default constate(useAppStore);
