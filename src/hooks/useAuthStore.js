import { useDispatch, useSelector } from "react-redux"
import calendarApi from "../api/calendarApi"
import { onChecking, onLogOut, onLogin, onResetError } from "../store/authSlice/authSlice"

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
            dispatch(onLogOut('Credenciales incorrectas'))
            console.log(error)

        }
    }
    const startRegister = async ({name,email,password,password2}) =>{
        try {
            const {data} = await calendarApi.post('/auth/new',{name,email,password,password2})
            localStorage.setItem('token',data.token)
            dispatch(onLogin({name: data.name, uid: data.uid}))

        } catch (error) {
            
            dispatch(onLogOut(error.response.data?.msg || '---'))
            setTimeout(
                ()=>{
                    dispatch(onResetError())
                },10
            )

        }
    }
    const checkAuthToken = async () => {
        const token = localStorage.getItem('token')
        
        if ( !token) return dispatch(onLogOut())
        try {
            const {data} = await calendarApi.get('/auth/renew')
            localStorage.setItem('token',data.token)
            dispatch(onLogin({name: data.name, uid: data.uid}))
        } catch (error) {
            localStorage.clear()
            dispatch(onLogOut())
        }
    }

    return{
        user,
        errorMessage,
        status,
        startLogin,
        startRegister,
        checkAuthToken
    }
}