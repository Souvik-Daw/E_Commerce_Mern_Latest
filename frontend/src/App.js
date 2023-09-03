import './App.css';
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import webFont from "webfontloader";
import React,{ lazy, Suspense } from 'react';
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp.js";
import store from "./store";
import { loadUser } from "./actions/userAction";
import { useSelector } from "react-redux";
import UserOptions from "./component/layout/Header/UserOptions.js";
import Profile from "./component/User/Profile.js";
import ProtectedRoute from "./component/Route/ProtectedRoute.js";
import UpdateProfile from "./component/User/UpdateProfile.js";

function App() {

  const { isAuthenticated, user,loading } = useSelector((state) => state.user);

  React.useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

  }, []);

  return (
    <Router>
    <Header />
    {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        
      <Route exact path="/" element={<Home />} />
      <Route exact path="/product/:id" element={<ProductDetails />} />
      <Route exact path="/products" element={<Products />} />
      <Route exact path="/search" element={<Search />} />
      <Route path="/products/:keyword" element={<Products />} />  
      <Route exact path="/login" element={<LoginSignUp />} />

      </Routes>
      
      {/* isAdmin is not tested,not redirection to login after unauthorising */}
      {
      isAuthenticated===true ?
      <ProtectedRoute exact path="/account" element={<Profile />} />
      :
      <h1>------------Login again to view this page------------</h1>
      }
      
      {
      isAuthenticated===true ? 
      <ProtectedRoute exact path="/me/update" element={<UpdateProfile />} />
      :
      null
      }
      
      <Footer />
    </Router>
  );
}

export default App;
