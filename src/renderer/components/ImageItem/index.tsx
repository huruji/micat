import * as React from 'react';
import './index.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface IProps {
    src: string;
}
const ImageItem: React.SFC<IProps> = ({ src }) => {
    return (
        <div className="image-item-container">
            <LazyLoadImage height={'auto'} src={src} width={'100%'} />
        </div>
    );
};

export default ImageItem;
