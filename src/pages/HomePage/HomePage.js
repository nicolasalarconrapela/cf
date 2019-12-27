import React from 'react';
import { connect } from 'react-redux';

import { userActions } from '../../components/login/_actions/index';
import Navbar from '../NavBar/NavBar';

/**
 * ## HomePage
 *
 * Seccion de pagina principal de la aplicación.
 *
 * @author NAR
 * @version 1.0.0
 * @since 18.2
 */
class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavbarHidden: false
        };
    }


    componentDidMount() {
        this.props.getUsers();

        const currentRoute = this.props.location.pathname;
        if (currentRoute === '/login') {
            this.setState({ isNavbarHidden: true });
        } else {
            this.setState({ isNavbarHidden: false });
        }
    }

    /** Eliminacion de usuario */
    handleDeleteUser(id) {
        return () => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        const { isNavbarHidden } = this.state;

        return (
            <div>
                {!isNavbarHidden && <Navbar />}
                <h2>Esto son sus datos</h2>
                <ul>
                    <li>ID : {user.id} </li>
                    <li>Usuario : {user.username} </li>
                    <li>Alias : {user.alias} </li>
                    <li>Contraseña : {user.password} </li>
                    <li>Repeticion de Contra : {user.repeatpassword} </li>
                    <li>Acceso : {user.access}</li>
                    <li>Nombre : {user.firstName} </li>
                    <li>Apellidos : {user.lastName} </li>
                    <li>phone : {user.phone} </li>
                    <li>telphone : {user.telephone}</li>
                    <li>email : {user.email}</li>
                    <li>dateofBirth : {user.dateofBirth}</li>
                    <li>street: {user.street}</li>
                    <li>cp: {user.cp}</li>
                    <li>population : {user.population}</li>
                    <li>province1 : {user.province1}</li>
                    <li>country1 : {user.country1}</li>
                    <li>sex1 : {user.sex1}</li>
                    <li>documentIdentify : {user.documentIdentify}</li>
                    <li>photo : {user.photo}, </li>
                </ul>

                <p>You're logged in with React!!</p>
                <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                                {
                                    user.deleting ? <em> - Deleting...</em>
                                        : user.deleteError ?
                                            <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                            : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                }
                            </li>
                        )}
                    </ul>
                }
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}
const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };
export default HomePage;