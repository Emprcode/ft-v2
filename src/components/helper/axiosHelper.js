import axios from 'axios'

const userApi = process.env.REACT_APP_ROOT_API + "/user"
const userLoginApi = userApi + "/login"

export const postUser = async(userObj) => {
    try {
        console.log(userObj)
        const {data} = await axios.post(userApi, userObj)
        console.log(data)
        return data
    } catch (error) {
        return ({
            status:"error",
            message:error.message
        })
        
    }
}