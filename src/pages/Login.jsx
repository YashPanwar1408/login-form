import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()

  const onSubmit = (data) => {
    // Navigate to Home and pass username as state
    navigate("/home", { state: { username: data.username } })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <form
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-xl font-bold text-center mb-4">Login</h2>
        <div>
          <label className="block mb-1">Username</label>
          <input
            className="w-full px-3 py-2 border rounded"
            {...register("username", { required: "Username is required" })}
            placeholder="Enter username"
          />
          {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}
        </div>
        <div>
          <label className="block mb-1">Password</label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="password"
            {...register("password", { required: "Password is required" })}
            placeholder="Enter password"
          />
          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login