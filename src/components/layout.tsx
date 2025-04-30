import Header from "./header/header";
import "../app/globals.css"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <html>
        <body>
          <Header />
          {children}
        </body>
      </html>

    </>
  );
};

export default Layout;
