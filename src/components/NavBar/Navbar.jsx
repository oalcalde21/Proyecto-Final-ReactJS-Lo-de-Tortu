import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../../assets/img/logo.png'
import { NavLink } from 'react-router-dom'
//Se importa la hoja de estilos al iniciar, se tiene que crear una hoja de estilos por cada archivo JS

//Esta funcion va a definir el nuevo componente de la web, en este caso Navbar
//El nombre siempre arranca con Mayuscula
function Navbar() {
    return (
        <header className='navbar'>
            <img src={Logo} alt="Logo" />
            <NavLink activeClassName='active' to='/' className='links'>Home</NavLink> 
            <NavLink activeClassName='active' to='/Nosotros' className='links'>Nosotros</NavLink>  
            <NavLink activeClassName='active' to='/Tienda' className='links'>Tienda</NavLink> 
            <CartWidget />
        </header>
    );
}

//Se exporta el componente creado en la funcion inicial
export default Navbar;