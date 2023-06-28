import {Home} from "./routes/Home/Home";
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./components/layouts/MainLayout";


function App() {
    const routes = [
        {
            path: "/",
            component:<Home/>
        }
    ]
    return (
        <Routes>
            {routes.map((routeers,index) =>
                <Route key={index}  path={routeers.path} element={<MainLayout>{routeers.component}</MainLayout>} />
            )}
        </Routes>
    );
}

export default App;
