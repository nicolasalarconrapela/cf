import React from 'react';
import { withRouter } from 'react-router-dom'
import Logout from '../HomePage/Logout'
/**
 * Clase de navegacion
 */
export default class Navbar extends React.Component {
    // recibe por parametro el path al que hace referencia el li, padre del link al que le dimos click y retorna 'active' en caso de corresponder el path.
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }
    render() {
        return (
            <nav className="navbar navbar-inverse" >
                <div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">

                            <li className={this.getNavLinkClass("/")}>
                                <a href="/">Welcome</a>
                            </li>
                            <li className={this.getNavLinkClass("/homeblank")}>
                                <a href="/homeblank">Home</a>
                            </li>

                            <li className={this.getNavLinkClass("/about")}>
                                <a href="/about">About</a>
                            </li>
                            <li className={this.getNavLinkClass("/author")}>
                                <a href="/author">Autor</a>
                            </li>
                            <li className={this.getNavLinkClass("/book")}>
                                <a href="/book">Libros</a>
                            </li>
                            <li className={this.getNavLinkClass("/users")}>
                                <a href="/users">Usuarios</a>
                            </li>
                            <li className={this.getNavLinkClass("/loan")}>
                                <a href="/loan">Prestamos</a>
                            </li>
                            <Logout />
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
};
Navbar = withRouter(Navbar);