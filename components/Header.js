import Link from 'next/link'; 

export default function Header() {
  return (
    <header id="header">
      <Link href="/" passHref legacyBehavior>
        <a className="logo">
          <strong>SI</strong> UFSM
        </a>
      </Link>
      <ul className="icons">
        <li>
          <a href="#" className="icon brands fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon brands fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
      </ul>
    </header>
  );
}
