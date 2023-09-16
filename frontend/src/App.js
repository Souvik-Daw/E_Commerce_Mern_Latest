import './App.css';
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import webFont from "webfontloader";
import React from 'react';
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
import UpdatePassword from "./component/User/UpdatePassword.js";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import Payment from "./component/Cart/Payment.js";
import MyOrders from "./component/Order/MyOrders.js";
import OrderDetails from "./component/Order/OrderDetails.js";
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct.js";
import UpdateProduct from "./component/Admin/UpdateProduct.js";
import OrderList from "./component/Admin/OrderList.js";
import ProcessOrder from "./component/Admin/ProcessOrder.js";
import UsersList from "./component/Admin/UsersList.js";
import UpdateUser from "./component/Admin/UpdateUser.js";
import Contact from "./component/layout/Contact/Contact.js";
import About from "./component/layout/About/About.js";
import ProductReviews from "./component/Admin/ProductReviews.js";
import NotFound from "./component/layout/Not Found/NotFound.js";

function App() {

  const { isAuthenticated, user, loading } = useSelector((state) => state.user);

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
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />

      </Routes>

      {
        isAuthenticated === true ?
          <ProtectedRoute exact path="/account" element={<Profile />} />
          :
          null
      }

      {
        isAuthenticated === true ?
          <ProtectedRoute exact path="/me/update" element={<UpdateProfile />} />
          :
          null
      }

      {
        isAuthenticated === true ?
          <ProtectedRoute exact path="/password/update" element={<UpdatePassword />} />
          :
          null
      }

      {
        isAuthenticated === true ?
          <ProtectedRoute exact path="/shipping" element={<Shipping />} />
          :
          null
      }


      {
        isAuthenticated === true ?
          <ProtectedRoute exact path="/process/payment" element={<Payment />} />
          :
          null
      }

      {
        isAuthenticated === true ?
          <ProtectedRoute exact path="/orders" element={<MyOrders />} />
          :
          null
      }

      {
        isAuthenticated === true ?
          <ProtectedRoute exact path="/success" element={<OrderSuccess />} />
          :
          null
      }

      {
        isAuthenticated === true ?
          <ProtectedRoute exact path="/order/confirm" element={<ConfirmOrder />} />
          :
          null
      }

      {
        isAuthenticated === true ?
          <ProtectedRoute exact path="/getOrder/:id" element={<OrderDetails />} />
          :
          null
      }

      {
        isAuthenticated === true && user.role === 'admin' ?
          <ProtectedRoute exact path="/admin/dashboard" element={<Dashboard />} />
          :
          null
      }

      {
        isAuthenticated === true && user.role === 'admin' ?
          <ProtectedRoute exact path="/admin/products" element={<ProductList />} />
          :
          null
      }

      {
        isAuthenticated === true && user.role === 'admin' ?
          <ProtectedRoute exact path="/admin/product" element={<NewProduct />} />
          :
          null
      }

      {
        isAuthenticated === true && user.role === 'admin' ?
          <ProtectedRoute exact path="/admin/product/:id" element={<UpdateProduct />} />
          :
          null
      }

      {
        isAuthenticated === true && user.role === 'admin' ?
          <ProtectedRoute exact path="/admin/orders" element={<OrderList />} />
          :
          null
      }


      {
        isAuthenticated === true && user.role === 'admin' ?
          <ProtectedRoute exact path="/admin/order/:id" element={<ProcessOrder />} />
          :
          null
      }

      {
        isAuthenticated === true && user.role === 'admin' ?
          <ProtectedRoute exact path="/admin/users" element={<UsersList />} />
          :
          null
      }

      {
        isAuthenticated === true && user.role === 'admin' ?
          <ProtectedRoute exact path="/admin/user/:id" element={<UpdateUser />} />
          :
          null
      }

      {
        isAuthenticated === true && user.role === 'admin' ?
          <ProtectedRoute exact path="/admin/reviews" element={<ProductReviews />} />
          :
          null
      }

      

      <Footer />
    </Router>
  );
}

export default App;
