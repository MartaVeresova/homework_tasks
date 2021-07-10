import {AxiosError} from 'axios';
import {Dispatch} from 'redux';
import {RequestAPI} from '../RequestAPI';

const initialState = {
    success: true,
    checked: false,
    error: null as string | null,
    disabled: false,
};

export type ActionsType =
    | CreateCheckboxValueActionType
    | SetErrorActionType
    | SetCheckedActionType
    | DisabledButtonACActionType

export type InitialStateType = typeof initialState

export const checkboxReducer = (state = initialState, action: ActionsType): InitialStateType => { // fix any

    switch (action.type) {

        case 'CREATE-VALUE-CHECKBOX':
            return {
                ...state,
                success: action.success
            }

        case 'SET-ERROR':
            return {
                ...state,
                error: action.error
            }

        case 'SEND-REQUEST':
            return {
                ...state,
                checked: action.checked
            }

        case 'DISABLED-BUTTON':
            return {
                ...state,
                disabled: action.disabled
            }

        default:
            return state;
    }
};

export const createCheckboxValueAC = (success: boolean) => {
    return {type: 'CREATE-VALUE-CHECKBOX', success} as const
}

export const setErrorAC = (error: string | null) => {
    return {type: 'SET-ERROR', error} as const
}

export const setCheckedAC = (checked: boolean) => {
    return {type: 'SEND-REQUEST', checked} as const
}

export const disabledButtonAC = (disabled: boolean) => {
    return {type: 'DISABLED-BUTTON', disabled} as const
}

export const createCheckboxValueTC = (success: boolean) => (dispatch: Dispatch) => {
    dispatch(disabledButtonAC(true))
    RequestAPI.createCheckboxValue(success)
        .then(res => {
            dispatch(createCheckboxValueAC(res.data.yourBody.success))
            dispatch(setErrorAC(res.data.errorText))
            console.log(res.data.errorText)
        })
        .catch((err: AxiosError) => {
            dispatch(setErrorAC(err.message))
            console.log({...err})
            console.log(err.response ? err.response.data.errorText : err.message)
        })
}

// export const createCheckboxValueTC = (success: boolean) =>
//     async (dispatch: Dispatch) => {
//             try {
//                 dispatch(disabledButtonAC(true))
//                 const data = await RequestAPI.createCheckboxValue(success)
//                 dispatch(createCheckboxValueAC(data.data.yourBody.success))
//                 dispatch(setErrorAC(data.data.errorText))
//                 console.log(data.data.errorText)
//             } catch (err) {
//                 dispatch(setErrorAC(err.message))
//                 console.log({...err})
//                 console.log(err.response ? err.response.data.errorText : err.message)
//             }
//     }

export type CreateCheckboxValueActionType = ReturnType<typeof createCheckboxValueAC>
export type SetErrorActionType = ReturnType<typeof setErrorAC>
export type SetCheckedActionType = ReturnType<typeof setCheckedAC>
export type DisabledButtonACActionType = ReturnType<typeof disabledButtonAC>