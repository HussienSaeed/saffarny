
import './App.css'
import Home from './Components/Home/Home'
import Middle from './Components/Middle/Middle'
import Navbar from './Components/Navbar/Navbar'
import Destination from './Components/Destination/Destination'
import Portfolio from './Components/Portfolio/Portfolio'
import Reviews from './Components/Reviews/Reviews'
import Questions from './Components/Questions/Questions'
import Subscribe from './Components/Subscribe/Subscribe'
import Footer from './Components/Footer/Footer'
import ScrollToTop from "react-scroll-to-top";

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Middle />
      <Destination />
      <Portfolio />
      <Reviews />
      <Questions />
      <Subscribe />
      <Footer />
      <ScrollToTop smooth style={{ backgroundColor: "#f34e1b",borderRadius: "50%" }} color="#fff" />

    </>
  )
}

export default App
