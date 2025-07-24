import { Link } from "react-router-dom"

const Navbar = () => (
  <nav className="bg-blue-600 p-4 flex justify-around gap-6 text-white font-semibold">
    <Link to="/">Login</Link>
    <Link to="/home">Home</Link>
    <Link to="/about">About</Link>
  </nav>
)

export default Navbar