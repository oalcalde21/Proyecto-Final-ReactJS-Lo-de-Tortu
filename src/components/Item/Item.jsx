import React, { useState } from 'react';
import './Item.css';
import {ItemDetailContainer} from '../ItemDetailContainer/ItemDetailContainer';
import {Link,  useNavigate} from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import ItemCount from '../ItemCount/ItemCount';
const Item = ( {name, category, price, img, stock, id}) => {
    const navigate = useNavigate();

    const handleDetail = () => {
        navigate(`/detail/${id}`);
    }
    return (
        <>
        <div>
            <div onClick={handleDetail} >
                <h4>{name}</h4>
                <p>{category}</p>    
                <p>{price} $</p> 
                <img src={img} alt={name} className='imagenes'></img>
                <p>Stock: {stock}</p> 
            </div>
        </div>
        </>
        
    );
}

//Se exporta el componente creado en la funcion inicial
export default Item;