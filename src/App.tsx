import NavBar from "./components/navbar/NavBar"
import Home from "./components/home/Home"
import AffiliatedBrands from "./components/affeliated_brands/AffiliatedBrands";
import Benefits from "./components/benefits/Benefits";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <div className="app">
      <NavBar/>
      <Home/>
      <AffiliatedBrands/>
      <Benefits/>
      <Footer/>
    </div>
  )
}

export default App
