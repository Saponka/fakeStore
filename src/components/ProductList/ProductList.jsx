import React, { useEffect, useState } from 'react'
import Pagination from '../Pagination/Pagination';

const ProductList = () => {

  const [products,setProducts]= useState([]);
  //tottal de productos //cantidad de productos que me develve la API//nuemero entero
  const totalProducts = products.length;

  const [productsPerPage,setProductsPerPage]= useState(6);
  const [currentPage,setCurrentPage]= useState(1);
  //currentPage inicia en 1 * productPerPage en 6
  //lastIndex es 6
  const lastIndex = currentPage * productsPerPage;//=6
  //
  const firstIndex = lastIndex - productsPerPage;//6-6=0 

   const productList = async ()=>{
    const data = await fetch('https://fakestoreapi.com/products');
    const products = await data.json();
    setProducts(products);

    console.log(products);
   }
   useEffect(()=>{
       productList();
   },[]);

  return (
    <>
    <h1 className='title'>Fake Store</h1>
    <div className='container-products'>
      {products.map(product => (
        <div className="card-product" key={product.id}>
            <figure className='container-img'>
                <img src={product.image} alt={product.title}  />
            </figure>
            <div className="info-product">
                <h3>{product.title}</h3>
                <p className='price'>${product.price}</p>
                <button>Añadir al carrito</button>
            </div>
        </div>
      )).slice(firstIndex,lastIndex)
      }
    </div>
    <Pagination  
    productsPerPage={productsPerPage} 
    currentPage={currentPage} 
    setCurrentPage={setCurrentPage}
    totalProducts={totalProducts}
    />
    </>
    
  )
}

export default ProductList
