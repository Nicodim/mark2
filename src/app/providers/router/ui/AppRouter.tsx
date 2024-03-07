import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";
import {PageWrapper} from "app/styles/styles";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({path, element}) => (
                    <Route key={path} path={path} element={(<PageWrapper>{element}</PageWrapper>)}/>
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;