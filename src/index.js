import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'

import ToDo from './pages/ToDoApp'
import CoinTracker from './pages/CoinTracker'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/*<Lab />*/}
    {/*<ToDo />*/}
    <CoinTracker />
  </React.StrictMode>,
)
