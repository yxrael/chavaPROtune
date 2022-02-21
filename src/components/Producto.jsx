import React from 'react'
import { useState} from 'react'

import { useDispatch } from 'react-redux';
import { modificaCantidad } from '../actions/listadosActions';



const Producto = ( {producto } ) => {

    const dispatch = useDispatch();
    
    const { id, pais, nombre, proceso, precio, infoExtra, cantidad, disponible, descafeinado, continente} = producto;

    const [cantidadElegida, setCantidadElegida] = useState(cantidad);
    const [ precioPorProducto, setPrecioPorProducto ] = useState(precio);

    const handleCambioCantidad = (e) => {

        setCantidadElegida(e.target.value);
        setPrecioPorProducto( e.target.value * precio );

        const cambioCafe = {
            "id": id,
            "pais": pais,
            "nombre": nombre,
            "proceso": proceso,
            "infoExtra": infoExtra,
            "precio": precio,
            "cantidad": parseInt(e.target.value),
            "disponible": disponible,
            "descafeinado": descafeinado,
            "continente": continente
        };

        dispatch( modificaCantidad( id, cambioCafe ));

    }

    return (

            <div  className="container card bg-light mb-3 d-flex justify-content-between mxwListados">
                <div className="d-flex justify-content-between">
                    <div className="">
                        <div className="mt-2">
                            <div className="">
                                <p><strong>{pais}, {nombre}</strong></p>
                            </div>
                            <div>
                                <p>{proceso}</p>
                            </div>
                            <div className="">
                                <p>Precio: <b>{precio}€/kg</b></p>
                            </div>
                            
                        </div>    
                    </div>
                    <div>
                        

                    </div>
                    <div className="">
                        <div className="">
                                <label htmlFor="cantidad">Cantidad:</label>       
                        </div>
                    </div>
                    <div>
                        
                        <div className="mb-2">
                                <input
                                    name={id}
                                    type="number"
                                    className="form-control"
                                    min="0"
                                    max="50"
                                    placeholder="Cantidad de kgs:"
                                    value={cantidadElegida}
                                    onChange={ handleCambioCantidad }
                                />
                        </div>
                        <p>Total: <b>{precioPorProducto}€/kg</b></p>
                    </div>
                </div>

                < div className="text-center">
                {
                    descafeinado
                    ?
                    (
                        <span className='badge rounded-pill bg-info  text-light m-2'>{infoExtra}</span>
                    )
                    :
                    (
                        
                        <span className='badge rounded-pill bg-warning  text-dark m-2'>{infoExtra}</span>
                        
                    )
                } 
                 </div> 

            </div>




    )

}

export default Producto
