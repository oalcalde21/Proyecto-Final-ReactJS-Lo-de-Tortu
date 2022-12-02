import React, { useState } from 'react';
import './Item.css';
import {ItemDetailContainer} from '../ItemDetailContainer/ItemDetailContainer';
import {Link,  useNavigate} from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import ItemCount from '../ItemCount/ItemCount';
import 'bootstrap/dist/css/bootstrap.css';

const Item = ( {name, category, price, img, stock, id}) => {
    const navigate = useNavigate();

    const handleDetail = () => {
        navigate(`/detail/${id}`);
    }
    return (
        <>
        <div className="card" style={{ "width" : "15rem"}}>
            <div className="textOrder" onClick={handleDetail} >
                <img src={img} alt={name} className="imagenes1"></img>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{category}</p>    
                    <p className="card-text">{price} $</p> 
                    <p className="card-text">Stock: {stock}</p> 
                </div>
            </div>
        </div>
        </>
        
    );
}

//Se exporta el componente creado en la funcion inicial
export default Item;