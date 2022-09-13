import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import { Home, Login, Register, Reset } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/cart/Cart";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <div className="w-screen h-auto min-h-[100vh] flex flex-col bg-primary">
      <ToastContainer />
      <CartContextProvider>
        <Header />
        <Cart />
        <main className="mt-16 md:mt-16 px-3 md:px-8 md:py-6 py-4 w-full h-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset-password" element={<Reset />} />
          </Routes>
        </main>
      </CartContextProvider>
      <Footer />
    </div>
  );
}

export default App;
