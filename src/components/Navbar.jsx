import { Link, useNavigate, useLocation } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    navigate("/", { replace: true })
  }

  if (location.pathname === "/") return null

  return (
    <nav className="bg-blue-600 p-4 flex gap-6 text-white font-semibold items-center">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/contact">Contact</Link>
      {isLoggedIn && (
        <button onClick={handleLogout} className="ml-auto bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition">Logout</button>
      )}
    </nav>
  )
}

export default Navbar