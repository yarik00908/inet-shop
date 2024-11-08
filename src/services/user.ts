import { ILogin, IRegister } from "../types";
import api from "./api";
import {
    useQuery,
    useMutation,
} from '@tanstack/react-query'

export const useRegisterMutation = ()=>{
    return useMutation({
        mutationFn: (userData: IRegister)=> api.post('/auth/register', userData)
    })
}

export const useLoginMutation = ()=>{
    return useMutation({
        mutationFn: (userData: ILogin)=> api.post('/auth/login', userData),
        onSuccess: ({data})=>{
            if(data && data.access) {
                localStorage.setItem('access_token', data.access)
                localStorage.setItem('refresh_token', data.refresh)
            }
        }
    })
}

export const useCurrentUser = ()=>{
    const accessToken = localStorage.getItem('access_token')
    return useQuery({
        queryKey: ['curren'],
        queryFn: ()=> api.get('/auth/users/profile'),
        // enabled: Boolean(accessToken)
        enabled: !!accessToken,
        select: (result)=> result.data
    })
}
