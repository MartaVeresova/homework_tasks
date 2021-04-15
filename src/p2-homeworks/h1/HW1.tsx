import React from 'react'
import Message from './Message';

const messageData = {
    /*
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    */
    avatar: 'https://ethnomir.ru/upload/medialibrary/a40/prince.jpg',
    name: 'Маленький принц',
    message: 'Взрослые очень любят цифры. Когда рассказываешь им, что у тебя появился новый друг, они никогда не спросят о самом главном. Никогда они не скажут: «А какой у него голос? В какие игры он любит играть? Ловит ли он бабочек?» Они спрашивают: «Сколько ему лет? Сколько у него братьев? Сколько он весит? Сколько зарабатывает его отец?» И после этого воображают, что узнали человека.',
    time: '23:59',
}


function HW1() {

    return (

        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}


            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
