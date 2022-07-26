import React,{useEffect,useState} from "react";

const ListaComprobanteAfip= ()=>{
    let URL = "http://localhost:3030/afip?razonsocial=baliar&total=10";

    const [comprobanteAfip,setComprobanteAfip]=useState([]);
    useEffect(()=>{
        const getComprobantes =()=>{
            fetch(URL)
            .then(result=>result.json())
            .then(result=>setComprobanteAfip(result))
        }
        getComprobantes();
    },[])

    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <td>Emision</td>
                        <td>Tipo</td>
                        <td>Punto de Venta</td>
                        <td>Comprobante</td>
                        <td>Denominacion social</td>
                        <td>Cuit</td>
                        <td>Neto gravado</td>
                        <td>No gravado</td>
                        <td>Exento</td>
                        <td>IVA</td>
                        <td>Total</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        comprobanteAfip.map((el)=>{
                            <tr>
                                <td>{el.tipo}</td>
                                <td>{el.fechaEmision}</td>
                                <td>{el.fechaEmision}</td>
                                <td>{el.fechaEmision}</td>
                                <td>{el.fechaEmision}</td>
                                <td>{el.fechaEmision}</td>
                                <td>{el.fechaEmision}</td>
                                <td>{el.fechaEmision}</td>
                                <td>{el.fechaEmision}</td>
                                <td>{el.fechaEmision}</td>                                
                                <td>{el.fechaEmision}</td>
                            </tr>

                        })
                    }
                </tbody>
            </table>
        </div>
    );
}


export default ListaComprobanteAfip;