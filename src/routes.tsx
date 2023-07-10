import React from "react";
import {Route, Routes as RRDRoutes} from "react-router-dom";

const Layout = React.lazy(() => import("./components/layout/Layout"));
const Login = React.lazy(() => import("./pages/Login"));
const SignUp = React.lazy(() => import("./pages/SignUp"));


const Routes = () => {
    return (
        <RRDRoutes>
            <Route path='/' element={<Layout/>}>
                {/* <Route index element={<Home/>}/> */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Route>
            {/*<Route path="*" element={<NotFound />} />*/}
            
            {/*<Route path='signup' element={ isLoggedIn ? <Navigate to='/' /> : <Signup />} />*/}
        </RRDRoutes>
    )
}
export default Routes

