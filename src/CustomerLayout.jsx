import { Outlet } from "react-router-dom";
import CustomerHeader from "./CustomerHeader";
import CustomerFooter from "./CustomerFooter";

function CustomerViewLayout() {
  return (
    <div className='body-content'>
      <CustomerHeader />
      <Outlet />
      <CustomerFooter />
    </div>
  );
}

export default CustomerViewLayout;
