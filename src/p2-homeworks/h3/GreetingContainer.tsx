import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // (x: any) => void; (...x: any[]) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string | null>('') // need to fix any


    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setError(null)
        setName(e.currentTarget.value.trim()) // need to fix
    }

    const addUser = () => {
        if (name.trim() !== '') { //продублировать
            addUserCallback(name.trim())
            alert(`Hello, ${name.trim()}!`) // need to fix
            setName('')
        } else {
            setError('name is require!')
        }
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        //setError(null) - можно прописать и в setNameCallback и тут
        if (e.key === 'Enter' && name) {
            addUser()
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressHandler={onKeyPressHandler}
        />
    )
}

export default GreetingContainer
