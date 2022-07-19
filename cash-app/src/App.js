import  React,{Fragment} from 'react';
import Navbar from './components/Navbar';
import ProveedoresList from './components/ProveedoresList';
import { TablaBasica } from './components/TablaBasica';
// hooks son metodos



function App() {
  
  return (
        <Fragment>
          <Navbar brand="Santiago Page"></Navbar>
          <div className='container'>
            <div className='row'>

                <div className='col col-12'>
                  <h2 style={{textAlign:'center'}}>Proveedores</h2>
                  <ProveedoresList />
                </div>
                                
            </div>
          </div>
        </Fragment>
  );
}

export default App;
