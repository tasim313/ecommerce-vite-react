import { useState } from 'react'

import './App.css'
import Header from './component/Header/header'
import Shop from './component/Shop/shop'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
        <Shop/>
      </div>
      
    </>
  )
}

export default App
