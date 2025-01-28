import './App.css'

import { Outlet, Link } from 'react-router-dom'

function App() {

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/breeds">Raças</Link>
        </li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default App
