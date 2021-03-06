import "./homepage.css";
import Header from "../components/Header/Header";
import Posts from "../components/Posts/Posts";
import Sidebar from "../components/Sidebar/Sidebar";

function Homepage() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}

export default Homepage;
