import React, { useMemo,useState , useEffect} from "react";
import {useTable} from 'react-table';
import  {COLUMNS} from './columns';
import dato from './datos';

export const TablaBasica = ()=>{
    
    // const URL = "http://localhost:3030/proveedores?";
    // const [proveedor, setProveedor] = useState([]);
    
    // useEffect(()=>{
    //     const getProveedores =()=>{
    //         fetch(URL)
    //         .then(res=>res.json())
    //         .then(res=>setProveedor(res))            
    //     }
    //     getProveedores()
    //     },[])


    const columns = useMemo(()=>{COLUMNS},[])
    const datos = useMemo(()=>{
        dato,[]
    })
    const tableInstance =useTable({
        columns:columns,
        data: datos
    })

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow }=tableInstance;


     
    return(
        <table {...getTableProps()} className="table">
            <thead>
                {
                    headerGroups.map(headerGroup=>(
                        <tr{...headerGroup.getHeaderGroupProps}>
                        {
                            headerGroup.headers.map(column=>(
                                <th {...column.getHeaderProps}>{column.render('Header')}</th>

                            ))
                        }
                        </tr>
                    ))
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row=>{
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps}>
                                {
                                    row.cells.map((cell)=>{
                                        return <td {...cell.getCellProps()}>{cell.render('cell')}</td>
                                    })
                                }
                                
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

    );
}