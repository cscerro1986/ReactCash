import  React,{Fragment, useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import ProveedoresList from './components/ProveedoresList';
import Form from './components/form';

// hooks son metodos



function App() {

  const[proveedor, setProveedor] = useState([]);
  
  //ni bien arranca la app se ejecuta el useEffect
  useEffect(()=>{
    const getProveedores =()=>{
      fetch("http://localhost:3030/proveedores")
      .then(res=>res.json())
      .then(res=>setProveedor(res))
    }
    getProveedores()
  },[])


  return (
        <Fragment>
          <Navbar brand="Santiago Page"></Navbar>
          <div className='container'>
            <div className='row'>

                <div className='col col-7'>
                  <h2 style={{textAlign:'center'}}>Proveedores</h2>
                  <ProveedoresList proveedor={proveedor}/>
                </div>
                <div className='col col-5'>
                <h2 style={{textAlign:'center'}}>Form</h2>
                <Form style={{textAlign:'center'}}/>
                </div>
            </div>
          </div>
        </Fragment>
  );
}

export default App;
