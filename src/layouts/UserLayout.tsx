import React, { FC, ReactNode } from 'react'
import User from '../components/User/User'

interface IUserLayout {
    children: ReactNode
}
const UserLayout: FC<IUserLayout> = ({children}) => {
  return (
    <div className='wrapper'>
        <User/>
        <div className="container">
            {children}
        </div>
    </div>
  )
}

export default UserLayout