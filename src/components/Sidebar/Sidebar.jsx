import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar--item sidebar--about-me">
        <h3 className="sidebar--item__title">ABOUT ME</h3>
        <img src="/images/me.jpg" alt="me" className="sidebar--me__image" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In nemo
          obcaecati harum error cupiditate laudantium praesentium facilis
          assumenda unde, non alias. Quia soluta nulla fugit, voluptatum quam
          nostrum nisi tempore totam rerum incidunt labore eaque.
        </p>
      </div>
      <div className="sidebar--item">
        <h3 className="sidebar--item__title">CATEGORIES</h3>
        <ul className="sidebar--categories-list">
          <li>Life</li>
          <li>Music</li>
          <li>Style</li>
          <li>Sport</li>
          <li>Tech</li>
          <li>Cinema</li>
        </ul>
      </div>
      <div className="sidebar--item">
        <h3 className="sidebar--item__title">FOLLOW US</h3>
        <div className="sidebar--social-icons">
          <i className="sidebar--social-icon fa-brands fa-facebook-square"></i>
          <i className="sidebar--social-icon fa-brands fa-twitter-square"></i>
          <i className="sidebar--social-icon fa-brands fa-linkedin"></i>
          <i className="sidebar--social-icon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
