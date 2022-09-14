import "./App.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
            </Routes>
            <ToastContainer></ToastContainer>
        </div>
    );
}

export default App;
