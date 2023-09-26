import { createBrowserRouter } from "react-router-dom";
import Engine from "../Engine";

const router = createBrowserRouter([
    {path: '/', element: <Engine/>, children: [
        {path: '/', element: <Engine/>}
    ]}
]);

export default router;