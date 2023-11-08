import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../CONTEXT/UserContext'



export const ProductList = () => {

    const { user } = useContext(UserContext);

    const [products, setProducts] = useState([]);

      
    const fetchProduct = async () => {
        try {
            const response = await axios.get('http://localhost:5000/products');
            console.log(response)
            setProducts(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchProduct();
      }, []);

    const onBuyProduct = async (productid) => {
        const values = {
            userId: user.id,
            productId: productid
        };
        try{
            const response = axios.post('http://localhost:5000/buys', values);
            console.log(response);
        }
        catch(error){
            console.log(error)
        }
      };

      const onDeleteProduct = async (productid) => {
        try{
            const response = axios.delete(`http://localhost:5000/product/${productid}`);
            console.log(response);
            fetchProduct();
        }
        catch(error){
            console.log(error)
        }
      };
    

    return (
        <div>
            <h1>Vinos disponibles</h1>
            <div className='row'>
                <div className='col-md-6'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre del vino</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Descripcion</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(product => (
                                    <tr key={product.id}>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.stock}</td>
                                        <td>{product.description}</td>
                                        {
                                            // usuario comun solo puede postularse a la oferta
                                            user.role === '2' ? (
                                                <div>
                                                    <td> 
                                                        <button type="button" className="btn btn-success" onClick={() => onBuyProduct(product.id)} > Comprar </button>
                                                    </td>
                                                </div>
                                            // admin puede editar y eliminar
                                            ):(
                                                <div>
                                                    <td> 
                                                        <button type="button" className="btn btn-warning"> Editar </button>
                                                    </td>
                                                    <td> 
                                                        <button type="button" className="btn btn-danger" onClick={() => onDeleteProduct(product.id)}>Eliminar</button>
                                                    </td>  
                                                </div>
                                            )
                                        }
                                    </tr>
                                ))
                            }  
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}