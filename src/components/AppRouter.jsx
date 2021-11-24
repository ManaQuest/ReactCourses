import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Devises from "../pages/Devices";
import login from "../pages/Login";
import Posts from "../pages/Posts";
import Users from "../pages/Users";
import { useState,useContext } from "react";
import { AuthContext } from "../context/context";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Learn_more from "../pages/Learn_more";
const AppRouter=()=>{
    const {isAuth,isLoading}= useContext(AuthContext);

    return(
        isAuth?
        <Switch>
            {/*<Route path="/users" component={Users}/>
            <Route path="/devices" component={Devises}/>
            <Route path="/posts" component={Posts}/>*/}
            <Route path="/profile" component={Profile}/>
            <Route path="/learn_more" component={Learn_more}/>
            <Redirect to="/profile"/>
        </Switch>
        :
        <Switch>
        <Route path="/login" component={Login}/>
        <Redirect to="/login"/>
        </Switch>
    )
        
}
export default AppRouter