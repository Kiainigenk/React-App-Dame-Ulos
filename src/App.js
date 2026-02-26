import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

// === Import Cart ===
import { CartProvider } from "./context/CartContext";
import CartSidebar from "./components/CartSidebar";
import "./styles/Cart.css"; // Sesuaikan path jika berbeda

// === Import Halaman ===
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import ProductDetail from "./Pages/ProductDetail";

import ProcessList from "./Pages/ProcessList";
import ProcessDetail from "./Pages/ProcessDetail";

// === Import Komponen ===
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <CartSidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tentang" element={<About />} />
              <Route path="/produk" element={<Products />} />
              <Route path="/produk/:id" element={<ProductDetail />} />
              <Route path="/proses-pembuatan" element={<ProcessList />} />
              <Route path="/proses-pembuatan/:id" element={<ProcessDetail />} />
              <Route path="/kontak" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;