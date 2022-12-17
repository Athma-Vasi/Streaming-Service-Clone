import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { SiNetflix } from 'react-icons/si';
import { BiHomeSmile } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { logOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex item-center space-x-2 md:space-x-10">
        <SiNetflix width={100} height={100} color="red" />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My Favs</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <MagnifyingGlassIcon className="hidden sm:inline h-6 w-6" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/account">
          <BiHomeSmile
            className="cursor-pointer rounded h-6 w-6"
            onClick={logOut}
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
