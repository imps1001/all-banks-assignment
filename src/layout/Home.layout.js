import { React } from "react";
import { Route, Routes } from "react-router";
import Favourites from '../components/Favourites.component';
import Bank from '../components/Bankdetails.component';
import Main from '../components/Main.component';
import 'react-bootstrap/dist/react-bootstrap.min.js';

const Home = () => {
    
    return (
      <Routes>
        <Route path="/" exact element={<Main/>} />
        <Route path="/all-banks" exact element={<Main/>} />
        <Route path="/bank-details/:ifsc_code" element={<Bank/>} />
        <Route path="/favorites" element={<Favourites/>} />
      </Routes>
    );
  }

  export default Home;