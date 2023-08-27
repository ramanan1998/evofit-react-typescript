import NavBar from "./components/navbar/NavBar"
import Home from "./components/home/Home"
import AffiliatedBrands from "./components/affeliated_brands/AffiliatedBrands";

function App() {

  return (
    <div className="app">
      <NavBar/>
      <Home/>
      <AffiliatedBrands/>
      <div className="h-[50vh]"></div>
    </div>
  )
}

export default App
