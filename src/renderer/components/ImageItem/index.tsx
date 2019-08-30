import * as React from 'react';
import './index.scss';
import { startSetWallpaper } from '../../utils/ipc';

const { useState, useMemo } = React;
interface IProps {
    src: string;
}
const ImageItem: React.SFC<IProps> = ({ src }) => {
    const [hover, setHover] = useState(false);

    return (
        <div
            className="image-item-container"
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {hover && (
                <div className="hover-modal">
                    <span onClick={() => startSetWallpaper(src)}>设为壁纸</span>
                </div>
            )}
        </div>
    );
};

export default ImageItem;
