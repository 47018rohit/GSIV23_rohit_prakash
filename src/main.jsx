import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import dataReducer from "./store/dataStore"
import App from './App.jsx'
import './index.css'

const store = configureStore({
  reducer: {
    data: dataReducer,
  }
})

export const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>

  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper/>
  </React.StrictMode>,
)
