import { useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {

  const state =useSelector((state)=>state)

  return (
    <>
      <nav>
        
        <h1>count:{state.count}</h1>

        <ul>
          <li>
            <Link to="/"style={{color: "blue"}}>Home</Link>
          </li>
          <br/>
          
          <li>
            <Link to="/blogs"style={{color: "green"}}>Blogs</Link>
          </li>
          <br/>
          <li>
            <Link to="/contact"style={{color: "red"}}>Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;