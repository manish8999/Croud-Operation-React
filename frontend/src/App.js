
import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './Components/Footer';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Addproduct from './Components/Addproduct';
import PrivateComponent from './Components/PrivateComponent';
import ProductList from './Components/ProductList';
import Updateproduct from './Components/Updateproduct';
import Signin from './Components/Signin';
import Imageupload from './Components/Imageupload';
import Image from './Components/Image';
import ListProduct from './Components/Listproduct';
import ProductAdd from './Components/Productadd';
import Productupdate from './Components/Productupdate';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      {/* <Imageupload/> */}
      {/* <Image/> */}
      <Routes>
        <Route element={<PrivateComponent/>}>
      <Route path="/" element={<ListProduct/>}/>
      <Route path="/add" element={<ProductAdd/>}/>
      <Route path="/update/:id" element={<Productupdate/>}/>
      <Route path="/logout" element={<h1>Product Logout compotnent</h1>}/>
      <Route path="/profile" element={<h1>Profile compotnent</h1>}/>

        </Route>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>

      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
