import React, { useState } from 'react';
import {ItemDetailContainer} from '../ItemDetailContainer/ItemDetailContainer';
import {Link,  useNavigate} from 'react-router-dom';
import {CartContext} from '../CardContext/CardContext'
import {useContext} from 'react'
import ItemCount from '../ItemCount/ItemCount';
import Swal from 'sweetalert2'


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
        <div className=''>
            <h4>Nombre: {name}</h4>
            <p>Categoria: {category}</p>    
            <p>Precio: {price} $</p> 
            <img src={img} alt={name} className='imagenes'></img>
            <p>Stock: {stock}</p> 
            <p>{description}</p> 
            <ItemCount stock={stock} onAdd={onAdd}/>
        </div>
    );
}

//Se exporta el componente creado en la funcion inicial
export default ItemDetail;