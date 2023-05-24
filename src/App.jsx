import 'boxicons';
import './index.css'
import Pagination from './components/Pagination/Pagination'
import ProductList from './components/ProductList/ProductList'
import Header from './components/Header/Header'

function App() {
  

  return (
    <>
      <div className='App'>
       <Header/>
        <ProductList/>
      </div>
      
    </>
  )
}

export default App
