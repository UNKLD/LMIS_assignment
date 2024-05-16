import Nav from "./Navbar";
import SideBar from "./SideBar";

function Layout({ children }) {
  return (
    <div className="flex min-w-full">
      <SideBar />
      <div className="flex flex-col w-full">
        <Nav />
        {children}
      </div>
    </div>
  );
}

export default Layout;
