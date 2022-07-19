import React from "react";

const Form =({proveedorForm, setProveedorForm})=>{

    // const handleChange = e=>{
    //     setProveedorForm({
    //         ...proveedorForm,
    //         [e.target.name]: e.targe.value
             
    //     })
    // };

    // const handleSubmit =(e)=>{
        //validacion de los datos.
        // if(proveedorForm.titulo===''||proveedorForm.descripcion===''||proveedorForm.condicion==''||proveedorForm.razonsocial==='')
        //     alert("todos los campos son obligatorios");
        
            //consulta
            // const requestInit ={
            //     method:'post',
            //     headears:{'Content-type':'application/json'},
            //     body: JSON.stringify(proveedorForm)
            // }
            // fetch("http://localhost:3030/proveedores", requestInit)
            // .then(res=>res.json())
            // .then(res=>setProveedor(res))

    // }
    
    // let {razonsocial, descripcion, condicion, cuit} = proveedorForm;

    // return (
    //     <form >
    //         <div className="mb-2">
    //             <label htmlFor="id" className="form-label" >Id</label>
    //             <input name="id" onChange={handleChange} type="number" className="form-control" id="id"/>
    //         </div>
    //         <div className="mb-2">
    //             <label htmlFor="razonSocial" className="form-label" >Razon Social</label>
    //             <input name="razonSocial"  onChange={handleChange} type="text" className="form-control" id="razonSocial"/>
    //         </div>
    //         <div className="mb-2">
    //             <label htmlFor="descripcion" className="form-label" >Descripcion</label>
    //             <input name="descripcion"  onChange={handleChange} type="text" className="form-control" id="descripcion"/>
    //         </div>
    //         <div className="mb-2">
    //             <label htmlFor="condicion" className="form-label" >Condicion</label>
    //             <input name="condicion"  onChange={handleChange} type="text" className="form-control" id="condicion"/>
    //         </div>
    //         <div className="mb-2">
    //             <label htmlFor="cuit" className="form-label" >Cuit</label>
    //             <input name="cuit" onChange={handleChange} type="text" className="form-control" id="cuit"/>
    //         </div>
    //         <button  className="btn btn-primary" type="submit">Agregar</button>
    //     </form>
    // );
}


export default Form;