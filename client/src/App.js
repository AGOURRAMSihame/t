import './App.css';
import React from 'react';
import Header from './components/Header.jsx';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute.jsx';


function App() {
  


  // const isLoggedIn = async () => {
  //   try {
  //     const res = await fetch('/auth', {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json"
  //       },
  //       credentials: "include"
  //     });

  //     if (res.status === 200) {
  //       setauth(true)

  //     }
  //     if (res.status === 401) {
  //       setauth(false)

  //     }

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   isLoggedIn();
  // }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>

      </Routes>


      <Footer />

    </>
  );
}

export default App;
