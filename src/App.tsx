import React, { useEffect } from 'react';
import logo from './stackline_logo.svg';
import { requestProducts } from './data/action';
import { useAppDispatch, useAppSelector } from './data/hooks';
import LineChart from './component/LineChart';
import SalesTable from './component/SalesTable';

const App = () => {
  const productsData = useAppSelector((state) => state.productsData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(requestProducts());
  },[dispatch])

  return (
    <>
    <nav className="navbar navbar-light bg-primary sticky-top p-2 px-4">
      <span className="navbar-brand">
        <img src={logo} alt="logo" width="100" height="24" />
      </span>
    </nav>
    <div className="container-fluid bg-light">
      {!productsData[0] ?
        <div className='row justify-content-center align-items-center vh-100'>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        :
        <div className='row m-0'>
          <div className='col-md-2 col-12 my-5'>
            <div className='bg-white shadow-sm h-100'>
              <div className='d-flex flex-column justify-content-center text-center p-3'>
                <div>
                  <img src={productsData[0].image} alt="product-pic" width={150} height={150}/>
                </div>
                <div className='fw-bold'>{productsData[0].title}</div>
                <div className='product-subtitle px-4'>{productsData[0].subtitle}</div>
              </div>
              <hr/>
              <div className='d-flex flex-wrap px-2'>{productsData[0].tags.map((tag,i) => <div key={i} className='px-3 m-1 border rounded product-tag'>{tag}</div>)}</div>
              <hr/>
            </div>
          </div>
          <div className='col-md-10 col-12 my-5 py-0'> 
            <div className='bg-white shadow-sm mb-5 pb-5'>
              <div className='px-4 py-3 fs-4'>Retail Sales</div>
              <LineChart product={productsData[0]} />

            </div>
            <div className='bg-white shadow-sm'>
              <SalesTable product={productsData[0]} />
            </div>
          </div>
        </div>
      } 
    </div>
    </>
  );
}

export default App;
