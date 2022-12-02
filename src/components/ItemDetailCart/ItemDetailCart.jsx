import React, { useState } from 'react';
import './ItemDetailCart.css';
import {ItemDetailContainer} from '../ItemDetailContainer/ItemDetailContainer';
import {Link,  useNavigate} from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
const ItemDetailCart = ( {name, category, price, img, stock, id, description} ) => {
    
    return (
        <div className='card'>
            <h4>{name}</h4>
            <p>{category}</p>    
            <p>{price} $</p> 
            <img src={img} alt={name} className='imagenes'></img>
            <p>Stock: {stock}</p> 
            <p>{description}</p> 
        </div>
    );
}

//Se exporta el componente creado en la funcion inicial
export default ItemDetailCart;