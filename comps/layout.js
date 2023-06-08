import Footer from "./Footer";
import Navbar from "./Navbar";
import TopNavbar from "./TopNavbar";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <TopNavbar /> {/* Add the TopNavbar component */}
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
