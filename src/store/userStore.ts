import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface IUserData {
    avatar: null | string,
    email: string,
    id: number,
    username: string
}

interface IUserStore {
    user: null | IUserData,
    isAuth: boolean,
    setUser: (data: IUserData)=> void,
    logout: ()=>void
}

const userStore = create<IUserStore>()(devtools((set) => ({
  user: null,
  isAuth: false,
  setUser: (data) => set({user: data, isAuth: true}),
  logout: () => set({user: null, isAuth: false}),
})))

export default userStore