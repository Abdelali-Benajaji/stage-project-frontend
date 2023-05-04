import * as React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'

import EditProduct from "./components/edit.component";
import CreateProduct from "./components/create.component";
import ProductList from "./components/list.component";
import ChartComponent from './components/chart.component';

function App() {
  return (
 <Router>

      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div className="container">
        
          <Link to={"/"} className="navbar-brand">DIGENCY</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
             
              <li className="nav-item">
                <Link className="nav-link active" to={"/users-chart"}><button type="button" className="btn btn-outline-primary">view the users chart</button></Link>
              </li>  
            </ul> 
          </div>
        </div>
      </nav>

   <Routes>
        <Route path="/product/create" element={<CreateProduct />}></Route>
        <Route path="/product/edit/:id" element={<EditProduct />}></Route>
        <Route path="/" element={<ProductList />}></Route>
        <Route path="/users-chart" element={<ChartComponent />}></Route>
   </Routes>
 </Router>
  );
}

export default App;
