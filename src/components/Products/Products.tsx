import React from 'react'
import s from './Products.module.scss'
import Sort from '../Sort/Sort'
import Search from '../Search/Search'
import ProductsItem from './ProductsItem'
import { useGetProducts } from '../../services/products'
import { IProducts } from '../../types'

const Products = () => {
    const {data} = useGetProducts();
    console.log(data);
  return (
    <div className={s.products}>
        <div className={s.products__filter}>
            <h1 className={s.products__title}>Меню</h1>
            <Sort/>
            <Search/>
        </div>
        <div className={s.products__list}>
            { 
            data && data.results.map((elem: IProducts)=>{
                return <ProductsItem key={elem.id} {...elem}/>
            })
            }
        </div>
    </div>
  )
}

export default Products