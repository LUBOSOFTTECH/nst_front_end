import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import LandingPage from "./LandingPage";
import CustomerLayout from "./CustomerLayout";
import AdminLayout from "./AdminLayout";
import AdminDashboard from "./AdminDashboard";
import AdminCategories from "./AdminCategories";
import AdminVariants from "./AdminVariants";
import AdminProducts from "./AdminProducts";
import AdminShippingDetails from "./AdminShippingDetails";
import AdminSettings from "./AdminSettings";

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
          element: <AdminDashboard />,
          path: "/admin/dashboard",
        },
        {
          element: <AdminCategories />,
          path: "/admin/categories",
        },
        {
          element: <AdminVariants />,
          path: "/admin/variants",
        },
        {
          element: <AdminProducts />,
          path: "/admin/products",
        },
        {
          element: <AdminShippingDetails />,
          path: "/admin/shipping-details",
        },
        {
          element: <AdminSettings />,
          path: "/admin/settings",
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
