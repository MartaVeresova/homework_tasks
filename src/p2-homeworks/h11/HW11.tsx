import React, {useState} from 'react';
import SuperRange from './common/c7-SuperRange/SuperRange';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';
import s from './common/c7-SuperRange/SuperRange.module.css'


function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    const onChangeCallbackDoubleRange = (arr: [number, number]) => {
        setValue1(arr[0])
        setValue2(arr[1])
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.range}>
                <div className={s.minValue}>
                    {value1}
                </div>

                <SuperRange
                    value={value1}
                    onChangeRange={setValue1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div className={s.range}>
                <div className={s.minValue}>
                    {value1}
                </div>

                <SuperDoubleRange
                    value={[value1, value2]}
                    onChangeRange={onChangeCallbackDoubleRange}
                    // сделать так чтоб value1 и value2 изменялось
                />

                <div className={s.maxValue}>
                    {value2}
                </div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11;
