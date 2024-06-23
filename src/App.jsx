import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import LandingPage from "./LandingPage";
import CustomerLayout from "./CustomerLayout";
import AdminLayout from "./AdminLayout";

function App() {
  const router = createBrowserRouter([
    {
      element: <Navigate to={"/home"} />,
      path: "/",
    },
    {
      element: <CustomerLayout />,
      children: [
        {
          index: true,
          element: <Navigate to={"/home"} />,
          path: "/",
        },
        {
          element: <LandingPage />,
          path: "/home",
        },
        // {
        //   path: "/home/:productid",
        //   element: <ProductDetails />,
        // },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          element: <div>Dashboard</div>,
          path: "/admin/dashboard",
        },
        {
          element: <div>Categories</div>,
          path: "/admin/categories",
        },
        {
          element: <div>Varients</div>,
          path: "/admin/varients",
        },
        {
          element: <div>product</div>,
          path: "/admin/product",
        },
        {
          element: <div>shipping</div>,
          path: "/admin/shipping",
        },
        {
          element: <div>settings</div>,
          path: "/admin/settings",
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
