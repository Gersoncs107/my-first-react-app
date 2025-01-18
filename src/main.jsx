import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import TodoList from './Todo.jsx'
import AppButton from './Todo.jsx'
import Person from './Todo.jsx'
import Clock from './Clock.jsx'
import FunctionalInput from './ClassBased.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FunctionalInput />
  </StrictMode>,
)
