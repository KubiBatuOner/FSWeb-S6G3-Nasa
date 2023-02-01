import React from "react";
function Header() {
  return (
    <header className="header">
      <img
        className="headerImg"
        src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"
        alt="Nasa Foto"
      />
      <h1 className="headerTitle">NASA Astronomy Photos</h1>
    </header>
  );
}

export default Header;
