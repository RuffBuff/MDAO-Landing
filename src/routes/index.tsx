import configs from "configs";
import { createBrowserRouter } from "react-router-dom";
import publicRoutes from "./public.route";
import PublicPages from "pages/public";

const mainRouter = createBrowserRouter([
    {
        path: configs.appConfigs.path.PUBLIC_PREFIX,
        children: publicRoutes,
        element: <PublicPages/>
    }
]);

export default mainRouter;