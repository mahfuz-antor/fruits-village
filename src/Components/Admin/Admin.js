import React, { useState } from 'react';
import Header from '../Header/Header';
import { useForm } from "react-hook-form";
import axios from 'axios';
import AddFruit from '../AddFruit/AddFruit';
import { Link } from 'react-router-dom';

const Admin = () => {
   
    return (
        <div className="container">
            <Header></Header>

            <div class="row">
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Fruits Village</h5>
        {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
        <a href="#">Manage Product</a><br/>
        <a href="#">Add Product</a><br/>
        <a href="#">Edit Product</a><br/>
        <Link to="/addFruit">Add here</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-9">
    <div class="card">
      <div class="card-body">
        {/* <h5 class="card-title">Special title treatment</h5> */}
        <AddFruit></AddFruit>
        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Admin;