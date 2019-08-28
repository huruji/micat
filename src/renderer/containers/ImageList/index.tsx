import * as React from 'react';
import useHttp from 'use-http';
import handleImage from '../../utils/handle-image';
import ImageItem from '../../components/ImageItem';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';

import './index.scss';

const { useState, useEffect } = React;

export default () => {
    const [images, setImages] = useState<string[]>([]);
    const request = useHttp('https://api.tuchong.com');
    useEffect(() => {
        init();
    }, []);

    async function init() {
        const data = await request.get('/feed-app');
        const imgs = handleImage(data.feedList);
        setImages([...images, ...imgs]);
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
