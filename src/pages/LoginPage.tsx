import TextInput from '../components/TextInput'

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

    {
      /* TODO: Use "headless" mantine inputs */
    }
    <div
      className='flex col wrap'
      style={
        {
          gap: '15px'
        }
      }
    >
      <TextInput
        placeholder='Email'
      />

      <TextInput
        placeholder='Password'
        type='password'
      />
    </div>
  </div>
)

export default Login