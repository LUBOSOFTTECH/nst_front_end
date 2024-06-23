import { IoHome } from "react-icons/io5";
import { Outlet } from "react-router-dom";

function AdminViewLayout() {
  return (
    <div className='  w-[100%] '>
      <div className='flex h-16 shadow'>
        <h1 className='flex flex-col justify-center ml-5 text-2xl'>
          Non Stop Traders
        </h1>
        <div className='flex flex-col justify-center ml-auto mr-5'>
          <IoHome size={26} />
        </div>
      </div>
      <div className='flex h-[calc(100vh-4rem)]'>
        <div className='flex flex-col justify-between shadow w-60'>
          <ul className='mt-5 font-medium '>
            <li className='p-3 border border-b-0 border-l-0 border-r-0 '>
              Dashboard
            </li>
            <li className='p-3 border border-b-0 border-l-0 border-r-0 '>
              Catagories
            </li>
            <li className='p-3 border border-b-0 border-l-0 border-r-0 '>
              Variants
            </li>
            <li className='p-3 border border-b-0 border-l-0 border-r-0 '>
              Products
            </li>
            <li className='p-3 border border-l-0 border-r-0 '>
              Shipping Details
            </li>
          </ul>
          <ul className='mb-5'>
            <li className='p-3 border border-b-0 border-l-0 border-r-0'>
              Settings
            </li>
            <li className='p-3 border border-l-0 border-r-0 '>Logout</li>
          </ul>
        </div>
        <main className='p-8'>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminViewLayout;
