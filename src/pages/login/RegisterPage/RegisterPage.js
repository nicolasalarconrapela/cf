import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../../components/login/_actions/index';

/**
 * # APP
 *
 * Seccion de registro de la aplicación.
 *
 * @author NAR
 * @version 1.0.0
 * @since 18.2
 */
class RegisterPage extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            user: {
                idUser: '',
                username: '',
                alias: '',
                password: '',
                repeatpassword: '',
                access: '',
                firstName: '',
                lastName: '',
                phone: '',
                telephone: '',
                email: '',
                dateofBirth: '',
                street: '',
                cp: '',
                population: '',
                province1: '',
                country1: '',
                sex1: '',
                documentIdentify: '',
                photo: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value },
            () => {
                console.log(this.state)
                if (this.state.idUser === '1') {
                    console.log('Es uni amigo')
                } else {
                    console.log(' NO es uni amig')
                }
                console.log(this.state)

            });

    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('handleSubmit')
        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.idUser
            && user.username
            && user.alias
            && user.password
            && user.repeatpassword
            && user.access
            && user.firstName
            && user.lastName
            && user.phone
            && user.telephone
            && user.email
            && user.dateofBirth
            && user.street
            && user.cp
            && user.population
            && user.province1
            && user.country1
            && user.sex1
            && user.documentIdentify
            && user.photo
        ) {
            this.props.register(user);
        }
    }


    /**
     * ================ RENDER ================================
     */
    render() {
        let validation = this.submitted ?                         // if the form has been submitted at least once
            this.validator.validate(this.state) :   // then check validity every time we render
            this.state.validation                   // otherwise just use what's in state
        const { registering } = this.props;
        const { user, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    {/* 
                        El ID :
                        * [ ] MOSTRAR :
                            * [ ] SI => Desde admin
                            * [ ] NO => Desde login
                        * [ ] SIEMPRE Solo lectura
                    */}





                    <div
                        id="IDUSER" className={'form-group' + (submitted && !user.idUser ? ' has-error' : '')}>
                        <label htmlFor="idUser">ID-Usuario</label>
                        <input
                            type="number"
                            className="form-control"
                            name="idUser"
                            autoComplete="false"
                            // disabled="true"
                            value={this.state.idUser}
                            onChange={this.handleChange}

                        />
                        {submitted && !user.idUser && this.state.idUser !== '1' &&
                            <div className="help-block">El ID del usuario es obligatorio</div>
                        }
                    </div>

                    {/* <div id="NAMEUSER" className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                        <label htmlFor="username">Nombre Usuario</label>

                        <input type="text" className="form-control" name="username" onChange={this.handleChange}/>
                        {submitted && !user.username &&
                        <div className="help-block">Username is required</div>
                        }
                    </div>

                    <div id="ALIAS" className={'form-group' + (submitted && !user.alias ? ' has-error' : '')}>
                        <label htmlFor="alias">Alias</label>
                        <input type="text" className="form-control" name="alias" onChange={this.handleChange}/>
                        {submitted && !user.alias &&
                        <div className="help-block">El alias no debe de modificarse </div>
                        }

                    </div>

                    <div id="PASSWORD" className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" onChange={this.handleChange}/>
                        {submitted && !user.password &&
                        <div className="help-block">Password is required</div>
                        }
                    </div>

                    {
                        user.password !== '' &&
                        <div id="REPEATPASSWORD"
                             className={'form-group' + (submitted && !user.repeatpassword ? ' has-error' : '')}>
                            <label htmlFor="repeatpassword">Repeticion Password</label>
                            <input type="password" className="form-control" name="repeatpassword"
                                   onChange={this.handleChange}/>
                            {submitted && !user.repeatpassword &&
                            <div className="help-block">La repeticion de la contraseña NO coincide</div>
                            }
                        </div>
                    }
                    <div id="ACCESS" className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="access">Aceso</label>
                        <input type="text" className="form-control" name="access" onChange={this.handleChange}/>
                        {submitted && !user.access &&
                        <div className="help-block">El aceso es requerido</div>
                        }
                    </div>

                    <div id="NOMBRE" className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                        <label htmlFor="firstName">Nombre</label>
                        <input type="text" className="form-control" name="firstName" onChange={this.handleChange}/>
                        {submitted && !user.firstName &&
                        <div className="help-block">First Name is required</div>
                        }
                    </div>

                    <div id="APELLIDOS" className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                        <label htmlFor="lastName">Apellidos</label>
                        <input type="text" className="form-control" name="lastName" onChange={this.handleChange}/>
                        {submitted && !user.lastName &&
                        <div className="help-block">Apellidos is required</div>
                        }
                    </div>
                    <div id="TELEFONO" className={'form-group' + (submitted && !user.phone ? ' has-error' : '')}>
                        <label htmlFor="phone">Movil</label>
                        <input type="" className="form-control" name="phone" onChange={this.handleChange}/>
                        {submitted && !user.phone &&
                        <div className="help-block">phone is required</div>
                        }
                    </div>
                    <div id="TELEPHONE" className={'form-group' + (submitted && !user.telephone ? ' has-error' : '')}>
                        <label htmlFor="telephone">Telefono</label>
                        <input type="" className="form-control" name="telephone" onChange={this.handleChange}/>
                        {submitted && !user.telephone &&
                        <div className="help-block">telephone is required</div>
                        }
                    </div>
                    <div id="Email" className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                        <label htmlFor="email">Email</label>
                        <input type="" className="form-control" name="email" onChange={this.handleChange}/>
                        {submitted && !user.email &&
                        <div className="help-block">email is required</div>
                        }
                    </div>
                    <div id="Fecha de nacimiento"
                         className={'form-group' + (submitted && !user.dateofBirth ? ' has-error' : '')}>
                        <label htmlFor="dateofBirth">Fecha de nacimiento</label>
                        <input type="" className="form-control" name="dateofBirth" onChange={this.handleChange}/>
                        {submitted && !user.dateofBirth &&
                        <div className="help-block">dateofBirth is required</div>
                        }
                    </div>
                    <div id="STREET" className={'form-group' + (submitted && !user.street ? ' has-error' : '')}>
                        <label htmlFor="street">Calle</label>
                        <input type="" className="form-control" name="street" onChange={this.handleChange}/>
                        {submitted && !user.street &&
                        <div className="help-block">street is required</div>
                        }
                    </div>
                    <div id="TELEFONO" className={'form-group' + (submitted && !user.cp ? ' has-error' : '')}>
                        <label htmlFor="cp">Telefono</label>
                        <input type="" className="form-control" name="cp" onChange={this.handleChange}/>
                        {submitted && !user.cp &&
                        <div className="help-block">cp is required</div>
                        }
                    </div>
                    <div id="POPULATION" className={'form-group' + (submitted && !user.population ? ' has-error' : '')}>
                        <label htmlFor="population">Poblacion</label>
                        <input type="" className="form-control" name="population" onChange={this.handleChange}/>
                        {submitted && !user.population &&
                        <div className="help-block">population is required</div>
                        }
                    </div>
                    <div id="TELEFONO" className={'form-group' + (submitted && !user.province1 ? ' has-error' : '')}>
                        <label htmlFor="province1">Telefono</label>
                        <input type="" className="form-control" name="province1" onChange={this.handleChange}/>
                        {submitted && !user.province1 &&
                        <div className="help-block">province1 is required</div>
                        }
                    </div>
                    <div id="COUNTRY1" className={'form-group' + (submitted && !user.country1 ? ' has-error' : '')}>
                        <label htmlFor="country1">Ciudad</label>
                        <input type="" className="form-control" name="country1" onChange={this.handleChange}/>
                        {submitted && !user.country1 &&
                        <div className="help-block">country1 is required</div>
                        }
                    </div>
                    <div id="SEX1" className={'form-group' + (submitted && !user.sex1 ? ' has-error' : '')}>
                        <label htmlFor="sex1">Sexo</label>
                        <input type="" className="form-control" name="sex1" onChange={this.handleChange}/>
                        {submitted && !user.sex1 &&
                        <div className="help-block">sex1 is required</div>
                        }
                    </div>
                    <div id="DNI"
                         className={'form-group' + (submitted && !user.documentIdentify ? ' has-error' : '')}>
                        <label htmlFor="documentIdentify">DNI</label>
                        <input type="" className="form-control" name="documentIdentify" onChange={this.handleChange}/>
                        {submitted && !user.documentIdentify &&
                        <div className="help-block">documentIdentify is required</div>
                        }
                    </div>
                    <div id="Photo" className={'form-group' + (submitted && !user.photo ? ' has-error' : '')}>
                        <label htmlFor="photo">Foto</label>
                        <input type="" className="form-control" name="photo" onChange={this.handleChange}/>
                        {submitted && !user.photo &&
                        <div className="help-block">photo is required</div>
                        }
                    </div> */}
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                        {registering &&
                            <img
                                src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <Link to="/login" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };