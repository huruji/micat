import * as React from 'react';
import { useListIdContext } from '../../store';
import classnames from 'classnames';
import './index.scss';

interface ITitle {
    id: number;
    text: string;
}

const titleList: ITitle[] = [
    {
        id: 36,
        text: '热门'
    },
    {
        id: 6,
        text: '美女'
    },
    {
        id: 26,
        text: '动漫'
    },
    {
        id: 11,
        text: '明星'
    },
    {
        id: 16,
        text: '体育'
    }
];

const Title: React.SFC = () => {
    const { listId, setListId } = useListIdContext();

    return (
        <div className="title-contaienr">
            {// tslint:disable
            titleList.map(title => (
                <div
                    className={classnames('title-item', { active: title.id === listId })}
                    key={title.id}
                    onClick={() => setListId(title.id)}
                >
                    {title.text}
                </div>
            ))}
        </div>
    );
};

export default Title;
