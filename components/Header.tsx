import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { FaDharmachakra } from 'react-icons/fa';
import { BiHomeSmile } from 'react-icons/bi';
import { useState, useEffect } from 'react';

function Header() {
  return (
    <header>
      <div className="flex item-center space-x-2 md:space-x-10">
        {/* <img
          src="https://rb.gy/ulxxee"
          alt="logo-name"
          width={100}
          height={100}
        /> */}
        <FaDharmachakra width={100} height={100} />
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
          <BiHomeSmile className="cursor-pointer rounded h-6 w-6" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
