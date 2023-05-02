import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProductList() {

    

    const [products, setProducts] = useState([])
    

    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = async () => {
        await axios.get('http://127.0.0.1:8000/api/products').then(({ data }) => {setProducts(data)}) 
    }

    const deleteProduct = async (id) => {
        await axios.delete('http://127.0.0.1:8000/api/products/' + id)
            .then(({ data }) => {
                console.log(data.message)
                fetchProducts();
            }).catch(({ response: { data } }) => {
                console.log(data.message)
            })
    }

   

 

    return (
       
        <div className="container mt-5">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h3>List des Utilisateurs
              <Link to={"/product/create"} className='float-end'><button type="button" className="btn btn-outline-primary">Ajouter Un Utilisateur</button></Link>
            </h3>
          </div>
          <div className="card-body">
            <table className='table table-striped '>
                            <thead>
                                <tr> 
                                    <th scope="col">Image</th>
                                    <th scope="col">#Id</th>
                                    <th scope="col">Nom</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.length > 0 && (
                                        products.map((row,key)=>(
                                            <tr key={key}>
                                                <td>{row.id}</td> 
                                            <td>
                                                    <img width="65px" src={`http://127.0.0.1:8000/storage/product/image/${row.image }`} /> 
                                                </td>
                                                <td>{row.nom}</td>
                                                <td>{row.email}</td>
                                                <td>{row.role}</td>
                                                
                                                <td>
                                                    <Link className="btn btn-success mb-2 float-end" to={`/product/edit/${row.id}`}>Edit</Link>
                                                </td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => deleteProduct(row.id)}>  Delete</button>
                                                    </td>
                                            </tr> 
                                        ))
                                    )
                                }
                               
                            </tbody>
                        </table>



                    </div>
                </div>

            </div>

        </div>
    )




}