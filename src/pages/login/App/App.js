import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../../../components/login/_helpers/index';
import { alertActions } from '../../../components/login/_actions/index';
import { PrivateRoute } from '../../../components/login/_components/index';
import { HomePage } from '../../HomePage/index';
import { LoginPage } from '../LoginPage/index';
import { RegisterPage } from '../RegisterPage/index';
import AboutV from '../../About/About';
/**
 * # APP
 * 
 * Seccion de login/register de la aplicación.
 * 
 * @author NAR
 * @version 1.0.0
 * @since 18.2
 */
class App extends React.Component {

    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;

        return (
            <div>
                {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
                {/* TODO : Cambiar a un routes.tsx */}
                <Router history={history}>
                    <Switch>
                        {/* No se si esta llevando correctamente */}
                        <PrivateRoute exact path="/" component={HomePage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <Route path="/about" component={AboutV} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };