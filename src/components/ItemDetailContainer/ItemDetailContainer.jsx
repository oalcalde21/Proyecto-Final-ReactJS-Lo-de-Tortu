import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore'
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from '../services/FirebaseConfig';
import 'bootstrap/dist/css/bootstrap.css';

function ItemDetailContainer() {
    
    const[data, setData] = useState([])
    const {detailID} = useParams()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        setIsLoading(true)

        const  miproducto = doc(db,'products',detailID);
        getDoc(miproducto)
        .then((prod)=>{
            setData({id:prod.id, ...prod.data()});

        })
        .catch(console.log())
        .finally(() => {
            setIsLoading(false)
        })
     }, [])


return (
    <>
    <h2>Detalle de los productos!</h2> 
    {
        isLoading ? 
        <div>
            <span >Cargando...</span>
        </div>
        :
        <ItemDetail {...data}/>
    }
    
    </>
)
}

export default ItemDetailContainer;

