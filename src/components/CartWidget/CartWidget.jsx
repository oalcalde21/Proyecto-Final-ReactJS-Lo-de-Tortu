import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

//Se importa la hoja de estilos al iniciar, se tiene que crear una hoja de estilos por cada archivo JS

//Esta funcion va a definir el nuevo componente de la web, en este caso Navbar
//El nombre siempre arranca con Mayuscula
function CartWidget() {
    return (
        <div className="cart-widget">
            {/* Acá puede ir cualquier ícono que quieran. En mi caso, estoy usando FontAwesome para React JS. */}
            <FontAwesomeIcon icon={faShoppingCart} size="2x" color="white" />
            <div className="qty-display">0</div>
        </div>
    );
}

//Se exporta el componente creado en la funcion inicial
export default CartWidget;