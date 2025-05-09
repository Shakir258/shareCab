import { createRoot } from 'react-dom/client'
import './style/index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './context/UserContextProvider.jsx'

createRoot(document.getElementById('root')).render(
    <UserContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContext>
)
