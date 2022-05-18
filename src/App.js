import React from 'react';
import './App.scss';
import './assets/boxicons-2.1.1/boxicons-2.1.1/css/boxicons.min.css';
import { BrowserRouter } from "react-router-dom";
import Header from './pages/Header/Header'
import Footer from './pages/Footer/Footer'
import Gototop from './pages/Gototop/Gototop';
import RoutesConfig from './config/RoutesConfig';
// import { io } from "socket.io-client";
function App() {
  // React.useEffect(() => {
  //   const socket = io("http://localhost:5001")
  //   console.log(socket.on("firstEvent" , (msg) => {
  //     console.log(msg)
  //   }))
  // },[])
  return (
    <div className='App'>
      <BrowserRouter>
        <Header/> 
        <RoutesConfig/>
        <Gototop/>
        <Footer/>
      </BrowserRouter>
    </div>

  );
}

export default App;
