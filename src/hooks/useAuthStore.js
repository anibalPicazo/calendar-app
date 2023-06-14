import { useDispatch, useSelector } from "react-redux"
import calendarApi from "../api/calendarApi"
import { onChecking, onLogin } from "../store/authSlice/authSlice"

export const useAuthStore = () =>{
    
    const {status,user, errorMessage } = useSelector(state => state.auth)
    const dispatch =useDispatch()

    const startLogin = async ({email,password}) =>{
        console.log({email,password});
        try {
            dispatch(onChecking())

            const {data} = await calendarApi.post('/auth',{email,password})
            localStorage.setItem('token',data.token)
            dispatch(onLogin({name: data.name, uid: data.uid}))
        } catch (error) {
            console.log(error)

        }
    }

    return{
        user,
        errorMessage,
        status,
        startLogin
    }
}