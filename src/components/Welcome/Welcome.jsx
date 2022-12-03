import './Welcome.css';
import Swal from "sweetalert2";
import 'bootstrap/dist/css/bootstrap.css';
//Se importa la hoja de estilos al iniciar, se tiene que crear una hoja de estilos por cada archivo JS

//Esta funcion va a definir el nuevo componente de la web, en este caso Navbar
//El nombre siempre arranca con Mayuscula


function Welcome({name}) {
    return (
        <h2 className='alignWelcome'>Bienvenido a nuestra pagina {name}</h2>

    );
}

//Se exporta el componente creado en la funcion inicial
export default Welcome;