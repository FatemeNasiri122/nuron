import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {Route, Routes as RRDRoutes, Navigate} from "react-router-dom";
import { setLogout, setTokenDuration } from "./features/auth/authSlice";
import { useAppDispatch } from "./app/hooks";

const Layout = React.lazy(() => import("./components/layout/Layout"));
const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const NotFound = React.lazy(() => import("./pages/NotFound"));


const Routes = () => {
    // const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const tokenDuration :any = localStorage.getItem("tokenDuration");
    const token = localStorage.getItem("tokenDetails");
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        if (!token) {
            debugger
            return;
        }
        dispatch(setTokenDuration());
        console.log(tokenDuration);
        if (+tokenDuration < 0) {
            debugger
            dispatch(setLogout());
        } else {
            setIsLoggedIn(true);
        }

    }, [tokenDuration]);

    return (
        <RRDRoutes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home />}/>
                <Route path="/login" element={ isLoggedIn ? <Navigate to='/' /> : <Login />} />
                <Route path='/signup' element={ isLoggedIn ? <Navigate to='/' /> : <SignUp />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            
        </RRDRoutes>
    )
}
export default Routes;

