import React, { useEffect, useState, useParams } from "react";
import './ItemDetail.css';
import {useContext} from 'react'
import { CartContext } from '../CardContext/CardContext'
import ItemCount from '../ItemCount/ItemCount';
import Item from "../Item/Item";
import ItemDetailCart from "../ItemDetailCart/ItemDetailCart";


const ItemDetail = ({ data = []}) => {    

    return (
        <section className='cuerpo'>
        {data.map(i => <ItemDetailCart key={i.id} name={i.name} category={i.category} price={i.price} img={i.img} stock={i.stock} id={i.id} description={i.description}/>)}
        </section>
    );
}

//Se exporta el componente creado en la funcion inicial
export default ItemDetail;

