import React from "react";

import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import ProductPage from "./components/pages/PoductPage";

import AboutUs from "./components/pages/AboutUs";
import Contact from "./components/pages/Contact";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import AdminDashboard from "./components/pages/AdminDashboard";
import AddContent from "./components/pages/AddContent";
import AdminBlog from "./components/pages/AdminBlog";
import UpdateContent from "./components/pages/UpdateContent";
import UserBlog from "./components/pages/UserBlog";
import AdminBooks from "./components/pages/AdminBooks";
import UserBooks from "./components/pages/UserBook";
import AdminProducts from "./components/pages/AdminProducts";
import BookDetails from "./components/pages/BookDetails";

function App() {
  return (
    <>
      <Router basename="/sample">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Login" component={LoginPage} />
          <Route path="/Register" component={RegisterPage} />
          <Route path="/AdminDashboard" component={AdminDashboard} />
          <Route path="/AddContent" component={AddContent} />
          <Route
            path="/UpdateContent/:content/:contentId"
            component={UpdateContent}
          />
          <Route path="/AdminAllNews" component={AdminBlog} />

          <Route path="/AllNews" component={UserBlog} />
          <Route path="/AdminBooks" component={AdminBooks} />
          <Route path="/AllBooks" component={UserBooks} />
          <Route path="/Book/:id" component={BookDetails} />
          <Route path="/PressServices" component={Home} />

          <Route path="/products" component={ProductPage} />
          <Route path="/AdminProducts" component={AdminProducts} />

          <Route path="/About" exact component={AboutUs} />
          <Route path="/Contact" exact component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
