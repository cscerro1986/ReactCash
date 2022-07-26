import React,{useState, useEffect} from "react";
const ProveedoresList =({getProveedores})=>{
    const [cuit, setCuit] = useState("");
    const [razonSocial, setRazonSocial] = useState("");
    const [id, setId]= useState("");
    const [order, setOrder]= useState("1");
    const [orientacion, setOrientacion]= useState("ASC");

    const URL = `http://localhost:3030/proveedores?razonsocial=${razonSocial}&id=${id}&cuit=${cuit}&orderby=${order}&orientacion=${orientacion}`;
    const [proveedor, setProveedor] = useState([]);
    const [currentPage, setCurrentPage] = useState([+0]);
    const [searchID , setSearchId] =useState("");

    const cambiarOrientador=(num)=>{
        console.log(num)
        setOrder(num);
    }

    const cambiarOrientacion=()=>{
        if(orientacion==="ASC")
            setOrientacion("DESC")
        else
        {
            setOrientacion("ASC");
        }
    }
    //ni bien arranca la app se ejecuta el useEffect
    useEffect(()=>{
        const getProveedores =()=>{
            fetch(URL)
            .then(res=>res.json())
            .then(res=>setProveedor(res))
            .then(res=> console.log(URL))            
        }
        getProveedores()
        },[URL])    
    

    const proveedoresFiltrados = () =>{
        if(searchID.length === 0)
        {
            return proveedor.slice(currentPage,currentPage+50);        
        }
        // return proveedor.slice(currentPage,currentPage+100);
        
    }

    const avanzarPagina = ()=>{
        if(currentPage+50<proveedor.length)
            setCurrentPage(+currentPage + 50)
    }   

    const retrocederPagina =()=>{
        if(+currentPage>0)
            setCurrentPage(+currentPage-50)
    }


    return(        
        <div>
            <div>
             <button 
                className="btn btn-primary p-2 m-1"
                onClick={retrocederPagina} 
                value="ASDAS"
                >
                Anterior</button>
             <button 
                className="btn btn-primary p-2 m-1"             
                onClick={avanzarPagina}
             >
                Siguiente</button>      
            </div>
            <table className="table tablaProveedores table-striped">
                    <thead>
                        <tr>
                            <th > <button onClick={e=>{
                                cambiarOrientacion()
                                cambiarOrientador(1)
                            }} className="btn m-2">#</button>
                            </th>
                            <th><button onClick={e=>{
                                cambiarOrientacion()
                                cambiarOrientador(2)
                            }} className="btn m-2">Razon social</button></th>
                            <th><button onClick={e=>{
                                cambiarOrientacion()
                                cambiarOrientador(3)
                            }} className="btn m-2">Descripcion</button></th>
                            <th><button onClick={e=>{
                                cambiarOrientacion()
                                cambiarOrientador(4)
                            }} className="btn m-2">Condicion</button></th>
                            <th><button onClick={e=>{
                                cambiarOrientacion()
                                cambiarOrientador(5)
                            }} className="btn m-2">CUIT</button></th>                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th><input
                                placeholder="BUSCAR ID"  
                                name= "id"  
                                type="text" 
                                className="form-control"                                
                                onChange={e=>setId(e.target.value)}
                                
                                
                                />
                            </th>
                            <th><input 
                                placeholder="BUSCAR RAZON SOCIAL" 
                                name="razonSocial"  
                                type="text" 
                                className="form-control"
                                onChange={e=>setRazonSocial(e.target.value)}
                                />
                                </th>
                            <th><input 
                                placeholder="BUSCAR DESCRIPCION" 
                                name="dscripcion"  
                                type="text" 
                                className="form-control"
                                
                                /></th>
                            <th><input 
                                placeholder="BUSCAR CONDICION" 
                                name="condicion" 
                                type="text" 
                                className="form-control"
                                /></th>
                            <th><input 
                                placeholder="BUSCAR CUIT" 
                                name="cuit"  
                                type="text" 
                                className="form-control"
                                onChange={e=>setCuit(e.target.value)}
                                /></th>
                            
                            
                        </tr>
                        {
                        proveedoresFiltrados().map(element=>                        
                        <tr key={element.id}>
                            <th>{element.id}</th>
                            <th>{element.razonSocial}</th>   
                            <th>{element.descripcion}</th>
                            <th>{element.condicion}</th> 
                            <th>{element.cuit}</th>   
                            <th>
                                <button className="btn btn-primary" id="">Modificar </button>
                            </th>
                        </tr>
                        )
                        }                
                    </tbody>
                </table>
        </div>

            
        
    );
}

export default ProveedoresList;