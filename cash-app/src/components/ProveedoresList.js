import React from "react";

const ProveedoresList =({proveedor})=>{
    return(
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

                {proveedor.map(element=>
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
    );
}

export default ProveedoresList;