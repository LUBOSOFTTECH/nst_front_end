import { IoHome } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";

function AdminViewLayout() {
  return (
    <div className='  w-[100%] '>
      <div className='flex h-16 shadow'>
        <h1 className='flex flex-col justify-center ml-5 text-2xl'>
          Non Stop Traders
        </h1>
        <div className='flex flex-col justify-center ml-auto mr-5 '>
          <Link to={"/home"}>
            <IoHome size={26} className='cursor-pointer' />
          </Link>
        </div>
      </div>
      <div className='flex h-[calc(100vh-4rem)]'>
        <div className='flex flex-col justify-between shadow w-60'>
          <ul className='mt-5 font-medium '>
            <li className='border border-b-0 border-l-0 border-r-0 '>
              <Link className='p-3' to={"/admin/dashboard"}>
                Dashboard
              </Link>
            </li>
            <li className='border border-b-0 border-l-0 border-r-0 '>
              <Link className='p-3' to={"/admin/categories"}>
                Catagories
              </Link>
            </li>
            <li className='border border-b-0 border-l-0 border-r-0 '>
              <Link className='p-3' to={"/admin/variants"}>
                Variants
              </Link>
            </li>
            <li className='border border-b-0 border-l-0 border-r-0 '>
              <Link className='p-3' to={"/admin/products"}>
                Products
              </Link>
            </li>
            <li className='border border-l-0 border-r-0 '>
              <Link className='p-3' to={"/admin/shipping-details"}>
                Shipping Details
              </Link>
            </li>
          </ul>
          <ul className='mb-5 font-medium'>
            <li className='border border-b-0 border-l-0 border-r-0 '>
              <Link className='p-3' to={"/admin/settings"}>
                Settings
              </Link>
            </li>
            <li className='border border-l-0 border-r-0'>
              <button className='p-3 pr-[100%] cursor-pointer'>Logout</button>
            </li>
          </ul>
        </div>
        <main className='p-8 overflow-scroll grow'>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminViewLayout;
