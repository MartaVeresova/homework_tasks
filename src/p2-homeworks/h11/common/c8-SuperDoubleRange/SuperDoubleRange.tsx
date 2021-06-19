import React, {ChangeEvent} from 'react';
import {makeStyles, Slider} from '@material-ui/core';


type SuperDoubleRangePropsType = {
    onChangeRange: (value: [number, number]) => void
    value: [number, number]
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,
        value,
    }
) => {
    // сделать самому, можно подключать библиотеки

    const useStyles = makeStyles({
        root: {
            width: 250,
        },
    });

    const classes = useStyles();


    const onChangeCallback = (e: ChangeEvent<{}>, value: number | number[]) => {
        onChangeRange(value as [number, number])
    };

    return (
        <div className={classes.root}>
            <Slider
                value={value}
                onChange={onChangeCallback}
                valueLabelDisplay={'auto'}
            />
        </div>
    );
}

export default SuperDoubleRange;