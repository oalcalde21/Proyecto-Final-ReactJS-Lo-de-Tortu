import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../CardContext/CardContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

//Se importa la hoja de estilos al iniciar, se tiene que crear una hoja de estilos por cada archivo JS

//Esta funcion va a definir el nuevo componente de la web, en este caso Navbar
//El nombre siempre arranca con Mayuscula
function CartWidget() {

    const { getQuantity } = useContext(CartContext)

    return (
        <Link to='/cart'>
            <div className="cart-widget">
                {/* Acá puede ir cualquier ícono que quieran. En mi caso, estoy usando FontAwesome para React JS. */}
                <FontAwesomeIcon icon={faShoppingCart} size="2x" color="white" />
                <div className="qty-display">0</div>
                <p className='num-cart'>{getQuantity()}</p>

            </div>
        </Link>
    );
}

//Se exporta el componente creado en la funcion inicial
export default CartWidget;