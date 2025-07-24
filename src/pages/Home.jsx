import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Home = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const username = location.state?.username

  // Redirect to login if username is not present (conditional routing)
  useEffect(() => {
    if (!username) {
      navigate("/", { replace: true })
    }
  }, [username, navigate])

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-2xl font-bold">Hello {username}!</h1>
      <p className="mt-2 text-gray-600">Welcome to the Home page.</p>
    </div>
  )
}

export default Home