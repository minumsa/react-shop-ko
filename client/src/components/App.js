import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import UploadProductPage from "./views/UploadProductPage/UploadProductPage.js";
import DetailProductPage from "./views/DetailProductPage/DetailProductPage";
import CartPage from "./views/CartPage/CartPage";
import HistoryPage from "./views/HistoryPage/HistoryPage";
import OuterPage from "./views/CategoryPage/OuterPage";
import TopPage from "./views/CategoryPage/TopPage";
import BottomPage from "./views/CategoryPage/BottomPage";
import ShoesPage from "./views/CategoryPage/ShoesPage";
import BagPage from "./views/CategoryPage/BagPage";
import AccessoryPage from "./views/CategoryPage/AccessoryPage";
import LifestylePage from "./views/CategoryPage/LifestylePage";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/product/upload" component={Auth(UploadProductPage, true)} />
          <Route exact path="/product/:productId" component={Auth(DetailProductPage, null)} />
          <Route exact path="/user/cart" component={Auth(CartPage, true)} />
          <Route exact path="/history" component={Auth(HistoryPage, true)} />
          <Route exact path="/outer" component={Auth(OuterPage, null)} />
          <Route exact path="/top" component={Auth(TopPage, null)} />
          <Route exact path="/bottom" component={Auth(BottomPage, null)} />
          <Route exact path="/shoes" component={Auth(ShoesPage, null)} />
          <Route exact path="/bag" component={Auth(BagPage, null)} />
          <Route exact path="/accessory" component={Auth(AccessoryPage, null)} />
          <Route exact path="/lifestyle" component={Auth(LifestylePage, null)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
