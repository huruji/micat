import * as React from 'react';
import useHttp from 'use-http';
import handleTuchongImage from '../../utils/handle-tuchong-image';
import handle360Image from '../../utils/handle-360-image';
import ImageItem from '../../components/ImageItem';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { useListIdContext } from '../../store';

import './index.scss';

const { useState, useEffect } = React;

export default () => {
    const { listId } = useListIdContext();

    const [images, setImages] = useState<string[]>([]);

    const request = useHttp(
        `http://wallpaper.apc.360.cn/index.php/imgapi?c=WallPaperAndroid&a=getAppsByCategory&start=100&count=99`
    );

    useEffect(() => {
        init();
    }, [listId]);

    async function init() {
        setImages([]);
        const data = await request.get(`&cid=${listId}`);
        const imgs = handle360Image(data.data);
        setImages([...imgs]);
    }

    const containerRef = useBottomScrollListener<HTMLDivElement>(init);
    return (
        <div className="image-list-container" ref={containerRef}>
            {images.map((image, i) => (
                <ImageItem src={image} key={i} />
            ))}
        </div>
    );
};
