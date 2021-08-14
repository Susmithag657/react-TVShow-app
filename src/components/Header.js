import React from 'react';
const Header = () => {
  const st1 = {
    color: 'white'
  };
  return (
    <div>
      <nav className="navbar navbar-light bg-primary mb-5 p-3">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1" style={st1}>
            TV Shows
          </span>
        </div>
      </nav>
    </div>
  );
};
export default Header;
