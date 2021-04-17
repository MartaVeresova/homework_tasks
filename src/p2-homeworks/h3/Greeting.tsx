import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)
    //const inputClass = error ? s.error + ' ' + s.errorMessage : '' // можно комбинировать css-классы

    return (
        <div>
            <input
                value={name}
                onChange={setNameCallback}
                className={inputClass}
                onKeyPress={onKeyPressHandler}
            />
            <button className={s.button} onClick={addUser} disabled={!!error}>add</button>
            <span   >{totalUsers}</span>
            <div className={s.errorMessage}>{error}</div>
        </div>
    )
}

export default Greeting
