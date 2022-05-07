import './App.css';
import Header from './Pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Footer/Footer';
import Login from './Pages/Home/Login/Login';
import Signup from './Pages/Home/Signup/Signup';
import NotFound from './Pages/NotFound/NotFound';
import DetailInventory from './Pages/DetailInventory/DetailInventory';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import MyItems from './Pages/MyItems/MyItems';
import AddItem from './Pages/AddItem/AddItem';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import Blog from './Pages/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/manageinventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>
        <Route path='/additems' element={<AddItem></AddItem>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <DetailInventory></DetailInventory>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
