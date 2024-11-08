import React from 'react'
import s from './user.module.scss';
import { basketIcon, cartIcon, logoutIcon, menuIcon, productImg, userIcon, userPhoto } from '../../utils';
import { Paths } from '../../routes/paths';
import { NavLink } from 'react-router-dom';
import CustomBtn from '../ui/CustomBtn';
import userStore from '../../store/userStore';
import UserSceleton from './UserSceleton';
const links = [
  {url: Paths.menu, name: 'Меню', icon: menuIcon },
  {url: Paths.cart, name: 'Корзина', icon: cartIcon },
  {url: Paths.profile, name: 'Профиль', icon: userIcon },
]

const User = () => {
  const {user, logout} = userStore();
  console.log(user);
  const logoutUser = ()=>{
    logout();
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }
  let userImg = user?.avatar ? import.meta.env.VITE_IMG_URL + user.avatar : userPhoto;
  return user ? (
    <div className={s.user}>
        <div className={s.user__info}>
            <img src={userImg} alt="" className={s.user__img} />
            <h3 className={s.user__name}>{user.username}</h3>
            <p className={s.user__email}>{user.email}</p>
        </div>
        <ul className={s.user__menu}>
          {
            links.map((elem)=>(
            <li key={elem.url}>
              <NavLink to={elem.url} className={s.user__link}>
                <img src={elem.icon} alt="" />
                {elem.name}
              </NavLink>
            </li>
            ))
          }
        </ul>
        <CustomBtn
          text="Выйти"
          icon={logoutIcon}
          width={117}
          height={43}
          mt='auto'
          onClick={logoutUser}
        />
    </div>
  ) : <UserSceleton/>
}

export default User