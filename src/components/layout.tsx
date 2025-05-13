import Header from "./header/header";
import "../app/globals.css"
import { store } from "../store/redux/store";
import { Provider } from "react-redux";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <html>
        <body>
        <Provider store={store}>
          <Header />
          {children}
          </Provider>
        </body>
      </html>

    </>
  );
};

export default Layout;
