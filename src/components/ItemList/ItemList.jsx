import { useEffect, useState } from 'react';
import './ItemList.css';
import Item from '../Item/Item';
import 'bootstrap/dist/css/bootstrap.css';

//Se importa la hoja de estilos al iniciar, se tiene que crear una hoja de estilos por cada archivo JS

//Esta funcion va a definir el nuevo componente de la web, en este caso Navbar
const ItemList = ({ data = []}) => {    
    console.log(data)
    return (
        <section className='cuerpo'>
        {data.map(i => <Item key={i.id} name={i.name} category={i.category} price={i.price} img={i.img} stock={i.stock} id={i.id}/>)}
        </section>
    );
}

//Se exporta el componente creado en la funcion inicial
export default ItemList;