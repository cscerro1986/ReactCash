import React,{useState, useEffect} from "react";

const ProveedoresList =({getProveedores})=>{
    const URL = "http://localhost:3030/proveedores?";
    const [endpoint, setEndpoint] = useState("");
    const [proveedor, setProveedor] = useState([]);
    const [currentPage, setCurrentPage] = useState([+0]);
    const [searchID , setSearchId] =useState("");

    //ni bien arranca la app se ejecuta el useEffect
    useEffect(()=>{
        const getProveedores =()=>{
            fetch(URL + endpoint)
            .then(console.log("Imprimiendo: "+URL+endpoint))
            .then(res=>res.json())
            .then(res=>setProveedor(res))            
        }
        getProveedores()
        },[endpoint])
    
        
    const proveedoresFiltrados = () =>{
        console.log(`El Search es: ${searchID.length}`)
        console.log(searchID.length === 0)
        if(searchID.length === 0)
            return proveedor.slice(currentPage,currentPage+100);
        
        const filtrada = proveedor.map((p)=>{
            console.log(typeof p);
        })
        console.log(filtrada);
        return proveedor.slice(currentPage,currentPage+100);
        
    }

    const avanzarPagina = ()=>{
        console.log(proveedor.length);
        console.log(currentPage);
        if(currentPage+100<proveedor.length)
            setCurrentPage(+currentPage + 100)
    }

    const retrocederPagina =()=>{
        if(+currentPage>0)
            setCurrentPage(+currentPage-100)
    }

    const OnSearchChange =(event)=>{
        setCurrentPage(0);
        console.log(event.target.value);
        setSearchId(event.target.value);
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
            <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Razon Social</th>
                            <th>Descripcion</th>
                            <th>Condicion</th>
                            <th>Cuit</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th><input
                                placeholder="BUSCAR ID"  
                                name= "id"  
                                type="text" 
                                className="form-control"
                                value={searchID}
                                onChange={OnSearchChange}
                                
                                />
                            </th>
                            <th><input 
                                placeholder="BUSCAR RAZON SOCIAL" 
                                name="razonSocial"  
                                type="text" 
                                className="form-control"
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
                                /></th>
                        </tr>
                        {proveedoresFiltrados().map(element=>
                        <tr key={element.id}>
                            <th>{element.id}</th>
                            <th>{element.razonSocial}</th>
                            <th>{element.descripcion}</th>
                            <th>{element.condicion}</th>
                            <th>{element.cuit}</th>
                        </tr>
                        )}                
                    </tbody>
                </table>
        </div>

            
        
    );
}

export default ProveedoresList;