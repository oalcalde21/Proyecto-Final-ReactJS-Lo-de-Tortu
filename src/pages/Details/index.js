import React from "react";
import Item from "../../components/Item/Item";
import { useParams, useLocation } from 'react-router-dom'
import './styles.css';
const Details = () => {
    const params = useParams();
    const {state} = useLocation();
    return (
        <div>
            <Item item={state}></Item>
        </div>
    )
}

export default Details;
