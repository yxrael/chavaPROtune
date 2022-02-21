import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import ConfirmaEnvio from '../components/ConfirmaEnvio'
import Listado from '../components/Listado'
import ListadoAdmin from '../components/ListadoAdmin'
import MenuLogin from '../components/MenuLogin'
import Seleccion from '../components/Seleccion';
import AdministradorPedidos from '../components/AdministradorPedidos';
import BotonesAdmin from '../components/BotonesAdmin'
import { useDispatch } from 'react-redux'
import { filtraDisponibles } from '../actions/listadosActions'
import { cargaPedidos } from '../helpers/cargaPedidos'


const DashBoard = () => {

    let isAdmin = false;

    const { uid } = useSelector( state => state.auth );

    if( uid === 'mHDUnKJe98OtEBYi4siKY43VoEq2' ){
        isAdmin = true;

    } else {
        isAdmin = false;
    };

    const dispatch = useDispatch();
    dispatch( filtraDisponibles() );
    cargaPedidos( dispatch );
    
    return (
        <>
            {
                isAdmin
                ?
                (
                    <>

                <MenuLogin />
                <BotonesAdmin />

                <div className='container'>

                    <Routes>
                        
                        {/* <Route path='confirma' element={<ConfirmaEnvio />}/> */}
                        <Route path='pedidos' element={<AdministradorPedidos />}/>
                        <Route path='administrar' element={<ListadoAdmin />}/>
                        <Route path='/*' element={<AdministradorPedidos />}/>

                    </Routes>
                    
                </div>
        
            </>
                )
                :
                (
                    <>

                    <MenuLogin />
        
                    <div className='container'>
        
                        <Routes>
                            
                            <Route path='confirma' element={<ConfirmaEnvio />}/>
                            <Route path='filtered' element={<Listado />}/>
                            <Route path='seleccion' element={<Seleccion />}/>
                            <Route path='/*' element={<Listado />}/>
        
                        </Routes>
                        
                    </div>
            
                </>
                )
            }
        </>


        
    )
}

export default DashBoard
