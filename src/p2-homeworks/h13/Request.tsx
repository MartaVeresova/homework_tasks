import React from 'react';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';


function Request() {

    const error = useSelector<AppStoreType, string | null>(state => state.checkboxState.error)

    return (
        <div>
            {error}
        </div>
    );
}

export default Request;
