import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from './components/Button'
import './App.css'

function Modal({ open, message, onClose, onConfirm }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg space-y-4 min-w-[300px]">
        <div className="text-gray-800 text-lg">{message}</div>
        <div className="flex justify-end gap-2">
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onConfirm}>Yes</Button>
        </div>
      </div>
    </div>
  )
}

function App() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const [modal, setModal] = useState({ open: false, action: null, data: null })

  const handleFormSubmit = (data) => {
    setModal({ open: true, action: 'submit', data })
  }

  const handleClear = () => {
    setModal({ open: true, action: 'clear' })
  }

  const handleModalConfirm = () => {
    if (modal.action === 'submit') {
      alert('Form submitted!')
      reset()
    } else if (modal.action === 'clear') {
      reset()
    }
    setModal({ open: false, action: null, data: null })
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <form
        className="w-full max-w-sm p-8 bg-white shadow-xl rounded-2xl space-y-6"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-2">Login</h2>
        <div>
          <label className="block text-gray-700 font-semibold mb-1" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            type="email"
            id="email"
            {...register('email', { required: 'Email is required' })}
            placeholder="Enter your email"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            type="password"
            id="password"
            {...register('password', { required: 'Password is required' })}
            placeholder="Enter your password"
          />
          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
        </div>
        <div className="flex gap-3">
          <Button type="submit">Submit</Button>
          <Button type="button" onClick={handleClear}>Clear</Button>
        </div>
      </form>
      <Modal
        open={modal.open}
        message={
          modal.action === 'submit'
            ? 'Are you sure you want to submit?'
            : 'Are you sure you want to clear the form?'
        }
        onClose={() => setModal({ open: false, action: null, data: null })}
        onConfirm={handleModalConfirm}
      />
    </div>
  )
}

export default App