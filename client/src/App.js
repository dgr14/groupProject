import React from 'react';
import { Route, Switch, Link, Redirect } from "react-router-dom";
import MainView from './MainView';

import Auth from "./auth/Auth";
import { withContext } from "./AppContext"
import ProtectedRoute from "./auth/ProtectedRoute";
// import ExpenseList from './components/ExpenseList';

function App(props) {
    return (
        <div>
   
                <Switch>
                    {/* <Route className={Styles.viewDiv} View/> */}
                    <Route exact path={"/"} render={() => !props.token ? <Auth /> : <Redirect to="/expenses/entry"/>} />
                    {/* <Route path="/signup" component={Signup}/> */}
                    {/* <Route path="/login" component={Login}/> */}
                    <Route  path="/expenses" render={rprops => props.token?<MainView /> : <Redirect to = "/"/>} />
                    {/* <ProtectedRoute path="/expenses" component={ExpenseList}/> */}
                </Switch>
                {/* <MainView /> */}
        </div>
    )
}

export default withContext(App);

{/* 

`<Route exact path={"/"} render={() => !props.token ? <Login page /> : <Redirect />} />`
`<Route exact path={"/"} render={() => !props.token ? <Login page /> : <View />} />`
                    

                <Switch>
                    <Signup />
                    <Login />
                    <ExpenseList />
                    <Route exact path="/" render={() => !token ? <Login page /> : <Redirect to="/expenses"/>}/>
                </Switch>

*/}