
import ReactDOM from 'react-dom/client'
import './tailwind.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthContextProvider>
     <App />
    </AuthContextProvider>
  </BrowserRouter>
)