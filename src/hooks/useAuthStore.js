import { useDispatch, useSelector } from "react-redux"

export const useAuthStore = () =>{
    
    const {status,user, errorMessage } = useSelector(state => state.auth)
    const dispatch =useDispatch()

    const startLogin = async ({email,password}) =>{
        console.log({email,password});
        try {
            
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