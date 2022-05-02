import "./topbar.css";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar--social-icons">
        <i className="topbar--social-icon fa-brands fa-facebook-square"></i>
        <i className="topbar--social-icon fa-brands fa-twitter-square"></i>
        <i className="topbar--social-icon fa-brands fa-linkedin"></i>
        <i className="topbar--social-icon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topbar--links">
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <li>WRITE</li>
          <li>LOGOUT</li>
        </ul>
      </div>
      <div className="topbar--profile-and-search">
        <img
          className="profile-icon"
          src="https://randomuser.me/api/portraits/women/26.jpg"
          alt="profile"
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default Topbar;
