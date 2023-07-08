import React from "react";
import {Route, Routes as RRDRoutes} from "react-router-dom";

const Layout = React.lazy(() => import("./components/layout/Layout"));


const Routes = () => {
    return (
        <RRDRoutes>
            <Route path='/' element={<Layout/>}>
                {/* <Route index element={<Home/>}/> */}
            </Route>
            {/*<Route path="*" element={<NotFound />} />*/}
            {/*<Route path='signup' element={ isLoggedIn ? <Navigate to='/' /> : <Signup />} />*/}
        </RRDRoutes>
    )
}
export default Routes

