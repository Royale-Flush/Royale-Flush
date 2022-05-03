import React, { useState } from 'react'
import useAuth from '../hooks/useAuth'
import { loginUser } from '../api/index'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { setUser, isLoggedIn, setIsLoggedIn } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  return (
    <div>
      <h2>Hello</h2>
      <div>
        <form
          onSubmit={async (e) => {
            e.preventDefault()
            try {
              const response = await loginUser(username, password)
              setIsLoggedIn(true)
              navigate('/')
            } catch (error) {
              console.error('Username and password does not exist.', error)
            }
          }}
        >
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value)
            }}
          />

          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <button type="submit">Log in</button>
        </form>
      </div>

      <div
        style={{
          display: isLoggedIn ? 'block' : 'none',
        }}
      >
        {/* <h3>WELCOME BACK {`${username}`}!</h3> */}
      </div>
    </div>
  )
}

export default Login
