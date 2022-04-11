import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"
import CartScreen from "./screens/CartScreen"
import LoginScreen from "./screens/LoginScreen"

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <main className="py-3">
          <Container>
            <Routes>
              {" "}
              <Route path="/" element={<HomeScreen />}></Route>
              <Route path="/login/" element={<LoginScreen />}></Route>
              <Route path="/product/:id" element={<ProductScreen />}></Route>
              <Route path="/cart/">
                <Route path=":id" element={<CartScreen />} />
                <Route path="" element={<CartScreen />} />
              </Route>
            </Routes>
          </Container>
        </main>
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default App
