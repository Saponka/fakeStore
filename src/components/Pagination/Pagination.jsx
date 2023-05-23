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
  //buttons functions
  //Anterior
  const onPreviusPage = ()=>{
    //actualizar mi state de pagina actual
    //si mi pagina actual es igual a 1 
    if (currentPage === 1 ) {
        //button deactivado
        <button disabled></button>
    }else{
        // si no mi state de pagina actual es el resultado de pagina actual menos 1
        setCurrentPage(currentPage -1)
    } 
  }
  //Siguiente
  const onNextPage = ()=>{
    //actualizar mi state de pagina actual
      if (currentPage >= pageNumber.length) {
        <button disabled></button>
      } else { 
          setCurrentPage(currentPage +1)
      }
    }
    //seleccion de pagina
    //le pasamos un parametro n de number
    //cuando la funciones toman un parametro
    // se necesita retorna con un callback
    //le pasamos como parametro en el onCLick ()=> onSpecificPage(numPage) 
    const onSpecificPage = (n)=>{
        setCurrentPage(n)
    }

  return (
    <nav className="pagination is-centered mb-6" role="navigation" aria-label="pagination">
{/* uso de ternarios en las clases */}
  <button className={`pagination-previous ${currentPage === 1 ? 'is-disabled':''}`} onClick={onPreviusPage}>Anterior</button>
  <button className={`pagination-next ${ currentPage >= pageNumber.length ? 'is-disabled':''}`} onClick={onNextPage}>Siguiente</button>
  <ul className="pagination-list">
    {/* de manera dinamica tomamos el numero de pagina de la operacion del for */}
    { pageNumber.map(numPage=>(
        <li key={numPage}>
            {/*en la clase pagination-link,usamos ternarios, si numPage es igual a la currentPage, ? entoces mostrame la clase is-current : si no nada '' */}
        <a className={`pagination-link ${numPage === currentPage ? 'is-current': ''}`} onClick={()=> onSpecificPage(numPage)} >
         {numPage}
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
