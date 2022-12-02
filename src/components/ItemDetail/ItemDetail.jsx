import React, { useState } from 'react';
import {ItemDetailContainer} from '../ItemDetailContainer/ItemDetailContainer';
import {Link,  useNavigate} from 'react-router-dom';
import {CartContext} from '../CardContext/CardContext'
import {useContext} from 'react'
import ItemCount from '../ItemCount/ItemCount';
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.css';
import './ItemDetail.css';


const ItemDetail = ( {name, category, price, img, stock, id, description} ) => {
    
    // const { addToCart } = useContext(CartContext)
    const { addToCart } = useContext(CartContext)

    const onAdd = (numero) => {

        addToCart({name, category, price, img, stock, id, description},numero)
        
        Swal.fire({
            title: "Mensaje del carrito",
            text: `Usted agrego ${numero} ${name}`,
            icon: "success",
          });
       }

    return (
        <>
        <div className="">
            <div className='orderCart3'>
                <div className='orderCart2'>
                    <img src={img} alt={name} className="imagenes"></img>
                    <div>
                        <div className="orderCart1">
                            <h4 className="title">{name}</h4>
                            <p className="card-text">{category}</p>    
                            <p className="card-text">{price} $</p> 
                            <p className="card-text">Stock: {stock}</p> 
                            <p>{description}</p> 
                        </div>
                    </div>
                    <div className='orderCart4'>
                            <ItemCount stock={stock} onAdd={onAdd}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

//Se exporta el componente creado en la funcion inicial
export default ItemDetail;