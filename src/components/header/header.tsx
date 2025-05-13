import Link from "next/link";
import { useSelector } from "react-redux";

const Header = () => {
  const elements = useSelector((state) => state.reducer.total);
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li>Cart <span className="cart-number">{elements}</span></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;