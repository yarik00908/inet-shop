import React, { FC } from 'react'
import s from './customBtn.module.scss'

interface ICustomBtn {
    text: string,
    icon?: string,
    width: number,
    height: number,
    mt?: string,
    active?: boolean,
    disabled?: boolean,
    onClick?: ()=>void
}

const CustomBtn: FC<ICustomBtn> = ({text, icon, width, height, mt, active, disabled, onClick}) => {
  return (
    <button onClick={onClick} disabled={disabled} className={s.btn + ' ' + (active && s.active)} style={{width, height, marginTop: mt}}>
        {icon && <img src={icon} alt="" />}
        <span>{text}</span>
    </button>
  )
}

export default CustomBtn