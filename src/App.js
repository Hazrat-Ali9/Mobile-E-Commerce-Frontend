import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import Add from "./Components/Dashboard/Add";
import Update from "./Components/Dashboard/Update";
import Navbar from "./Components/Home/Navbar";
import Footer from "./Components/Home/Footer";
import All from "./Components/Home/All";
import Details from "./Components/Home/Details";
import Dashboard from "./Components/Dashboard/Dashboard";
import View from "./Components/Home/View";
import AddBid from "./Components/Bid/AddBid";
import AllBid from "./Components/Bid/AllBid";
import MyOrder from "./Components/Orders/MyOrder";
import UpdateBid from "./Components/Bid/UpdateBid";
import AdminBid from "./Components/Bid/AdminBid";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/add" element={<Add/>}></Route>
        <Route path="/all" element={<All/>}></Route>
        <Route path="/myorder" element={<MyOrder/>}></Route>
        <Route path="/adminbid" element={<AdminBid/>}></Route>
        <Route path="/bid/:id" element={<AddBid/>}></Route>
        <Route path="/allbid" element={<AllBid/>}></Route>
        <Route path="/view/:id" element={<View/>}></Route>
        <Route path="/details/:id" element={<Details/>}></Route>
        <Route path="/update/:id" element={<Update/>}></Route>
        <Route path="/bidupdate/:id" element={<UpdateBid/>}></Route>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
