import React, { FC } from 'react'
import s from './Products.module.scss'
import { basketIcon, starIcon } from '../../utils'
import { IProducts } from '../../types'

const ProductsItem: FC<IProducts> = ({image, price, rating, title, description}) => {
  return (
    <div className={s.products__item}>
        <img src={image} alt="" className={s.products__img} />
        <p className={s.products__price}>
          {price} 
          <span> ₽</span>  
        </p>
        <button className={s.products__btn}>
            <img src={basketIcon} alt="" />
        </button>
        <p className={s.products__rating}>
            {rating}
            <img src={starIcon} alt="" />
        </p>
        <h3 className={s.products__name}>{title}</h3>
        <p className={s.products__desc}>{description}</p>
    </div>
  )
}

export default ProductsItem