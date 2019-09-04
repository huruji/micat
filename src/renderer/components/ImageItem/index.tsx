import * as React from 'react';
import './index.scss';
import { startSetWallpaper } from '../../utils/ipc';
import useAppStore from '../../store';
import ReactLoading from 'react-loading';
import { ipcRenderer } from 'electron';
import { IPC_CHANNel } from '../../../common/constants';

const { useState, useMemo } = React;
interface IProps {
    src: string;
    index: number;
}
const ImageItem: React.SFC<IProps> = ({ src }) => {
    const [hover, setHover] = useState(false);

    const { currentWallpaper, setCurrentWallpaper } = useAppStore();

    function setWallpaper(src: string) {
        startSetWallpaper(src);
        setCurrentWallpaper({
            src,
            isSetting: true
        });
    }

    return (
        <div
            className="image-item-container"
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <img src={src} style={{ height: 'auto', width: '100%' }} />
            {currentWallpaper.isSetting && currentWallpaper.src === src ? (
                <div className="hover-modal bg">
                    <ReactLoading type="spokes" />
                </div>
            ) : (
                hover && (
                    <div className="hover-modal">
                        <span onClick={() => setWallpaper(src)}>设为壁纸</span>
                    </div>
                )
            )}
        </div>
    );
};

export default ImageItem;
