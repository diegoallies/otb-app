import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faPlusSquare, faBell, faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav className="nav">
      <Link href="/"><a className="nav__item active"><FontAwesomeIcon icon={faHome} /></a></Link>
      <Link href="/explore"><a className="nav__item"><FontAwesomeIcon icon={faSearch} /></a></Link>
      <Link href="/create"><a className="nav__item"><FontAwesomeIcon icon={faPlusSquare} /></a></Link>
      <Link href="/notifications"><a className="nav__item"><FontAwesomeIcon icon={faBell} /></a></Link>
      <Link href="/profile"><a className="nav__item"><FontAwesomeIcon icon={faUser} /></a></Link>
    </nav>
  );
}

export default Navbar;
