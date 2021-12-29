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
      </Routes>
    </Layout>
  );
}

export default App;
