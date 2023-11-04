
import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import PrivateComponent from './Components/PrivateComponent';
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
