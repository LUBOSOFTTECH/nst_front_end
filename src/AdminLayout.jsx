import { Outlet } from "react-router-dom";

function AdminViewLayout() {
  return (
    <div>
      <div>Header</div>
      <Outlet />
      <div>Sidebar</div>
    </div>
  );
}

export default AdminViewLayout;
