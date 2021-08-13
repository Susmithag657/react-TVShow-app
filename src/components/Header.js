import React from 'react';
const Header = () => {
  const st1 = {
    color: 'white'
  };
  return (
    <div>
      <nav class="navbar navbar-light bg-primary">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1" style={st1}>
            TV Shows
          </span>
        </div>
      </nav>
    </div>
  );
};
export default Header;
