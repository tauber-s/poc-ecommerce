import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li><Link href="/">Home</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;