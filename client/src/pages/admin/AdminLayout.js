import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

const AdminLayout = ({ children }) => {
  return (
    <>
      {/* Fixed header at the top */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "60px", zIndex: 1000 }}>
        <AdminHeader />
      </div>

      {/* Sidebar below header, fixed height accounted */}
      <div
        style={{
          display: "flex",
          marginTop: "60px",  // push content below header height
          minHeight: "calc(100vh - 60px)",
        }}
      >
        <div style={{ width: "250px", position: "fixed", top: "60px", left: 0, bottom: 0, overflowY: "auto" }}>
          <AdminSidebar />
        </div>

        <main style={{ marginLeft: "250px", padding: "20px", flexGrow: 1 }}>
          {children}
        </main>
      </div>
    </>
  );
};

export default AdminLayout;
