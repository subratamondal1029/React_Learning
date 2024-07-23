import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";
import Home from "./components/Home";
import Error from "./components/Error";
import App from "./App";
import "./style.css";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/:countryDetail",
            element: <CountryDetail />
        },
        {
            path: "/error",
            element: <Error />
        },
      ],
    }
    
  ]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
