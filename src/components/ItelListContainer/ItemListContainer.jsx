import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useParams, useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { getFirestore, doc, getDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../services/FirebaseConfig';

function ItemListContainer() {

    const[data, setData] = useState([])
    const {categoriaID} = useParams()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        setIsLoading(true)
            const collections= collection(db,"products")

            const q = categoriaID ? query(collections,where('category','==',categoriaID)) : collections
            getDocs(q)
            .then((datos)=>{
                console.log(datos)
                setData(datos.docs.map((doc)=>({id:doc.id,...doc.data()})));

                }).finally(()=>{
                setIsLoading(false)
                })


    }, [categoriaID])  

    return isLoading ? (
        <h1>Cargando...</h1>)
        :
        (
        <>
        <p className='titCategory'>Categorias:</p>
        <div className='textNavLinkDiv'>
            <NavLink activeClassName='active' to="/categoria/Cana" className='textNavLinkNavLink'>Cañas</NavLink>
            <NavLink activeClassName='active' to="/categoria/Reel" className='textNavLinkNavLink'>Reeles</NavLink>
            <NavLink activeClassName='active' to="/categoria/Tanza" className='textNavLinkNavLink'>Tanzas</NavLink>
            <NavLink activeClassName='active' to="/categoria/Anzuelo" className='textNavLinkNavLink'>Anzuelo</NavLink>
        </div>
        
        <ItemList data={data}></ItemList>
        </>
    );
}

//Se exporta el componente creado en la funcion inicial
export default ItemListContainer;