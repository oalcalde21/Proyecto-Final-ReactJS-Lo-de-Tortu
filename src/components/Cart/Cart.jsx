import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../CardContext/CardContext'
import { Link } from 'react-router-dom'
import Form from '../Form/Form'
import { collection, addDoc,getFirestore } from 'firebase/firestore'
import Swal from "sweetalert2";
import './Cart.css'
import 'bootstrap/dist/css/bootstrap.css';




export default function Cart() {

    const { cart, removeFromCart,getTotal,getQuantity, clearCart} = useContext(CartContext)
    const [empty, setEmpty] = useState(true);
    const [showForm, setShowForm] = useState(false)
    const [orderId, setOrderId] = useState("")
    const [confirmation, setConfirmation] = useState(false)

    const hoy = new Date()

    const handleFinalize = () =>{
    setShowForm(true)
    }

    const createOrder = (buyer) =>{

    const newOrder = {
    buyer,
    cart,
    date: hoy,
    total: getTotal()
    }

    const db = getFirestore();
    const orderCollection = collection(db, "order");

    addDoc(orderCollection, newOrder)
    .then(({id}) => setOrderId(id), setConfirmation(true))
    .catch((e)=>{console.log(e)})
    clearCart()   
    }

    useEffect(() => {
    if(cart.length === 0) {
    setEmpty(true)
    } else {
    setEmpty(false)
    }
    }, [cart.length]);

    if(!empty) {

    return (

        <div>
            {cart.map((element) => (
                    <div className="card cardStyle">
                        <img src={element.item.img}alt={element.item.name} className='image1' />
                        <div className="row card-body">
                            <h5 className="card-title">Articulo: {element.item.category}</h5><br/>
                            <h5 className="card-title">Articulo: {element.item.name}</h5><br/>
                            <p className='precio'>Precio: $ {element.item.price}</p>
                            <p className='precio'>Cantidad elegida: {element.quantity}</p>
                            <button className='btn1' onClick={()=> { removeFromCart(element.item.id)}}>Eliminar del carrito</button> 
                        </div>
                    </div>   
                    
            ))}
            <div className='row card cardStyle'>
                        <h4>Cantidad de todos los items: {getQuantity()}</h4>
                        <h4>PRECIO TOTAL: $ {getTotal()}</h4>
                        <button onClick={handleFinalize} className='btn-purchase'>Comprar</button>
                        {showForm ? <Form createOrder={createOrder}/> : null}
                    </div>
            </div>
            )
        } else if(orderId && confirmation) {
            return(
                <div className='finalizeTextOrder' >
                    <h3>Su Orden No. <span>{orderId}</span> ha sido confirmada</h3>
                    <Link to="/" exact>
                        <button className='btn3'>Continuar Comprando</button>
                    </Link>
                </div>
            )
        } else {
            return (
                <>
                    <h2>No hay nada en el carrito aun </h2>
                    <Link to='/'><button className='btn2 d-flex justify-content-center'>Ir al inicio</button></Link>
                </>
            
            )
            
        }
    }
