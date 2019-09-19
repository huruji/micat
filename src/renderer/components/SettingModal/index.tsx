import * as React from 'react';
import Switch from 'react-switch';
import Select from 'react-select';
import SettingRadio from '../SettingRadio';

import './index.scss';

interface IProps {
    autoChange: Boolean;
    setAutoChange: (arg: Boolean) => void;
    modalContent: React.Ref<HTMLDivElement>;
}

const SettingModal: React.SFC<IProps> = ({ autoChange, setAutoChange, modalContent }) => {
    const timeOptions = [
        {
            value: 1,
            label: '1分钟'
        },
        {
            value: 5,
            label: '5分钟'
        },
        {
            value: 30,
            label: '30分钟'
        }
    ];
    const orderOptions = [
        {
            value: 1,
            label: '随机',
            checked: true
        },
        {
            value: 0,
            label: '顺序',
            checked: false
        }
    ];

    return (
        <div className="setting-modal" ref={modalContent}>
            <div className="setting-modal-arrow" />
            <div className="setting-modal-content">
                <div className="setting-modal-content-item">
                    <div>定时更换壁纸：</div>
                    <Switch
                        checked={autoChange}
                        onChange={() => setAutoChange(!autoChange)}
                        onColor="#091823"
                        uncheckedIcon={false}
                        height={20}
                        width={40}
                    />
                </div>
                <div className="setting-modal-content-item change-time">
                    <div>定时更换时间：</div>
                    <Select
                        styles={{
                            option: p => ({ ...p }),
                            control: p => ({
                                ...p,
                                height: '24px',
                                minHeight: '24px',
                                width: '90px'
                            }),
                            option: p => ({
                                ...p,
                                height: '24px',
                                paddingTop: 0,
                                paddingBottom: 0,
                                lineHeight: '24px'
                            }),
                            menu: p => ({ ...p }),
                            menuList: p => ({ ...p })
                        }}
                        options={timeOptions}
                        defaultValue={timeOptions[1]}
                        onChange={val => {
                            console.log(val);
                        }}
                    />
                </div>
                <div className="setting-modal-content-item order">
                    <div>更换：</div>
                    <SettingRadio
                        opts={orderOptions}
                        onChange={value => {
                            console.log(value);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default SettingModal;
