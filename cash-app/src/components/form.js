import React from "react";

const Form =()=>{
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="id" className="form-label" >Id</label>
                <input type="number" className="form-control" id="id"/>
            </div>
            <div className="mb-3">
                <label htmlFor="razonSocial" className="form-label" >Razon Social</label>
                <input type="text" className="form-control" id="razonSocial"/>
            </div>
            <div className="mb-3">
                <label htmlFor="descripcion" className="form-label" >Descripcion</label>
                <input type="text" className="form-control" id="descripcion"/>
            </div>
            <div className="mb-3">
                <label htmlFor="condicion" className="form-label" >Condicion</label>
                <input type="text" className="form-control" id="condicion"/>
            </div>
            <div className="mb-3">
                <label htmlFor="cuit" className="form-label" >Cuit</label>
                <input type="text" className="form-control" id="cuit"/>
            </div>
            <button className="btn btn-primary" type="submit">Agregar</button>
        </form>
    );
}


export default Form;