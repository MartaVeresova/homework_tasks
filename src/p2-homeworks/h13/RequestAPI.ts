import axios from 'axios';

export const RequestAPI = {
    createCheckboxValue(success: boolean) {
        return axios.post(`https://neko-cafe-back.herokuapp.com/auth/test`, {success})
    },
}