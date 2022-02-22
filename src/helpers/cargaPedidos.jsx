
import { cargaListaPedidos } from '../actions/listaPedidosAdmin';
import { db } from '../firebase/firebase-config'


export const cargaPedidos = async ( dispatch ) => {

        const listadoPedidos = await db.collection('pedidos').get();
        let listado = [];

        listadoPedidos.forEach( snapHijo => {

            listado.push(snapHijo.data());
        });

        dispatch( cargaListaPedidos(listado) );

        return listado;

}