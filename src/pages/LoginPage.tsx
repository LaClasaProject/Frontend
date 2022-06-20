import TextInput from '../components/TextInput'
import {
  Lock,
  Mail
} from 'tabler-icons-react'

import Button from '../components/Button'

const Login = () => (
  <div
    className='main-container text-centered flex col wrap centered'
    style={
      {
        gap: '20px'
      }
    }
  >
    <div className='header'>
      Login
    </div>

    <div className='sub-header'>
      Login with your email & password combination to continue.
    </div>


    <div
      className='flex col wrap centered'
      style={
        {
          gap: '15px'
        }
      }
    >

      <div>
        <TextInput
          placeholder='Email'
          icon={
            <Mail color='white' />
          }
        />
      </div>

      <div>
        <TextInput
          error='Invalid password.'
          placeholder='Password'
          type='password'
          icon={
            <Lock color='white' />
          }
        />
      </div>

      <div>
        <Button
          color='cyan'
          fullWidth
        >
          Login
        </Button>
      </div>
    </div>
  </div>
)

export default Login