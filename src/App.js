import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import { Home, Login, Notfound, Register, Reset } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/cart/Cart";
import { CartContextProvider } from "./context/CartContext";
import { useState } from "react";

function App() {
  const [isMobileOn, setIsMobileOn] = useState(false);

  return (
    <div className="w-screen h-auto min-h-[100vh] flex flex-col bg-primary">
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <CartContextProvider>
        <Header isMobileOn={isMobileOn} setIsMobileOn={setIsMobileOn} />
        <Cart setIsMobileOn={setIsMobileOn} />
        <main className="mt-16 md:mt-16 px-3 md:px-8 md:py-6 py-4 w-full h-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset-password" element={<Reset />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </main>
      </CartContextProvider>
      <Footer />
    </div>
  );
}

export default App;
