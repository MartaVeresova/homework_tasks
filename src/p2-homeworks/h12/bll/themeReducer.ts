const initialState = {
    themes: 'white'
};

export type InitialThemeStateType = typeof initialState

export const themeReducer = (state = initialState, action: ChangeThemeActionType): InitialThemeStateType => { // fix any

    switch (action.type) {

        case 'SET-THEME': {
            return {
                ...state,
                themes: action.themes
            }
        }

        default:
            return state;
    }
};

export const changeThemeAC = (themes: string) => {
    return {type: 'SET-THEME', themes} as const
};

export type ChangeThemeActionType = ReturnType<typeof changeThemeAC>