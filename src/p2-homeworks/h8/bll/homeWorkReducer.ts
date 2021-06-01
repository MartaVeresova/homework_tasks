import {initialPeople, UserType} from '../HW8';

export const SORT_UP = 'SORT-UP'
export const SORT_DOWN = 'SORT-DOWN'
export const CHECK = 'CHECK'


type SortUpType = {
    type: 'SORT-UP'
    payload: string
}
type SortDownType = {
    type: 'SORT-DOWN'
    payload: string
}
type CheckType = {
    type: 'CHECK'
    payload: number
}


export type ActionsType = SortUpType | SortDownType | CheckType

export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): Array<UserType> => { // need to fix any
    switch (action.type) {

        case SORT_UP:
            return [...initialPeople.sort((a, b) => a.name > b.name ? 1 : -1)]

        case SORT_DOWN:
            return [...initialPeople.sort((a, b) => a.name < b.name ? 1 : -1)]

        case CHECK:
            return [...initialPeople.filter(p => p.age > action.payload).sort((a, b) => a.age - b.age)]

        default:
            return state
    }
}

export const SortNameUpAC = (payload: string): SortUpType => {
    return {type: SORT_UP, payload: payload}
}
export const SortNameDownAC = (payload: string): SortDownType => {
    return {type: SORT_DOWN, payload: payload}
}
export const CheckAC = (payload: number): CheckType => {
    return {type: CHECK, payload: payload}
}