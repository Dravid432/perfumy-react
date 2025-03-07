import Navbar from "./components/Navbar.js"
import Searchbar from "./components/Search.js"
import Product from "./components/Product.js"
import About from "./components/About.js"
import Footer from "./components/Footer.js"


function App()
{
    return(<div>
        <Navbar></Navbar>
        <Searchbar></Searchbar>
        <Product></Product>
        <About></About>
        <Footer></Footer>
      </div>
    )
}

export default App