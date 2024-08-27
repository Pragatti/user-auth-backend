import { useForm } from 'react-hook-form'
import { loginUser } from '../hooks/useAuth'

const LoginScreen = () => {
  const { register, handleSubmit } = useForm()

  const submitForm = (data) => {
    console.log(data)
  loginUser(data)
  }

 
  return (
    <form onSubmit={handleSubmit(submitForm)} className="max-w-sm mx-auto bg-white p-6 shadow-md rounded-lg">
    <div className="form-group mb-4">
      <label htmlFor="email" className="block text-black-500 font-bold mb-2">Email</label>
      <input
        type="email"
        className="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...register('email')}
        required
      />
    </div>
    <div className="form-group mb-6">
      <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
      <input
        type="password"
        className="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...register('password')}
        required
      />
    </div>
    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
      Login
    </button>
  </form>
  
  )
}
export default LoginScreen