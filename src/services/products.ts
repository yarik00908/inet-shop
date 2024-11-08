import api from "./api";
import {
    useQuery,
    useMutation,
} from '@tanstack/react-query';

export const useGetProducts = ()=>{
    return useQuery({
        queryKey: ['products'],
        queryFn: ()=> api.get('/products'),
        select: (result)=> result.data
    })
}