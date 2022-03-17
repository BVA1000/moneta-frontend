import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/home";
import About from "./pages/About/about";
import SignIn from "./pages/SignIn/signin";
import SignUp from "./pages/SignUp/signup";
import News from "./pages/News/news";
import Services from "./pages/Services/services";
import Coins from "./pages/Coins/coins";
import Currency from "./pages/Currency/currency";

import Layout from "./layout/Layout/layout";
import AccountInfo from "./pages/Account/accountInfo";
import UpdateAccount from "./pages/Account/updateAcct";
import CreatePost from "./pages/Posts/createPost";

import CoinNewsInfo from "./pages/CoinNewsInfo/coinNewsInfo";
import CoinValuesInfo from "./pages/CoinValuesInfo/coinValuesInfo";
import MembershipInfo from "./pages/MembershipInfo/membershipInfo";

import XChange from "./pages/XChange/xchange";
import Listings from "./pages/Listings/listings";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/signin" element={<SignIn />} />

        <Route path="/signup" element={<SignUp />} />

        <Route path="/news" element={<News />} />

        <Route path="/services" element={<Services />} />

        <Route path="/coins" element={<Coins />} />

        <Route path="/currency" element={<Currency />} />

        <Route path="/account" element={<AccountInfo />} />

        <Route path="/update" element={<UpdateAccount />} />

        <Route path="/createpost" element={<CreatePost />} />

        <Route path="/coinnews" element={<CoinNewsInfo />} />

        <Route path="/coinvalues" element={<CoinValuesInfo />} />

        <Route path="/membership" element={<MembershipInfo />} />

        <Route path="/xchange" element={<XChange />} />

        <Route path="/listings" element={<Listings />} />
      </Routes>
    </Layout>
  );
}

export default App;
