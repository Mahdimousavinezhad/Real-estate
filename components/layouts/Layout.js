import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-[700px]">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
