import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

import NavbarMenu from "./components/NavbarMenu";
import Signup from "./components/Signup";
import ProfileAuthor from "./components/ProfileAuthor";
import ProfileUser from "./components/ProfileUser";
import Login from "./components/Login";
import Books from "./components/Books";
import Contact from "./components/Contact";
import Home from "./components/Home";
import DashboardAdmin from "./components/DashboardAdmin";
import DashboardAuthor from "./components/DashboardAuthor";
import Rays from "./components/Rays";
import Basket from "./components/Basket";
import ChatPage from "./components/ChatPage";
import Footer from "./components/Footer";

import "./App.scss";

//Redux
import { useSelector } from "react-redux";

import { loadUser } from "./redux/actions/auth";
import { getAllBooks } from "./redux/actions/author";

const App = () => {
  // const id = useSelector((state) => state.auth.person._id);
  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(getAllBooks());
    // store.dispatch(getAllContacts());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavbarMenu />
          <div className="App position-relative">
            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} />} />
              <Route
                exact
                path="/signup"
                render={(props) => <Signup {...props} />}
              />
              <Route
                exact
                path="/login"
                render={(props) => <Login {...props} />}
              />
              <Route
                exact
                path="/logout"
                render={(props) => <Home {...props} />}
              />
              <Route
                exact
                path="/profile-author"
                component={(props) => <ProfileAuthor {...props} />}
              />
              <Route
                exact
                path="/profile-user"
                render={(props) => <ProfileUser {...props} />}
              />
              <Route
                exact
                path="/books/:kind"
                render={(props) => <Books {...props} />}
              />
              <Route
                exact
                path="/the-rays"
                render={(props) => <Rays {...props} />}
              />
              <Route
                exact
                path={"/basket"}
                render={(props) => <Basket {...props} />}
              />
              <Route
                exact
                path="/contact"
                render={(props) => <Contact {...props} />}
              />
              <Route
                exact
                path="/dashboard-admin"
                render={(props) => <DashboardAdmin {...props} />}
              />
              <Route
                exact
                path="/dashboard-author"
                render={(props) => <DashboardAuthor {...props} />}
              />
              <Route
                exact
                path="/chat-page"
                render={(props) => <ChatPage {...props} />}
              />
            </Switch>
            <Footer />
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
