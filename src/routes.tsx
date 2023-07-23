import React, { useEffect, useState } from "react";
import {Route, Routes as RRDRoutes, Navigate} from "react-router-dom";
import { useAppDispatch } from "./app/hooks";
import { setLogout, setUser } from "./features/auth/authSlice";
import Contact from "./pages/Contact";
import { useGetUserQuery } from "./services/userApi";
import EditProfile from "./pages/EditProfile";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";

const Layout = React.lazy(() => import("./components/layout/Layout"));
const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const Routes = () => {
    const isLogin = useSelector((state: RootState) => state.auth.isLogin)
    const token = localStorage.getItem("tokenDetails");
    const dispatch = useAppDispatch();
    const { isError, isSuccess, data, error } = useGetUserQuery({ refetchOnMountOrArgChange: true });
    console.log(data);
    useEffect(() => {
        console.log("called");
        if (!token) {
            return;
        }
        if (isSuccess) {
            console.log(data);
            dispatch(setUser(data));
        }
        if (isError) {
            dispatch(setLogout());
        }
    }, [isError, isSuccess]);

    console.log(isLogin);

    return (
        <RRDRoutes>
            <Route path='/' element={<Layout />}>
                
                <Route index element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/user/edit-profile" element={isLogin && <EditProfile /> } />
                <Route path="/login" element={ isLogin ? <Navigate to='/' /> : <Login />} />
                <Route path='/signup' element={ isLogin ? <Navigate to='/' /> : <SignUp />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            
        </RRDRoutes>
    )
}
export default Routes;

