import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import dataReducer from "./store/dataSlice"
import detailReducer from "./store/detailSlice"
import urlReducer from "./store/urlSlice"
import App from './App.jsx'
import './index.css'

const rootreducer = {
  data: dataReducer,
  details: detailReducer,
  url: urlReducer
}

const store = configureStore({
  reducer: rootreducer
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
