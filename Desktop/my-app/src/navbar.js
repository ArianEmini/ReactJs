import { Link } from "react-router-dom"; //Rritja e shpejtesis se qasjes pra permes Link dhe to 
const Navbar = () => {
    return (  
      <div className="navbar">
          <h2 className="MySimple">My Simple Blog side</h2>
          <div className="links">
           <Link to="/" style={{
               backgroundColor:"white",
               borderRadius:"4px"
           }}>Home</Link>
           <Link to="/media">Media</Link>
           <Link to="/about">About</Link>
           <Link to="/contact">Contact</Link>
         </div>
      </div>
      

    );
}
 
export default Navbar;