import React from 'react'

const Pagination = ({productsPerPage,totalProducts,currentPage,setCurrentPage}) => {

  const pageNumber = [];//array vacio
  console.log(currentPage);//1
  console.log(productsPerPage);//6 
  console.log(totalProducts);//20
  console.log(totalProducts/productsPerPage);//3.3333
  console.log(Math.ceil(totalProducts/productsPerPage));//4

  for (let i = 1; i <= Math.ceil(totalProducts/productsPerPage); i++) {
   //pushamos en el array vacio de pageNumber
   // el total de productos {20} dividido productsPerPage{6}
   //4 paginas de 6 productos 
   pageNumber.push(i)
   //4 paginas de 6 productos en cada pagina
    console.log(pageNumber);
    
  }

  return (
    <nav className="pagination is-centered mb-6" role="navigation" aria-label="pagination">
  <a className="pagination-previous">Anterior</a>
  <a className="pagination-next">Siguiente</a>
  <ul className="pagination-list">
    { pageNumber.map(noPage=>(
        <li key={noPage}>
            {/*en la calse pagination-link,usamos ternarios, si noPage es igual a la currentPage, ? entoces mostrame la clase is-current : si no nada '' */}
        <a className={`pagination-link ${noPage === currentPage ? 'is-current': ''}`} >
         {noPage}
        </a>
    </li>
    ))
    }
    
    {/* <li><span className="pagination-ellipsis">&hellip;</span></li> */}
    {/* <li><a className="pagination-link" aria-label="Goto page 45">45</a></li> */}
    {/* <li>
        <a className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a>
    </li> */}
    {/* <li><a className="pagination-link" aria-label="Goto page 47">47</a></li>
    <li><span className="pagination-ellipsis">&hellip;</span></li>
    <li><a className="pagination-link" aria-label="Goto page 86">86</a></li> */}
  </ul>
</nav>
  )
}

export default Pagination
