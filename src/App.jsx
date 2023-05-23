import { useState } from 'react'

import './index.css'
import Pagination from './components/Pagination/Pagination'
import ProductList from './components/ProductList/ProductList'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <h1 className='title'>Fake Store</h1>
       
        <ProductList/>
      </div>
      
    </>
  )
}

export default App
