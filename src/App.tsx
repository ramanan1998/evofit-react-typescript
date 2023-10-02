import NavBar from "./components/navbar/NavBar"
import Home from "./components/home/Home"
import AffiliatedBrands from "./components/affeliated_brands/AffiliatedBrands";
import Benefits from "./components/benefits/Benefits";
import Footer from "./components/footer/Footer";
import JoinNow from "./components/join_now/JoinNow";
import HappyMembers from "./components/testimonials/HappyMembers";

function App() {

  return (
    <div className="app">
      <NavBar/>
      <Home/>
      <AffiliatedBrands/>
      <Benefits/>
      <HappyMembers/>
      <JoinNow/>
      <Footer/>
    </div>
  )
}

export default App
