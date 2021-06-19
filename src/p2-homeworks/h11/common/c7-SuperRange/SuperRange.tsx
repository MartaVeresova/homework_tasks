import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import Slider from '@material-ui/core/Slider';
import {makeStyles} from '@material-ui/core';

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void
    value?: number | number[]
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        onChangeRange,
        value,
    }
) => {

    const useStyles = makeStyles({
        root: {
            width: 250,
        },
    });

    const classes = useStyles();

    const onChangeCallback = (e: ChangeEvent<{}>, value: number | number[]) => {
        onChangeRange && onChangeRange(value as number);
    }

    return (
        <div className={classes.root}>
            <Slider
                value={value}
                onChange={onChangeCallback}
            />
        </div>
    );
}

export default SuperRange;