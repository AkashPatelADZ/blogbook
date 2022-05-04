import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="header--title">
        <div className="header--title__sm">React &amp; Node</div>
        <div className="header--title__lg">Blog</div>
      </div>

      <img className="header--img" src="/images/header-bg.jpg" alt="header" />
    </div>
  );
}

export default Header;
