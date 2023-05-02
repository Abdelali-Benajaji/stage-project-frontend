import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function CreateProduct(){

    const navigate = useNavigate();

    const [image, setImage] = useState('')
    const [nom,setNom] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')

    const changeHandler = (e)=>{
        setImage(e.target.files[0]);
        console.log(e.target.files[0])
    }

    const createProduct = async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        
        formData.append('image', image)
        formData.append('nom', nom)
        formData.append('email', email)
        formData.append('role', role)

        console.log(formData)
        await axios.post('http://127.0.0.1:8000/api/products', formData)
        .then(({data})=>{
            console.log(data.message)
            navigate('/')
        }).catch(({response})=>{
            if (response.status ==422) {
                console.log(response.data.errors)
            } else {
                console.log(response.data.message)
            }
        })
    }

    return(
        <div className="container mt-5">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
          
            <h3>Ajouter un Utilisateur
              <Link to='/' className='float-end'><button type="button" className="btn btn-outline-danger">Back</button></Link>
            </h3>
          </div>
          <div className="card-body">

                                <form onSubmit={createProduct}>

                                <div className="mb-3">
                                        <label className="form-label">image  </label>
                                        <input type="file" className="form-control"
                                         
                                            onChange={changeHandler}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Nom  </label>
                                        <input type="text" className="form-control" 
                                        value={nom}
                                        onChange={(e)=>{setNom(e.target.value)}}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email  </label>
                                        <input type="email" className="form-control" 
                                        value={email}
                                        onChange={(e)=>{setEmail(e.target.value)}}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Role  </label>
                                        <input type="text" className="form-control" 
                                        value={role}
                                        onChange={(e)=>{setRole(e.target.value)}}
                                        />
                                    </div>
                                   

                                    

                                    <div className="mb-3">
                                        <button type="submit" className="btn btn-primary mb-3">  Save</button>
                                    </div>

                                </form>



                            </div>


                        </div>
                    </div>
                </div>

            // </div>
            

        // </div>
    )




}