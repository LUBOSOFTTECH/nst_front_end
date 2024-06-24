import { BiLogOut } from "react-icons/bi";
import { BsBoxes } from "react-icons/bs";
import { FaRegGem } from "react-icons/fa";
import { IoHome, IoMenuOutline, IoSettingsOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineDashboard } from "react-icons/md";
import { VscTypeHierarchy } from "react-icons/vsc";
import { Link, Outlet } from "react-router-dom";

function AdminViewLayout() {
  return (
    <div className='  w-[100%] '>
      <div className='flex h-16 shadow'>
        <div className='flex flex-col justify-center ml-5 '>
          <IoMenuOutline size={26} />
        </div>
        <h1 className='flex flex-col justify-center ml-10 text-2xl'>
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
              <Link className='flex gap-2 p-3' to={"/admin/dashboard"}>
                <MdOutlineDashboard size={23} />
                Dashboard
              </Link>
            </li>
            <li className='border border-b-0 border-l-0 border-r-0 '>
              <Link className='flex gap-2 p-3 ' to={"/admin/categories"}>
                <BsBoxes size={23} />
                Catagories
              </Link>
            </li>
            <li className='border border-b-0 border-l-0 border-r-0 '>
              <Link className='flex gap-2 p-3' to={"/admin/variants"}>
                <VscTypeHierarchy size={23} />
                Variants
              </Link>
            </li>
            <li className='border border-b-0 border-l-0 border-r-0 '>
              <Link className='flex gap-2 p-3' to={"/admin/products"}>
                <FaRegGem size={23} />
                Products
              </Link>
            </li>
            <li className='border border-l-0 border-r-0 '>
              <Link className='flex gap-2 p-3' to={"/admin/shipping-details"}>
                <LiaShippingFastSolid size={23} />
                Shipping Details
              </Link>
            </li>
          </ul>
          <ul className='mb-5 font-medium'>
            <li className='border border-b-0 border-l-0 border-r-0 '>
              <Link className='flex gap-2 p-3' to={"/admin/settings"}>
                <IoSettingsOutline size={23} />
                Settings
              </Link>
            </li>
            <li className='border border-l-0 border-r-0'>
              <button className='p-3 flex gap-2 pr-[100%] cursor-pointer'>
                <BiLogOut size={23} />
                Logout
              </button>
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
