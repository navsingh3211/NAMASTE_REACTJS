const Header = () => {
    return (
      <div className="header">
        <div>
          <img
            className="logo"
            src="https://cdn.logojoy.com/wp-content/uploads/2018/05/01105934/1855-768x591.png"
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
};

export default Header;