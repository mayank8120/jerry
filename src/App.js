import React, { useEffect } from 'react'

import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


import NavBar from './CommonContainers/NavBar';
import Footer from './CommonContainers/Footer';






import './Assets/CSS/progressBar.css'
import './Assets/CSS/style.css'
import { routesAndElements } from './Routes/Routes';
import apiConnector from './backendConnect/apiService';
import { SUCCESS } from './Constants/Constants';


function App() {

  useEffect(() => {

    let data = {
      "addressObj": {
        "property_city": "PHOENIX",
        "property_county": "Maricopa",
        "property_state": "AZ",
        "property_zip": "85024",
        "property_street_display_address": "E DEER VALLEY RD 79"
      },
      "page": 1,
      "pagination": 7
    }



    apiConnector("searchResult", data)
      .then((response) => {
        if (response.status === SUCCESS) {
          console.log(response, "working");
        } else {
          console.log("API failure", 'working');
        }
      })
      .catch((err) => {
        console.log(err);
      });

  }, [])



  return (
    <>

      <NavBar />
      <RouterProvider router={createBrowserRouter(routesAndElements)} />
      <Footer />


    </>
  );
}

export default App;
