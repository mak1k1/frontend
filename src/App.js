import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <main className='py-3'>
          <Container>
            <Routes>
              {" "}
              <Route path='/' element={<HomeScreen />}></Route>
            </Routes>
          </Container>
        </main>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
