import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Paths } from '../routes/paths';
import { useCurrentUser } from '../services/user';
import userStore from '../store/userStore';

const PrivateRoute = () => {
    const navigate = useNavigate();
    const accessToken = localStorage.getItem('access_token');
    const {setUser} = userStore()
    const {data} = useCurrentUser()
    console.log(data);
    useEffect(()=>{
        if(!accessToken) {
            navigate(Paths.login)
        }
    }, [accessToken])
    useEffect(()=>{
      if (data) {
        setUser(data)
      }
    }, [data])
  return (
    <Outlet/>
  )
}

export default PrivateRoute