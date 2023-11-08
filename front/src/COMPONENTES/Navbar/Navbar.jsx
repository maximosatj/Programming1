
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { UserContext } from "../../CONTEXT/UserContext";
import './Navbar.css'
export const Navbar = () => {
    const { user,setUser } = useContext(UserContext);
    const handleLogOut = () => {
        setUser(false)
        console.log('salir')
    }

    return (
        <div>
            <div class="header_section">
                <div class="container">
                    <nav className="navbar navbar-expand-lg navbar-light" data-bs-theme="dark">
                        <a className="navbar-braknd" href="/#" > </a> 
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {
                                //administrador
                                user.role === '1' ? (
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/userList">Lista de Usuarios</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/products">Ver Ofertas</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/addProduct">Crear Oferta</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/home">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/" onClick={handleLogOut} >Salir</Link>
                                        </li>
                                    </ul>
                                //usuario
                                ) : user.role === '2' ? (
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/myBuys">Carrito</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/products">Comprar Vino</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/home">Home</Link>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/" onClick={handleLogOut} >Salir</Link>
                                        </li>
                                    </ul>
                                ):(
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/home">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" exact='true' to="/login">Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/register">Registro</Link>
                                            
                                        </li>
                                    </ul>
                                ) 
                            }           
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}