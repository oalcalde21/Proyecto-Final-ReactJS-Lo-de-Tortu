import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../services/FirebaseConfig';
import { NavLink } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
    
    const[data, setData] = useState([])
    const {detailID} = useParams()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        setIsLoading(true)
            const collections = collection(db,"products");

            const q = detailID ? query(collections,where('id','==', Number(detailID))) : collections;
            
            getDocs(q)
            .then((datos)=>{
                console.log(datos)
                setData(datos.docs.map((doc)=>({id:doc.id,...doc.data()})));

                }).finally(()=>{
                setIsLoading(false)
                })

    }, [detailID])
    console.log(data)

return (
    <>
    <h2>Detalle de los productos!</h2> 
    {
        isLoading ? 
        <div>
            <span >Cargando...</span>
        </div>
        :
        <ItemDetail data={data}/>
    }
    
    </>
)
}

export default ItemDetailContainer;

