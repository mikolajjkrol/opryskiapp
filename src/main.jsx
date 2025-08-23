import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import App from './App.jsx'

import './css/index.css'
import './css/themes.css'
import './css/Navbar.css'
import './css/Calendar.css'
import './css/Add.css'
import './css/Opryski.css'
import './css/Notification.css'

import { store } from './store/index.js'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>,
  </StrictMode>

)
