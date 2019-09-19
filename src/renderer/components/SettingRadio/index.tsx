import * as React from 'react';
import './index.scss';

interface RadioValue {
    label: string;
    checked?: boolean;
    value: string | number;
}

interface IProps {
    opts: RadioValue[];
    onChange: (value?: any) => void;
}

const SettingRadio: React.SFC<IProps> = ({ opts, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        e.target.value && onChange(index);
    };

    return (
        <form>
            {opts.map((opt, index) => (
                <div key={index} className="pretty p-icon p-round p-jelly">
                    <input
                        type="radio"
                        name="setting-order"
                        defaultChecked={opt.checked}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleChange(e, index)
                        }
                    />
                    <div className="state p-primary">
                        <i className="icon mdi mdi-check" />
                        <label>{opt.label}</label>
                    </div>
                </div>
            ))}
        </form>
    );
};

export default SettingRadio;
