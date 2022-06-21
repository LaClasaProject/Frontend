import {
  Routes,
  Route
} from 'react-router-dom'

// styles
import './css/index.sass'

// pages
import LoginPage from './pages/LoginPage'

const App = () => {
  return (
    <Routes>
      <Route
        path='/login'
        element={<LoginPage />}
      />
      
      { /* default route for 404 TODO: Move to different file */ }
      <Route
        path='*'
        element={
          (
            <div>
              <h1>404 Not found</h1>
            </div>
          )
        }
      />
    </Routes>
  )
}

export default App