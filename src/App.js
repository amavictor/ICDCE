import { Route, Routes } from 'react-router-dom';
import {MainLayout} from "./Layout/MainLayout";
import {Home} from "./routes/Homes/Home"



const routes = [
    {
        path: "/",
        component: <Home/>
    }
]

function App() {

    return (
        <Routes>
            {
                routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <MainLayout>
                                {route.component}
                            </MainLayout>
                        }
                    />
                ))
            }
        </Routes>
    );
}

export default App;
