import React from 'react';
import Request from './Request';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import {useDispatch, useSelector} from 'react-redux';
import {createCheckboxValueTC, disabledButtonAC, setCheckedAC} from './bll/checkboxReducer';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import {AppStoreType} from '../h10/bll/store';


function HW13() {

    const checked = useSelector<AppStoreType, boolean>(state => state.checkboxState.checked)
    const disabled = useSelector<AppStoreType, boolean>(state => state.checkboxState.disabled)

    const dispatch = useDispatch()

    const setChecked = (checked: boolean) => {
        dispatch(setCheckedAC(checked))
        dispatch(disabledButtonAC(false))
    }

    const sendRequest = () => {
        if (checked)
            dispatch(createCheckboxValueTC(true))
        else dispatch(createCheckboxValueTC(false))
    }

    return (
        <div>
            <hr/>
            <span>
                homeworks 13 <br/>
            </span>

            <SuperCheckbox
                onChangeChecked={setChecked}
                checked={checked}
            />

            <SuperButton onClick={sendRequest} disabled={disabled}>
                send
            </SuperButton>

            <Request/>

            <hr/>
        </div>
    );
}

export default HW13;
