import { useStore } from "@/store/zustand/store";
import Link from "next/link";
import { useSelector } from "react-redux";

const Header = () => {
  const reduxCart = useSelector((state) => state.reducer.total);
  const zustandCart = useStore((state) => state.total);
  const jotaiCart = 0;
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li>Redux <span className="cart-number">{reduxCart}</span></li>
          <li>Zustand <span className="cart-number">{zustandCart}</span></li>
          <li>Jotai <span className="cart-number">{jotaiCart}</span></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;