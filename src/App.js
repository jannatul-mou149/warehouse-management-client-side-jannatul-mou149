import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './Pages/AddItems/AddItems';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import InventoryDetails from './Pages/Home/InventoryDetails';
import RequiredAuth from './Pages/Login/RequiredAuth/RequiredAuth';
import Login from './Pages/Login/Login';
import MyItems from './Pages/MyItems/MyItems';
import Registration from './Pages/Registration/Registration';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './NotFound/NotFound';
import Supplier from './Pages/Supplier/Supplier';
import ManageInventory from './Pages/ManageInventory/ManageInventoy';
import AllInventories from './Pages/AllInventories/AllInventories';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/car/:id' element={
          <RequiredAuth>
            <InventoryDetails></InventoryDetails>
          </RequiredAuth>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/car/inventory' element={
          <RequiredAuth>
            <ManageInventory></ManageInventory>
          </RequiredAuth>} />
        <Route path='/addItems' element={<AddItems></AddItems>}></Route>
        <Route path='/allInventory' element={<AllInventories></AllInventories>}></Route>
        <Route path='/myItems' element={<MyItems></MyItems>}></Route>
        <Route path='/supplierInfo' element={<RequiredAuth>
          <Supplier></Supplier>
        </RequiredAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Registration></Registration>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
