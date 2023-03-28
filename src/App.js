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



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <Home />
//     ),
//   },
//   {
//     path: "/propertydetailpage",
//     element: (
//       <PropertyDetailPage />
//     ),
//   }, {
//     path: "/searchresultslist",
//     element: (
//       <SearchResultsList />
//     ),
//   },

// ]);



function App() {
  return (
    <>

      <NavBar />
      <RouterProvider router={createBrowserRouter(routesAndElements)} />
      <Footer />


    </>
  );
}

export default App;
