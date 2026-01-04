import { Link } from "react-router";

const Header = ()=>{
  return (
    <div>
      <h3><Link to={`/`}>Ajax-Router-Mission</Link></h3>
      <p><Link to={`/`}>Home</Link></p>
      <p><Link to={`/posts`}>Posts</Link></p>
    </div>
  )
}
export default Header;