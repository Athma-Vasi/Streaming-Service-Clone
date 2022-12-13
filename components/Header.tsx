function Header() {
  return (
    <header>
      <div className="flex item-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          alt="logo-name"
          width={100}
          height={100}
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My Favs</li>
        </ul>
      </div>

      <div></div>
    </header>
  );
}

export default Header;
