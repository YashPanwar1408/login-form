import { useLocation } from "react-router-dom"

const Home = () => {
  const location = useLocation()
  const username = location.state?.username || "User"
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-2xl font-bold">Hello {username}!</h1>
      <p className="mt-2 text-gray-600">Welcome to the Home page.</p>
    </div>
  )
}

export default Home