import { createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/homepage";
import LoginPage from "../pages/login";
const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "/login",
      element: <LoginPage/>,
    },
    
  ]);

export default router; 