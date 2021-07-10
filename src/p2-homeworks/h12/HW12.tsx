import React from 'react';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';
import s from './HW12.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {changeThemeAC} from './bll/themeReducer';

const themes = ['white', 'dark', 'red', 'green', 'blue'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.themeState.themes)
    const dispatch = useDispatch()

    const setThemes = (themes: string) => {
        dispatch(changeThemeAC(themes))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12 <br/>
                Color scheme
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperRadio
                name={'radio'}
                options={themes}
                value={theme}
                onChangeOption={setThemes}
            />

            <hr/>
        </div>
    );
}

export default HW12;
